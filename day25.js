// Thinking 

// let db = [ 
//     ["english", "Welcome"],
//     ["czech", "Vitejte"],
//     ["danish", "Velkomst"],
//     ["dutch", "Welkom"],
//     ["estonian", "Tere tulemast"],
//     ["finnish", "Tervetuloa"],
//     ["flemish", "Welgekomen"],
//     ["french", "Bienvenue"],
//     ["german", "Willkommen"],
//     ["irish", "Failte"],
//     ["italian", "Benvenuto"],
//     ["latvian", "Gaidits"],
//     ["lithuanian", "Laukiamas"],
//     ["polish", "Witamy"],
//     ["spanish", "Bienvenido"],
//     ["swedish", "Valkommen"],
//     ["welsh", "Croeso"]
// ];

// let lang = "swedish";


// let valid = db[0][1] ; 
// for(i=0 ; i<db.length; i++){
//  if(db[i][0]==lang){
//     valid = db[i][1]
//  }
// }

// console.log(valid);

// Thinking 

let db = [ 
    ["english", "Welcome"],
    ["czech", "Vitejte"],
    ["danish", "Velkomst"],
    ["dutch", "Welkom"],
    ["estonian", "Tere tulemast"],
    ["finnish", "Tervetuloa"],
    ["flemish", "Welgekomen"],
    ["french", "Bienvenue"],
    ["german", "Willkommen"],
    ["irish", "Failte"],
    ["italian", "Benvenuto"],
    ["latvian", "Gaidits"],
    ["lithuanian", "Laukiamas"],
    ["polish", "Witamy"],
    ["spanish", "Bienvenido"],
    ["swedish", "Valkommen"],
    ["welsh", "Croeso"]
];

function greet(language) {
    let valid = db[0][1]; 
     for(let i =0 ; i<db.length ; i++){
      if(db[i][0]===language){
        valid =db[i][1]
        break ;
      }
     }
     return valid ;
}

console.log(greet("dutch"));


// !Another solves 

function greet(lang) {
	return langs[lang]||langs['english'];
}

var langs = {
'english': 'Welcome',
'czech': 'Vitejte',
'danish': 'Velkomst',
'dutch': 'Welkom',
'estonian': 'Tere tulemast',
'finnish': 'Tervetuloa',
'flemish': 'Welgekomen',
'french': 'Bienvenue',
'german': 'Willkommen',
'irish': 'Failte',
'italian': 'Benvenuto',
'latvian': 'Gaidits',
'lithuanian': 'Laukiamas',
'polish': 'Witamy',
'spanish': 'Bienvenido',
'swedish': 'Valkommen',
'welsh': 'Croeso'
};
