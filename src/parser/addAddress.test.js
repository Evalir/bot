const parseAddAddress = require('./addAddress')

describe('addAddress handler tests', () => {
  test('It should error if a string is not provided', () =>
    expect(() => parseAddAddress(undefined)).toThrow(/type/))

  test('It should error if an empty string is passed in', () =>
    expect(() => parseAddAddress('')).toThrow(/empty/))

  test('It should error if not enough arguments are provided', () =>
    expect(() => parseAddAddress('!addaddress foo')).toThrow(/arguments/))

  test('It should properly pass a well formed message', () =>
    expect(parseAddAddress('!addaddress foo 0x')).toEqual(['foo', '0x']))
})
