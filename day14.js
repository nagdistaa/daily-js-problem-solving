// ! Can't Solve This Problem .
/*
function squareOrSquareRoot(array) {
    let newArr=[];
    for (let i = 0; i < array.length; i++) {
        if(array[i] / (array[i]/2) == 1){
            newArr.push()
        }
    }
  }
console.log(squareOrSquareRoot([4,3,9,7,2,1])); //[2,9,3,49,4,1]
*/

// ! After Take a hint ( solve but when test no)
/* 
function squareOrSquareRoot(array) {
    let newArr=[];
    for (let i = 0; i < array.length; i++) {
        if(array[i] / Math.sqrt(array[i])==Math.sqrt(array[i])){
            newArr.push(Math.sqrt(array[i]))
        }else{
            newArr.push((array[i] * array[i]))
        }
    }
    return newArr ; 
  }

console.log(squareOrSquareRoot([4,3,9,7,2,1])); //[2,9,3,49,4,1]

*/

// ! modify my solve
/*
function squareOrSquareRoot(array) {
    let newArr=[];
    for (let i = 0; i < array.length; i++) {
        if(Math.sqrt(array[i]) == Math.floor(Math.sqrt(array[i]))){
            newArr.push(Math.sqrt(array[i]))
        }else{
            newArr.push((array[i] * array[i]))
        }
    }
    return newArr ; 
  }

console.log(squareOrSquareRoot([4,3,9,7,2,1])); //[2,9,3,49,4,1]
*/

// ! Another Solution 
/*
function squareOrSquareRoot(array) {
    let newArr=[];
    for (let i = 0; i < array.length; i++) {
        if(Number.isInteger(Math.sqrt(array[i]))){
            newArr.push(Math.sqrt(array[i]))
        }else{
            newArr.push((array[i] * array[i]))
        }
    }
    return newArr ; 
  }
  console.log(squareOrSquareRoot([4,3,9,7,2,1])); //[2,9,3,49,4,1]
*/
// ! Anothre Solution

function squareOrSquareRoot(array) {

    return array.map((ele)=> Number.isInteger(Math.sqrt(ele)) ? Math.sqrt(ele):ele*ele) ; 
  }
  console.log(squareOrSquareRoot([4,3,9,7,2,1])); //[2,9,3,49,4,1]