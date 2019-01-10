const Joi = require('joi')
const path = require('path')

require('dotenv').config({
  path: path.join(path.normalize(`${__dirname}`), '.', '.env'),
})

const envVarsSchema = Joi.object({
  ACCESS_TOKEN: Joi.string().required(),
})
  .unknown()
  .required()

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema)
if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

const config = {
  accessToken: envVars.ACCESS_TOKEN,
}

module.exports = config