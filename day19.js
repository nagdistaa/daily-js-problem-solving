// ! MY Solve 

function reverse(string){

    let rmSpace =  string.trim() ;     
    let strArr = rmSpace.split(" ")

    let reverseArr = [] ; 
    for (let i = strArr.length -1; i >= 0; i--) {
        reverseArr.push(strArr[i])
    }
     return reverseArr.join(" ") ;
  }

console.log(reverse("There. Hi let's go with him"));

// ! Other Solve ; 

function reverse(string){
    return string.split(' ').reverse().join(' ');
  }
// ! Other solve

function reverse(string){
    //your code here
    return string.split(" ").reduce((acc, curr) => curr + " " + acc);
    ;
  }