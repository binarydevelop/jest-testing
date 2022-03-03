const intializeData = require("./setup&teardown")

describe('Setup & Teardown', () => {
    beforeEach(async () => {
        const data = await intializeData();
        console.log('BEFORE', data)
    })
    afterEach(async () => {
        const data = await intializeData();
        data.map((elem, index) => data[index] = undefined  )
        console.log('AFTER', data)
    })
    test('Intialize data Test', () => {
        
    })
})