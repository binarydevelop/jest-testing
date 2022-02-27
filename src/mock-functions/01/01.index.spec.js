const forEach = require('./01.index')

describe('Mock Functions', () => {
  const mockCallback = jest.fn(x => x + 42) // we are making a mock function here which will have .mock property

  forEach([1,2,3], mockCallback)

  // mock function call length is being checked
  // How many times the mockcallback will be called
  test('calls to be of length 3', () => {
    expect.assertions(1)
    expect(mockCallback.mock.calls.length).toBe(3)
  })

  // first callback first argument 
  //    call number       
  //         |  |---- argument number
  // ..calls[0][0] --> first callback call first argument
  // ..calls[1][0] --> second callback call first argument
  test('first callback call first argument to be 1', () => {
    expect.assertions(1)
    expect(mockCallback.mock.calls[0][0]).toBe(1);
  })

  test('second callback call first argument to be 2', () => {
    expect.assertions(2)
    expect(mockCallback.mock.calls[1][0]).toBe(2);
    expect(mockCallback.mock.calls[1][1]).toBe(undefined);
  })

  //mock.results
  test('results of mockCallback', () => {
    expect.assertions(2)
    expect(mockCallback.mock.results[0].value).toBe(43)
    expect(mockCallback.mock.results[1].value).toBe(44)
  })
})

