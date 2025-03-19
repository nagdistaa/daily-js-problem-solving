function invert(array) {
    return array.map((num)=>-num) ;
 }

 console.log(invert([1, 2, 3, 4, 5]));

//  ! Another Solution

function invert(array) {
    var newArr = [];
    for(var i = 0; i < array.length; i++){
      newArr.push(-array[i]);
    }
     return newArr;
  }