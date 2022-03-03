const axios  = require('axios')
const Users  = require('./user')

jest.mock('axios')

describe('Mocking Modules', () => {
    test('should fetch all users', () => {
        const users = [{name: "Tushar"}, {name: "Hoe"}]
        const resp = { data : users }
        axios.get.mockResolvedValue(resp)
        return Users.all().then(data => expect(data).toEqual(resp.data))
    })  

    test('should fetch a single user', () => {
        const user = { name: "Tushar" }
        const resp = { data: user }
        axios.get.mockResolvedValue(resp)
        return Users.findOneUser().then(data => expect(data).toEqual(resp.data))
    })  
})