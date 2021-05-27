exports.creditCheck = function (str) {
// double every other digit moving left from the rightmost digit
// if an individual digit during this doubling operation is greater than 10, sum its digits
// sum all the digits
// check the sum of all digits modulo 10 and 0
    let array = str.split("");
    let sum = 0;
    let numberLength = array.length;
    
    if (numberLength != 16){
        return "This is an invalid card number!";
    }
    
    for (let i=0; i < array.length; i++){
        array[i] = parseInt(array[i]);
    }
    
    for (let i=array.length-2; i >=0; i=i-2 ){
        array[i] = array[i]*2;
        if(array[i]>9){
            array[i] = array[i]-9;
        }
    }
    for (let x =0; x < array.length; x++){
        sum += array[x];
    }
    if (sum % 10 == 0) {
        return "The number is valid!";
    }
    else 
        {return "The number is invalid!";}
    
    //console.log(array);
    }

    




