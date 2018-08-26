

function showDropdown(e){
    e.children[0].classList.toggle('fa-angle-up');
    var opened=document.getElementById('kvrd');
    if (opened.style.display === "none") {
        opened.style.display = "block";
    } else {
        opened.style.display = "none";
    }
}

function projectsOpen(e) {
    e.children[0].classList.toggle('fa-angle-up');
    var opened=document.getElementById('project');
    if (opened.style.display === "none") {
        opened.style.display = "block";
    } else {
        opened.style.display = "none";
    }

}
/*NAVBAR*/
function myFunction(e) {
    e.children[0].classList.toggle('fa-times');
    var x = document.getElementById('s-open');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function playhomeVid() {
    var specificVideo=document.getElementById("myVideo");
    var specificBtn=document.getElementById("pauseBtn");
    if (!specificVideo.paused) {
        specificBtn.classList.add('fa-play');
        specificBtn.classList.remove('fa-pause');
        specificVideo.pause();
    }
    else {
        specificBtn.classList.remove('fa-play');
        specificBtn.classList.add('fa-pause');
        specificVideo.play();
    }

}


//change button on ending the video
function endVideo() {
    var activeElement = document.getElementsByClassName('swiper-slide-active')[0];
    var changeBtn = activeElement.getElementsByTagName('button')[0];
    changeBtn.children[0].classList.add('fa-play');
}


//play and pause video with toggling between the buttons
function applyVideo(e) {
    var activeElement = document.getElementsByClassName('swiper-slide-active')[0];
    var activeVideo = activeElement.getElementsByTagName('video');
    if (!activeVideo[0].paused) {
        e.children[0].classList.add('fa-play');
        e.children[0].classList.remove('fa-pause');
        activeVideo[0].pause();
    }
    else {
        e.children[0].classList.remove('fa-play');
        e.children[0].classList.add('fa-pause');
        activeVideo[0].play();
    }
}

<!--Initialize Swiper -->

var swiper = new Swiper('.slider1', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiper2 = new Swiper('.slider2', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {

        // when window width is <= 640px
        640: {
            slidesPerView: 1.4,
            spaceBetween: 20,
            centeredSlides: false,

        }
    }
});




/*Photo Gallery*/
function choose() {
    var design = document.getElementById("project-design");
    var con = document.getElementById("con-design");
    var ds = document.getElementById("s1");
    var cd = document.getElementById("s2");
    var triangle1 = document.getElementById("first-triangle");
    var triangle2 = document.getElementById("second-triangle");
    design.style.color = "#173B47";
    con.style.color = "#99999A";
    triangle1.style.visibility = "visible";
    triangle2.style.visibility = "hidden";
    ds.style.visibility = "visible";
    cd.style.visibility = "hidden";
}

function choose2() {
    var con = document.getElementById("con-design");
    var design = document.getElementById("project-design");
    var ds = document.getElementById("s1");
    var cd = document.getElementById("s2");
    var triangle1 = document.getElementById("first-triangle");
    var triangle2 = document.getElementById("second-triangle");
    con.style.color = "#173B47";
    design.style.color = "#99999A";
    triangle2.style.visibility = "visible";
    triangle1.style.visibility = "hidden";
    ds.style.visibility = "hidden";
    cd.style.visibility = "visible";
}

var swipervideo= new Swiper('.press-slider', {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {

        // when window width is <= 640px
        640: {
            slidesPerView: 1.19,
            spaceBetween: 20,
            centeredSlides: false,

        }
    }
});