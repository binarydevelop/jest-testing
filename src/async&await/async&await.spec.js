const fetchData = require('./async&await')

describe('Async & Await', () => {
  test('it should pass', async () => {
      expect.assertions(1)
      const data = await fetchData(1);
      expect(data).toMatch('Passed')
  })
  test('it should fail', async () => {
    expect.assertions(1)
    try{
        const data = await fetchData(2);
    }
    catch(err){
        expect(err).toMatch('Failed')
    }

})
})