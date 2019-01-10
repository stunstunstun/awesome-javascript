const GitHub = require('../lib/github')
const { decrypt } = require('../lib/crypto')
const config = require('../config')

describe('Integration with GitHub API', () => {
  let github

  beforeAll(() => {
    const { accessToken } = config
    github = new GitHub({
      accessToken: decrypt(accessToken),
      baseURL: 'https://api.github.com',
    })
  })

  test('Get a user', async () => {
    const res = await github.getUser('stunstunstun')
    expect(res).toEqual(
      expect.objectContaining({
        login: 'stunstunstun',
      })
    )
  })
})