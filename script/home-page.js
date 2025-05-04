const togglebtn = document.querySelector('.toggle_btn');
const togglebtnicon = document.querySelector('.toggle_btn i');
const dropdownmenu = document.querySelector('.dropdownmenu');

togglebtn.onclick = function () {
    dropdownmenu.classList.toggle('open');
    const isOpen = dropdownmenu.classList.contains('open');
    togglebtnicon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}

// main
h1contentleft = document.querySelector('.h1contentleft');
h2contentleft = document.querySelector('.h2contentleft');
pcontentleft = document.querySelector('.pcontentleft');

let Timer = document.querySelector('.Timer');
let time = 0;
let interval = setInterval(startTimer, 1000);

function startTimer() {
    time++;
    Timer.innerHTML = time + "s";
    if (time > 300) {
        time = 0;
        clearInterval(interval);
    }
    if (time <= 1, time >= 0) {
        h1contentleft.innerHTML = "Welcome to MDC";
        h2contentleft.innerHTML = "Mantsani Digital Creative";
        pcontentleft.innerHTML = "This is the main content area.";
    }
    if (time <= 3, time >= 2) {
        h1contentleft.innerHTML = "Welcome kon my website!";
        h2contentleft.innerHTML = "I am a web developer.";
        pcontentleft.innerHTML = "I am a web developer with experience in HTML, CSS, and JavaScript. I have worked on various projects and have a strong understanding of web development principles. I am always eager to learn new technologies and improve my skills.";
    }
    if (time <= 5, time >= 4) {
        h1contentleft.innerHTML = "Welcome ass my website!";
        h2contentleft.innerHTML = "I am a web developer.";
        pcontentleft.innerHTML = "I am a web developer with experience in HTML, CSS, and JavaScript. I have worked on various projects and have a strong understanding of web development principles. I am always eager to learn new technologies and improve my skills.";
    }
}
