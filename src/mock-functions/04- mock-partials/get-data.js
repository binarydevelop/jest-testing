const {api, returnSomething} = require('./someModule')

const getData = async () => {
    const data = await api('/users')
    return {
        data: data,
        somethingElse: await returnSomething()
    }
}

module.exports = getData;