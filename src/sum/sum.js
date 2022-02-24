function sum (a, b) {
    if(a == undefined){
        return b
    }
    if(b == undefined){
        return a
    }
    return a + b; 
}

module.exports = sum 