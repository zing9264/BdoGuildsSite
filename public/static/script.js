
var homepage_btn=document.querySelector("#homepage-btn");
var questpage_btn=document.querySelector("#questpage-btn");
var monsterpage_btn=document.querySelector("#monsterpage-btn");
var salarypage_btn=document.querySelector("#salarypage-btn");


var homepage=document.querySelector("#homepage");
var questpage=document.querySelector("#questpage");
var monsterpage=document.querySelector("#monsterpage");
var salarypage=document.querySelector("#salarypage");



function homepageClick(){
    console.log("homepageClick");
    homepage.classList.remove('hide');
    questpage.classList.add('hide');
    monsterpage.classList.add('hide');
    salarypage.classList.add('hide');

}
homepage_btn.addEventListener("click",homepageClick)

function questpageClick(){
    console.log("questpageClick");
    questpage.classList.remove('hide');
    homepage.classList.add('hide');
    monsterpage.classList.add('hide');
    salarypage.classList.add('hide');

}
questpage_btn.addEventListener("click",questpageClick)

function monsterpageClick(){
    console.log("monsterpageClick");
    monsterpage.classList.remove('hide');
    questpage.classList.add('hide');
    homepage.classList.add('hide');
    salarypage.classList.add('hide');

}
monsterpage_btn.addEventListener("click",monsterpageClick)

function salarypageClick(){
    console.log("salarypageClick");
    salarypage.classList.remove('hide');
    questpage.classList.add('hide');
    monsterpage.classList.add('hide');
    homepage.classList.add('hide');

}
salarypage_btn.addEventListener("click",salarypageClick)
