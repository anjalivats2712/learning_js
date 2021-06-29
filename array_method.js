arr=[3,4,2,5,23];

console.log(arr.length);

arr.pop();
console.log(arr);

arr.push("anjali");
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift("vase");
console.log(arr);

//now if we give unshift a name of variable and then print it then length will get printed

console.log(arr.unshift('flower'));
           //OR
var a= arr.unshift('irroque');
console.log(a);