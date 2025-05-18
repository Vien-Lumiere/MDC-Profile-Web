const togglebtn = document.querySelector('.toggle_btn');
const togglebtnicon = document.querySelector('.toggle_btn i');
const dropdownmenu = document.querySelector('.dropdownmenu');

togglebtn.onclick = function () {
    togglebtn.classList.toggle('active');
    dropdownmenu.classList.toggle('open');
};

document.addEventListener('mousedown', function(event) {
    if (
        dropdownmenu.classList.contains('open') &&
        !dropdownmenu.contains(event.target) &&
        !togglebtn.contains(event.target)
    ) {
        dropdownmenu.classList.remove('open');
        togglebtn.classList.remove('active'); // Make toggle button not active
    }
});

// main
let pcontentleft = document.querySelector('.pcontentleft');

const slide1 = document.querySelector('[data-slide="1"]');
const slide2 = document.querySelector('[data-slide="2"]');
const timer1 = document.querySelector('li[data-slide="1"] hr.timer');
const timer2 = document.querySelector('li[data-slide="2"] hr.timer');
let imagemain = document.querySelector('.imagemain')

slide1.addEventListener('click', slide1c);
slide2.addEventListener('click', slide2c);

function slide1c() {
    slide1.classList.add('active');
    slide2.classList.remove('active');
    pcontentleft.innerHTML = "This is the main content area.";
    timer1.style.width = "0%";
    timer2.style.width = "0%";
    imagemain.src = "../assets/mdc_logo_big.svg";
    animateMainContentLeft();
    animateMainContentRight();
}
function slide2c() {
    slide1.classList.remove('active');
    slide2.classList.add('active');
    pcontentleft.innerHTML = "I am a web developer with experience in HTML, CSS, and JavaScript. I have worked on various projects and have a strong understanding of web development principles. I am always eager to learn new technologies and improve my skills.";
    timer1.style.width = "100%";
    timer2.style.width = "0%";
    imagemain.src = "../assets/mozi_logo.svg";
    animateMainContentLeft();
    animateMainContentRight();
}

function animateMainContentLeft() {
    const mainContentLeft = document.querySelector('.main-content.left');
    if (!mainContentLeft) return;
    mainContentLeft.classList.remove('animate-fadeIn');
    // Trigger reflow to restart animation
    void mainContentLeft.offsetWidth;
    mainContentLeft.classList.add('animate-fadeIn');
}
function animateMainContentRight() {
    const mainContentRight = document.querySelector('.main-content.right');
    if (!mainContentRight) return;
    mainContentRight.classList.remove('animate-fadeIn');
    // Trigger reflow to restart animation
    void mainContentRight.offsetWidth;
    mainContentRight.classList.add('animate-fadeIn');
}

let time = 0;
let interval = setInterval(() => {
    time++;
    if (time > 200) {
        function changeslide() {
            if (slide1.classList.contains('active') == true) {
                slide2c();
            } else if (slide2.classList.contains('active') == true) {
                slide1c();
            }
            time = 0;
        }
        changeslide();
    }
}, 150);

function repeater() {
    document.querySelector("li.active hr").style.width = time/2 + "%"
    setTimeout(repeater, 0.1);
}
repeater();

document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.swiper', {
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    });
});