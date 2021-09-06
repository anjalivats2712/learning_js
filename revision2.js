//here we will do dom
document.getElementById('click').style.border="solid 2px green";
let elemclass=document.getElementsByClassName('god');
elemclass[0].classList.add('btn-primary');
let elemclass2=document.getElementsByClassName('damn');
elemclass2[0].classList.add('colorr');
createdElement=document.createElement('p');
createdElement.innerText='i really want to go to nith :( \n plezzzz let me go....';
tn=document.getElementsByTagName('div');
tn[1].appendChild(createdElement);
//and we can remove or replace also childelement

//event listener
function clicked(){
    console.log('the button was clicked!');
}
window.onload=function(){
    console.log("window was loaded")
}
godd.addEventListener('click',function(){
    console.log("click click!")
})
godd.addEventListener('click',function(){
    document.querySelector('.god')[0].innerText="we have clicked"
})
