document.getElementById('click').click();

document.getElementById('click').style.border='solid 2px blue';

// similiarily we can access the element by className and tagname remember element for id and elements for others

let elem =document.getElementsByClassName('school');
console.log(elem);

elem[0].classList.add('btn-primary');
//remove too by .remove in place of .add

tn=document.getElementsByTagName('b');
console.log(tn);

createdElement=document.createElement('p');
createdElement.innerText='this is perfect place for hiking';
tn[0].appendChild(createdElement);

createdElement2=document.createElement('p');
createdElement2.innerText='this is perfect place for hiking and camping';
tn[0].replaceChild(createdElement2,createdElement);
//similarly we can a element also 

//selection using a query

sel=document.querySelector('.container');
sel.classList.add('colorr');