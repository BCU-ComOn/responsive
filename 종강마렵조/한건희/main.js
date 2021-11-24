'use strict';

//넷바 색상 변경
/*
let // 변하는 상수
const // 변하지 않는 상수
*/

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark'); 
    }
});

//넷바 메뉴 선택시 해당 부분으로 이동하기

const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event)=> {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    navbarMenu.classList.remove("open");
    scrollIntoView(link);

});

//contact me 버튼 이동하기
const contactMeBtn = document.querySelector(".home__contact");
contactMeBtn.addEventListener("click", () => {
    
    scrollIntoView("#contact");
});

// home 투명도 조절
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", ()=> {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

//햄버거 바 메뉴 

const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", ()=> {
    navbarMenu.classList.toggle("open");
});

// arrow up 버튼 이동하기
const arrowup = document.querySelector(".arrow-up");
arrowup.addEventListener("click", ()=> {
    scrollIntoView("#home");
});

// arrow up 투명도 조절

//화살표
const scrollBtn = document.querySelector('.arrow-up') ;


window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollBtn.style.display = 'block' ;
    }
    else {
        scrollBtn.style.display = 'none' ;
    }
})
scrollBtn.addEventListener('click' , () => {
    window.scroll({
        top: 0 ,
        behavior: "smooth"
    })
})



function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior : 'smooth'});
}

