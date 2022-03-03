const { TestWatcher } = require('jest')
const { sumIt, displayText } = require('./callback')

describe('CallBacks', () => {
    test('it should met the sum expectation', (done) => {
        try{
            expect(sumIt(displayText, 0)).toEqual(49999995000000);
            expect.hasAssertions()
            done();
        }
        catch(err){
            console.log(err)
        }
    })
})