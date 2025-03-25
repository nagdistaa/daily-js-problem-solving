function remove (string) {
    let newString = []

    if(string[string.length-1] == "!"){
        for(let i=0 ; i<string.length-1;  i++){
            newString.push(string[i])
        }

        return newString.join("") ;
    }else{
        return string ; 
    }
    

  }

console.log(remove("Hi!"));


// ! Another Solution 

const remove = s => s.replace(/!$/, '');

// ! Another Solution 

function remove(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
  }