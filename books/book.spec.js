const bookService = require('./books.service')
const bookProvider = require('./books.provider')

//here isolation is taken care of as we are mocking the bookProvider with fake data rather than using the 
describe('Book service', () => {
    test('should return One', () => {
        const bookProvider = jest.fn([{id: 1, title: 'test'}])
        expect (bookProvider.length).toBe(1); 
    })
})