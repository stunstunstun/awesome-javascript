const crypto = require('crypto')
const config = require('../config')

const ENC_ALGORITHM = 'aes-256-gcm'

const encrypt = text => {
  const salt = crypto.randomBytes(64)
  const iv = crypto.randomBytes(16)
  const key = crypto.pbkdf2Sync(config.secretKey, salt, 2145, 32, 'sha512')
  const cipher = crypto.createCipheriv(ENC_ALGORITHM, key, iv)
  const encrypted = Buffer.concat([cipher.update(text, 'utf-8'), cipher.final()])
  const tag = cipher.getAuthTag()
  return Buffer.concat([salt, iv, tag, encrypted]).toString('base64')
}

const decrypt = data => {
  const bData = new Buffer(data, 'base64')
  const salt = bData.slice(0, 64)
  const iv = bData.slice(64, 80)
  const tag = bData.slice(80, 96)
  const encrypted = bData.slice(96)
  const key = crypto.pbkdf2Sync(config.secretKey, salt, 2145, 32, 'sha512')
  const decipher = crypto.createDecipheriv(ENC_ALGORITHM, key, iv)
  decipher.setAuthTag(tag)
  return decipher.update(encrypted, 'binary', 'utf8') + decipher.final('utf8')
}

module.exports = {
  encrypt,
  decrypt,
}