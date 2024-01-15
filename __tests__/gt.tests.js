/* eslint-disable no-undef */
const gamerTag = require('../gamerTag')

describe('A suite of test to test the validity of a gamertag', function () {
  it('gamerTag has at least 8 characters', function () {
    const result = gamerTag.checkGamerTag('Mattofle')

    expect(result).toBe('gamer tag ok')
  })

  it('gamerTag does not have 8 characters', function () {
    const result = gamerTag.checkGamerTag('Mat')

    expect(result).toBe('Invalid - gamertag length must be at least 8 characters')
  })
})