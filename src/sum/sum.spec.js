const { TestWatcher } = require('jest')
const sum = require('./sum')

describe('sum', () => {
    test('adds two numbers', () => {
        expect(sum(1, 2)).toBe(1 + 2)
    })

    test('returns single value if single argument', () => {
        expect(sum(1)).toBe(1)
    })
})
