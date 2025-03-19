// ! MY Solve
/*function noSpace(x){
    return x.split(" ").join("") ;
    }
console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

*/
// ! Another Solve
/*
function noSpace(x) {
    return x.replaceAll(' ', '');
  }
*/

// ! Another Solve -> Wrong Solve

function noSpace(x) {
  return x.trim(" ");
}
console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));
