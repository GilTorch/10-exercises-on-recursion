function fibonnaciSequence(n){
    if(n === 1){
        return 0;
    } else if(n === 2){
        return 1;
    }else{
        return fibonnaciSequence(n-1) + fibonnaciSequence(n-2);
    }
}
