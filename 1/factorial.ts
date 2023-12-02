// 1! -> 1
// 0! -> 1
// 2! -> 2x1
// 3! -> 3x2x1
// 4! -> 4x3x2x1

function factorial(n){
    if(n <= 0){
        return 1
    }else {
       return n*factorial(n-1)
    }
}