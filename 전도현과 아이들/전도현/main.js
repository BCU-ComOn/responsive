'use strict';

// 넷바 색상 변경
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

//넷바 메뉴 선택시 해당 부분으로 이동
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    navbarMenu.classList.remove("open");
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior : 'smooth'});
});

//Contact Me 버튼 클릭시 최하단으로 이동
const contactMe = document.querySelector(".home__contact");
contactMe.addEventListener("click", () => {
    document.querySelector("#contact").scrollIntoView({behavior : 'smooth'});
});

//arrow-up 버튼 클릭시 최상단으로 이동
const arrowUp = document.querySelector(".arrow-up");
arrowUp.addEventListener("click", () => {
    document.querySelector("#home").scrollIntoView({behavior : 'smooth'});
});

//화면을 어느 정도 내리면 home의 요소들의 투명도가 줄어듬
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    home.style.opacity = 1 - scrollY / homeHeight;

    //home의 1/2가 스크롤 되었을 때 arrow-up 버튼 생성
    if (window.scrollY > homeHeight / 2) {
        arrowUp.classList.add("visible");
    }
    //home이 모두 보일 경우 arrow-up 버튼 소멸
    if (window.scrollY < 1) {
        arrowUp.classList.remove("visible");
    }
});

//화면이 작아졌을 때 navbar의 햄버거 아이콘을 클릭하면 메뉴가 나타남
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("open");
});

//work부분 코드
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click", (e)=>{
    //클릭한 버튼의 data-filter값을 filter변수에 저장
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter; //span태그 클릭 시 filter값을 가져올 수 없어 부모 노드에서 가져오도록 함
    if (filter == null) {
        return;
    }
    
    //category를 클릭했을 때 분홍색 배경이 씌워지도록(선택되었다는 표현) 함
    const active = document.querySelector(".category__btn.selected");
    //이전에 선택된 category의 분홍색 배경을 제거
    if (active != null) {
        active.classList.remove("selected");
    }

    //현재 선택된 category에 분홍색 배경 적용
    e.target.classList.add("selected");

    //모든 project들이 아래로 내려가면서 사라짐
    projectContainer.classList.add("anim-out");

    //지정한 시간이 지난 후에 실행
    setTimeout(() => {
        //projects의 객체들을 하나씩 넣으면서 반복문 실행
        projects.forEach((projects) => {
            //projects 객체의 data-type이 filter변수에 저장된 값과 같을 경우 투명화 해제
            if (filter === "*" || filter === projects.dataset.type) { //===은 데이터 타입과 값을 비교하기 위한 연산자
                projects.classList.remove("invisible");
            } else {
                projects.classList.add("invisible");
            }
        });

        //모든 project들이 위로 올라오면서 나타남
        projectContainer.classList.remove("anim-out");

    }, 300); //단위는 ms
});