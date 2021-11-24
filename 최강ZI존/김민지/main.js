'use strict';

// 넷바 색상 변경
const navbar = document.querySelector ('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }

});

// 넷바메뉴 선택시 해당 부분으로 이동하기
const navbarMenu = document.querySelector (".navbar__menu");
navbarMenu.addEventListener ("click", (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if  (link == null){
        return;
    }
    navbarMenu.classList.remove("open");
    scrollIntoView(link);
});

//contact me 버튼 이동하기
const contactMe = document.querySelector(".home__contact");
contactMe.addEventListener ("click", () => {
    scrollIntoView('#contact');
});


//home 투명도 조절
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    home.style.opacity = 1 - window.scrollY/homeHeight;
});

//햄버거 메뉴 클릭할 때
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("open");
});


// arrow-up 버튼 이동하기
const arrowupBtn = document.querySelector(".arrow-up"); //arrow up 셀렉트
arrowupBtn.addEventListener("click", ()=> {
    scrollIntoView("#home");
});


document.addEventListener("scroll",()=>{ // 이벤트 발생시
    if(window.scrollY < 1){
        arrowupBtn.style.opacity = 0;
    }
    if(window.scrollY > homeHeight/2){ // 홈 높이에서 절반 사라질시
        arrowupBtn.style.opacity = 1;
    }
});

// 프로젝트 js 부분
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click", (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
    return;
    }
    projects.forEach((project) => {
    if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
    } else {
        project.classList.add("invisible");
    }
    });
    const active = document.querySelector(".category__btn.selected");
    if (active != null) {
    active.classList.remove("selected");
    }
    e.target.classList.add("selected");
    projectContainer.classList.add("anim-out");
    setTimeout(() => {
    projects.forEach((project) => {
        console.log(project.dataset.type);
        if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
        } else {
        project.classList.add("invisible");
    }
    });
    projectContainer.classList.remove("anim-out");
    }, 300);
});


function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior : 'smooth'});
}