console.log("hello world!!")
console.warn("this is warning")
console.error("ERROR!")
console.clear()
var a=12
var b=12.8
var c="anjali"
var d=true
var e=false
var f=undefined
var g=null
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)
//object
var marks={
    anjali:23,
    kartik:45,
    urja:56
}
console.log(marks)
//array
var arr = [45,34,23,12]
var arr2=["anjali","vandana","harshita"]
console.log(arr[0])
console.log((arr[0])*5)
console.log(arr2[2])
//operators

var num1=5
var num2=5
console.log("the value of num1 + num2 is ",num1+num2)
console.log("the value of num1 - num2 is ",num1-num2)
console.log("the value of num1 * num2 is ",num1*num2)
console.log("the value of num1 / num2 is ",num1/num2)
// console.log("the value of num1 + num2 is ",num1+num2)

console.assert(4==5)
var num3=9
num3+=4
num3-=1
num3*=2
num3/=3
console.log(num3)

console.log(num1<num2)
console.log(num1>num2)
var bool1=true
var bool2=false
console.log(bool1&&bool2)
console.log(bool1||bool2)
console.log(!bool2)

//function 
function avg(num1,num2){
    return (num1+num2)/2
}

console.log(avg(4,9))

//////another example
function greatestt(a,b,c,d){
    if(a>b&&a>c&&a>d){
        console.log(a," is the greatest");
    }
    else if(b>c&&b>d){
        console.log(b," is the greatest");
    }
    else if(c>d){
        console.log(c," is the greatest");
    }
    else if (d>c){
        console.log(d," is the greatest");
    }
}
greatestt(3,4,5,6)
//loops
var arr3=[3,4,2,1,44]
for(var i=0;i<arr3.length;i++){
    console.log(arr3[i]);
}
var j=0
while(j<arr3.length){
    console.log(arr3[j]);
    j++;
}
do{
    console.log(arr3[j-1]);
}while(j<arr3.length);
//array methods
var arr4=[45,23,4.1,"anjali",true,null]
console.log(arr4.length)
arr4.pop()
console.log(arr4)
arr4.push("anjali is great")
console.log(arr4)
arr4.shift()
console.log(arr4)
arr4.unshift(17)
console.log(arr4)
//strings methods
var str="here we go again bhot bejti hone vali h *:_:*"
console.log(str.length)
console.log(str.indexOf("go"))
console.log(str.lastIndexOf("go"))
console.log(str.slice(5,15))
//dates in js
var newdate=new Date()
console.log(newdate)
console.log(newdate.getDate())
console.log(newdate.getDay())
console.log(newdate.getFullYear())
console.log(newdate.getMinutes())
