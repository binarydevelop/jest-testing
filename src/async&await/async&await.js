function fetchData(fakedValue){
    return new Promise((resolve, reject) => {
        if(fakedValue == 1){
            resolve('Passed')
        }
        reject('Failed')
    })
}

module.exports = fetchData