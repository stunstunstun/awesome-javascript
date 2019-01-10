const fetch = require('node-fetch')

class GitHub {
  constructor({ accessToken, baseURL }) {
    this.accessToken = accessToken
    this.baseURL = baseURL
  }

  async getUser(username) {
    if (!this.accessToken) {
      throw new Error('accessToken is required.')
    }
    return fetch(`${this.baseURL}/users/${username}`, {
      method: 'GET',
      headers: {
        Authorization: `token ${this.accessToken}`,
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())
  }
}

module.exports = GitHub