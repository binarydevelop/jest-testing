const { TestWatcher } = require('jest')
const exceptionThrower = require('./exception')

describe('Exception Thrower', () => {
    test('it should throw an excpetion', () => {
        expect(() => exceptionThrower()).toThrow('Exception thrown')
    })
})