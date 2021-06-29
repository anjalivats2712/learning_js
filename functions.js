function avg(a,b){
    c=(a+b)/2;
    return c;
}

function greatest(a,b,c,d){
    if(a>b&&a>c&&a>d){
        return a;
    }
    else if(b>a&&b>c&&b>d){
        return b;
    }
    else if(c>b&&c>a&&c>d){
        return c;
    }
    else if(d>b&&d>c&&d>a){
        return d;
    }



}
d1 = greatest(3,45,5,60);
console.log(d1);

c1=avg(3,5);
c2=avg(4,10);
console.log(c1,c2);

//here u can take example of if else ladder
