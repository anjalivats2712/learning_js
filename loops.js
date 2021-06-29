var arr=[1,2,3,4,5,6,7];

console.log(arr);
for (var i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//or we can print it like this

arr.forEach(function(element){
console.log(element)
})

let j=0;//can be used outside the function also
const a=0;
// a++; -will through an error
while(j<arr.length) {
    console.log(arr[j]);
    j++;
}
let k=0;
do{
    console.log(arr[k]);
    k++;
}while(k<arr.length);


