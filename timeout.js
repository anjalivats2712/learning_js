//there are basically two ways to write a function

function summ(a,b){
    return a+b;
}
//OR

summ2 = (a,b)=>{
    return a+b;
}//these are used for when we have to insert function in middle of code

login = ()=>{
    console.log("the window is logged in!");
}

setTimeout(login,2000);
//first we write the function to be executed 
//then time in ms after which it will be executed

anjali =()=>{
    console.log('anjali is the besttttttt!');
}

// setInterval(() => {
    
// }, interval);
//basic syntax for intervals and timeout

clr=setInterval(anjali,5000);
//we have named the interval so that we can clear it later if we want to

// clearInterval(clr);

//clearTimeout(name of timeout)