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

// DRAGGABLE
const cardslider = document.querySelector('.card-slider');
const firstImg = cardslider.querySelectorAll('.card')[0];
const arrowicons = document.querySelectorAll('.card-wrapper i');

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
let slide = document.querySelector('.card-slider').getAttribute('slide-progress');
let slideIndex = setInterval(() => {
    if (slide == 1) {
        slide = 2;
        cardslider.scrollLeft = -firstImg.clientWidth;
        arrowicons[0].style.display = "none";
        arrowicons[1].style.display = "block";
    } else if (slide == 2) {
        slide = 1;
        cardslider.scrollLeft = firstImg.clientWidth;
        arrowicons[0].style.display = "block";
        arrowicons[1].style.display = "none";
    }
}, 5000);

const showhideicons = () => {
    const scrollWidth = cardslider.scrollWidth - cardslider.clientWidth;
};

arrowicons[0].style.display = "none";

arrowicons.forEach(icon => {
    icon.addEventListener('click', () => {
        const firstImgWidth = firstImg.clientWidth; // Adjust for margin/padding if needed
        cardslider.scrollLeft += icon.id === "left" ? -firstImgWidth : firstImgWidth;
        slide = icon.id === "left" ? 1 : 2;
        arrowicons[0].style.display = slide === 1 ? "none" : "block";
        arrowicons[1].style.display = slide === 2 ? "none" : "block";
        setTimeout(showhideicons, 60);
    });
});

const autoSlide = () => {
    const firstImgWidth = firstImg.clientWidth; // Adjust for margin/padding if needed
    positionDiff = Math.abs(positionDiff);
    const valDifference = firstImgWidth - positionDiff;

    if (cardslider.scrollLeft > prevScrollLeft) {
        cardslider.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    } else {
        cardslider.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
};

// const dragStart = (e) => {
//     isDragStart = true;
//     prevPageX = e.pageX || e.touches[0].pageX;
//     prevScrollLeft = cardslider.scrollLeft;
// };

// const dragging = (e) => {
//     if (!isDragStart) return;
//     e.preventDefault();
//     isDragging = true;
//     positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
//     cardslider.scrollLeft = prevScrollLeft - positionDiff;
//     showhideicons();
// };

// const dragStop = () => {
//     if (!isDragStart) return;
//     isDragStart = false;
//     cardslider.classList.remove('dragging');
//     if (isDragging) {
//         isDragging = false;
//         autoSlide();
//     }
// };

// cardslider.addEventListener('mousedown', dragStart);
// cardslider.addEventListener('touchstart', dragStart);
// cardslider.addEventListener('mousemove', dragging);
// cardslider.addEventListener('touchmove', dragging);
// cardslider.addEventListener('mouseup', dragStop);
// cardslider.addEventListener('mouseleave', dragStop);
// cardslider.addEventListener('touchend', dragStop)