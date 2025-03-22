/*function findAverage(array) {
    
   if(![]){
    return 0 
   }else{
    return .5* array.reduce((curr,acc)=> (curr+acc),0 )
   }
  }

  console.log(findAverage([1,1,1]));*/
  
//  ! try another solve

/*function findAverage(array) {
    let average = array.reduce((acc,curr )=> acc+curr,0)
    
    return  Math.floor(average/2);
   }
 
   console.log(findAverage([1,1,1]));*/

//    ! Another Solve


function findAverage(array) {
    
    if(array==null){
     return 0 
    }else{
     
     let sum = 0 ; 
    for(i=0 ;i<array.length; i++){
     sum +=array[i]
    }
 
    return sum / array.length ; 
   }
 
    }
    
console.log(findAverage([1,2,3,4,5]));
