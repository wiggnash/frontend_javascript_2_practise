/**
 * When an error occurs, JavaScript will normally stop, and generate an error message.
 * The try/catch/finally statement handles some or all of the errors that may occur in a block of code, while still running code.
 * Errors can be coding errors made by the programmer, errors due to wrong input, and other unforeseen things. 
 */

function errorHandler(x) {
    try{
      const val = getX(x);
      return val;
    }catch(error){ // this is a error object , where we can print whatever we want  
      return error;
    }
  }
  
  function getX(x) {
    if (x == 5) {
      throw new Error("Error Occured");
    }
    return x;
  }