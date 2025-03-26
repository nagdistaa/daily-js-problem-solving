function removeEveryOther(arr){
    let firstEl = arr[0]; 
   let newArr = [] ;

    for(i=0 ; i<arr.length ; i=i+2){
       newArr.push(arr[i])
    }

   return newArr; 
  }

  console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));
  

//   !Another Solution 

const removeEveryOther = arr => arr.filter((item, i) =>  i % 2 == 0);
