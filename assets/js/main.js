$('#toggle').click(function () {
    $('#menu').toggle('hide');
});

$(".nav_link").click(function () {
    $("#menu").hide();
});


$("#scroll_down").click(function () {
    $(".scroll_item").addClass("scroll");
});


let video = document.getElementById("videoID");
let timeToAnimate = 12;
let i = window.setInterval(() => {
    if (video.currentTime >= timeToAnimate) {
        document.getElementById("banner-split").classList.add('animationbanner');
    } else {
        document.getElementById("banner-split").classList.remove('animationbanner');
    }
}, 100);



const observer = new IntersectionObserver((enteries) => {
    enteries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

