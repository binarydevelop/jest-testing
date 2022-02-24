function sumIt(callback, sum = 0 ){
    for(let i = 0; i< 10000000; i++){
        sum += i;
    }
    callback(sum);
    return sum
}

function displayText(text, cb){
    console.log(text)
}

module.exports = {sumIt, displayText}