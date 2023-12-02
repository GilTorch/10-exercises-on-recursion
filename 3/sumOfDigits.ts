function sumOfDigits(n){
    const digitsString = n.toString();
    if(digitsString.length === 1){
        return parseInt(digitsString);
    }else {
        // get the last number
        const lastNumber = parseInt(digitsString.slice(-1));
        // remove it from the digits
        let lessDigits = parseInt(digitsString.slice(0,-1));
        return lastNumber + sumOfDigits(lessDigits)
    }
}