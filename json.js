obj = {
    fruit:'grapes',
    color:'peach',
    movie:'animated',
};
jso=JSON.stringify(obj);
console.log(jso);

console.log(typeof jso);
console.log(typeof obj);

obj2 = {
    season:'win"ter',
}
jso2=JSON.stringify(obj2);
console.log(jso2);
//it will give {"season":"win\"ter"}
//as javascript doesnt allow single quotes ,single quotes will be shown as double quotes there 
//therefore to distinguish btw them backslash is printed there 


//parsing
parsed=JSON.parse(jso2);
console.log(parsed);
console.log(typeof parsed);

//or we can do parsing as follows
parsed2=JSON.parse(`{"fruit":"grapes","color":"peach","movie":"animated"}`);
console.log(typeof parsed2);