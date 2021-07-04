let age = 50;

let welcome =(age < 18) ?() => console.log('Baby') :() => console.log('Adult');
welcome();
// Baby

let number =46;
let dividerr =((number%2)==0) ?() =>console.log("number is divisible by 2") :() =>console.log("number is not divisible by 2");
dividerr();