const togglebtn = document.querySelector('.toggle_btn');
const togglebtnicon = document.querySelector('.toggle_btn i');
const dropdownmenu = document.querySelector('.dropdownmenu');

togglebtn.onclick = function () {
    dropdownmenu.classList.toggle('open');
    const isOpen = dropdownmenu.classList.contains('open');
    togglebtnicon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}


// main
let h1contentleft = document.querySelector('.h1contentleft');
let h2contentleft = document.querySelector('.h2contentleft');
let pcontentleft = document.querySelector('.pcontentleft');

const slide1 = document.querySelector('[data-slide="1"]');
const slide2 = document.querySelector('[data-slide="2"]');
const slide3 = document.querySelector('[data-slide="3"]');
const slide4 = document.querySelector('[data-slide="4"]');
const timer1 = document.querySelector('li[data-slide="1"] hr.timer');
const timer2 = document.querySelector('li[data-slide="2"] hr.timer');
const timer3 = document.querySelector('li[data-slide="3"] hr.timer');

slide1.addEventListener('click', slide1c);
slide2.addEventListener('click', slide2c);
slide3.addEventListener('click', slide3c);

function slide1c() {
    slide1.classList.add('active');
    slide2.classList.remove('active');
    slide3.classList.remove('active');
    h1contentleft.innerHTML = "Welcome to MDC";
    h2contentleft.innerHTML = "Mantsani Digital Creative";
    pcontentleft.innerHTML = "This is the main content area.";
    timer1.style.width = "0%";
    timer2.style.width = "0%";
    timer3.style.width = "0%";
}
function slide2c() {
    slide1.classList.remove('active');
    slide2.classList.add('active');
    slide3.classList.remove('active');
    h1contentleft.innerHTML = "Welcome to my website!";
    h2contentleft.innerHTML = "I am a web developer.";
    pcontentleft.innerHTML = "I am a web developer with experience in HTML, CSS, and JavaScript. I have worked on various projects and have a strong understanding of web development principles. I am always eager to learn new technologies and improve my skills.";
    timer1.style.width = "100%";
    timer2.style.width = "0%";
    timer3.style.width = "0%";
}
function slide3c() {
    slide1.classList.remove('active');
    slide2.classList.remove('active');
    slide3.classList.add('active');
    h1contentleft.innerHTML = "Welcome back my website!";
    h2contentleft.innerHTML = "I am a web developer.";
    pcontentleft.innerHTML = "I am a web developer with experience in HTML, CSS, and JavaScript. I have worked on various projects and have a strong understanding of web development principles. I am always eager to learn new technologies and improve my skills.";
    timer1.style.width = "100%";
    timer2.style.width = "100%";
    timer3.style.width = "0%";
}

const leftArrow = document.querySelector('.fa-angle-left');
const rightArrow = document.querySelector('.fa-angle-right');

let time = 0;
let interval = setInterval(() => {
    time++;
    if (time > 200) {
        function changeslide() {
            if (slide1.classList.contains('active') == true) {
                slide2c();
            } else if (slide2.classList.contains('active') == true) {
                slide3c();
            } else if (slide3.classList.contains('active') == true) {
                slide1c();
            }
            time = 0;
        }
        changeslide();
    }
    document.querySelector("li.active hr").style.width = time/2 + "%"
}, 150);
