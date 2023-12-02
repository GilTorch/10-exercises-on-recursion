function exponentiation(base,power) {
    if(power === 0){
        return 1;
    }else if (power === 1){
        return base
    }else {
        return base * exponentiation(base,power - 1);
    }
}

// performance enhanced
function exponentiationEnhanced(base, power) {
    if (power === 0) {
        return 1;
    } else if (power % 2 === 0) {
        const halfPower = exponentiation(base, power / 2);
        return halfPower * halfPower;
    } else {
        return base * exponentiation(base, power - 1);
    }
}