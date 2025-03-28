// No.1

  function String(str){
    return str.split('').reverse().join('')
  }


// No.2
function sum(arr){
    let sum = 0
    
    arr.array.forEach(number => {
        if (number % 2 === 0){
            sum +=number;
        }

        
    });
    return sum
}

console.log(productOrSum(5, 5));  
console.log(productOrSum(3, 7));  

// No.3
function number(num1, num2){
    if (num1 === num2){
        return num1 * num2;    // If are the same they will return the product 
    } else{
        return num1 + num2;   //  If are different they will return the sum
    }

}

// No.4
function palindrome(word){
    word = word.toLowerCase();

    for(let x = 0; x < word.length / 2; x++){
        if ( word[x] !== word[word.length - 1 - x]){
            return false;  // If the word is not a palindrome
        }
    }

    return true;
    
}


console.log(palindrome("mavuuma"));
console.log(palindrome("Whitney"));
console.log(palindrome("My Mother Holds My Everything."))


  


  
  