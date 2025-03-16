// ! My solve
function doubleChar(str) {
    let word ='';
    for(i=0 ; i<str.length; i++){
        word +=(str[i].repeat(2));
    }
    return word; 
  }
  console.log(doubleChar("String"  ));
// ! Another solves 
const doubleChar = (str) => str.split("").map(c => c + c).join("");

// ! Another solves 
function doubleChar(str) {
    return str.replace(/(.)/g, "$1$1")
  }
