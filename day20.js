// ! My Solve
function litres(time) {
    return (Math.floor(time*.5))/1;
  }
  
  // .5 liter -> 1 hour
  //  ? liter -> 3 hour

  console.log(litres(11.8));


//! Other Solves

function litres(time) {
    return parseInt(time/2);
  }
  
//! Other Solves  >> bitwist operator

function litres(time) {
    return time>>1
  }