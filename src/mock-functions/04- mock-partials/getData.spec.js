const getData = require('./get-data')
const { api } = require('./someModule')

jest.mock('./someModule', () => ({
    ...jest.requireActual('./someModule'),
    api: () => Promise.resolve('foo'),
    // returnSomething: jest.requireActual('./someModule').returnSomething,
    //we can do like above but it will be cumbersome if there are too many exported functions.so 
}))

describe('Mocking Partials', () => {
    test('Get Data Function Test', async () => {
        const result = await getData();
        return expect(result).toEqual({
            data: 'foo',
            somethingElse: 'Something'
        })
    })
})

