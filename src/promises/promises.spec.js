const fetchData = require('./promises')

describe('Promises Test', () => {
    test('it should pass', () => {
        expect.assertions(1);
        return fetchData(23)
            .then(data => {
                expect(data).toBe('returned')
        })
            .catch(err => {
                expect(err).toMatch('ERROR')
            })
    })

    test('it should fail', () => {
        expect.assertions(1);
        return fetchData(23)
            .then(data => {
                expect(data).toBe('returned')
        })
            .catch(err => {
                expect(err).toMatch('ERROR')
            })
    })
})