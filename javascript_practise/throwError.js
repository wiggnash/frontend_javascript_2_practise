function isAlphabet(X) {
    const check = checkAlphabet(X);
    if(check){
          return "Yes";
    }else{
          const errorObj = new Error("Not Alphabet");
          throw errorObj;
    }
};

function checkAlphabet(X) {

  let n = X.charCodeAt(0);

  let strStartsWithALetter = (n>=65 && n < 91) || ( n>=97 && n<123);

  

// You can Google about what is ASCII code to know more about

  // why are we using numbers like 65, 91, 97 & 123

  

if (strStartsWithALetter) {

  // Yes, it starts with an alphabet

  return true;

} else {

  // No, it doesnt start with an alphabet

  return false;

} 

}