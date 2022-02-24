const { TestWatcher } = require('jest')
const fetchData = require('./resolves &rejects')

describe('Using Resolves to and RejctsTo', () => {
    test('it should pass', () => {
        expect.assertions(1)
        return expect(fetchData(1)).resolves.toMatch('Resolved')
    })

    test('it should fail', () => {
        expect.assertions(1)
        return expect(fetchData(2)).rejects.toMatch('Rejected')
    })
})