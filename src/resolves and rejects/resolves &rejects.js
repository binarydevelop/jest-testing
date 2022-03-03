function fetchData(fakedValue){
    return new Promise((resolve, reject) => {
        if(fakedValue == 1){
            resolve('Resolved')
        }
        reject('Rejected')
    })
}

module.exports = fetchData