async function api (endpoint) {
    return await fetch(endpoint).then(res => res.json())
}

async function returnSomething(){
    return 'Something'
}

module.exports = { api , returnSomething }