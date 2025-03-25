function bonusTime(salary, bonus) {
    

   return `£${bonus ? salary *10 : salary}`
    
    }

console.log(bonusTime(10,1));


// ! Another Solution

function bonusTime(salary, bonus) {
  return '£' + salary * (bonus ? 10 : 1);
}