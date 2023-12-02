function reverseString(s){

    if(s.length === 1){
        return s;
    }

    return s.slice(-1) + reverseString(s.slice(0, - 1));
}
