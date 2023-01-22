let navbar = document.querySelector('.navbar');
let burger = document.querySelector('.burger');
let navList= document.querySelector('.nav-list');
let navRight = document.querySelector('.nav-right');

burger.addEventListener('click',()=>{

         navList.classList.toggle('visibility')
        navRight.classList.toggle('visibility')
        navbar.classList.toggle('res-navheight')
});