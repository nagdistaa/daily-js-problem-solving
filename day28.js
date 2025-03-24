function bonusTime(salary, bonus) {
    

   return `£${bonus ? salary *10 : salary}`
    
    }

console.log(bonusTime(10,1));
