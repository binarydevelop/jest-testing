function fetchData(fakeValue){
    return new Promise((resolve, reject) => {
        if(fakeValue > 1){
            resolve('returned')
        }
        reject('ERROR')
    })
}

module.exports = fetchData;