$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


$(function () {
    $(".datepicker-input").datepicker({dateFormat: 'dd.mm.yy'});
});
$(function () {
    $(".timepicker-input").timepicker({
        interval: 5,
    });
});

$(document).ready(function () {
    $('.card-deck').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        navText: ['<span aria-label="Previous"><i class="fas fa-chevron-left"></i></span>', '<span aria-label="Next"><i class="fas fa-chevron-right"></i></span>'],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
           768: {
                items: 2,
                nav: false,
                dots: true
            },
            1200: {
                items: 3,
                nav: true,
                loop: true,
                dots: false
            }
        }
    });
    $('.vehicles-carousel').owlCarousel({
        loop: true,
        navText: ['<span aria-label="Previous"><i class="fas fa-chevron-left"></i></span>', '<span aria-label="Next"><i class="fas fa-chevron-right"></i></span>'],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            768: {
                items: 1,
                stagePadding: 100,
                nav: false,
                dots: true
            },
            990: {
                items: 1,
                stagePadding: 250,
                nav: true,
                dots: false
            },
            1200: {
                items: 1,
                nav: true,
                dots: false,
                stagePadding: 330
            },
            1440: {
                items: 1,
                nav: true,
                dots: false,
                stagePadding: 350
            }
        }
    })
    $('.top-destinations-carousel').owlCarousel({
        items: 1,
        nav: false,
        dots: true
    });
});



let burger = document.getElementById('burger'),
    nav    = document.getElementById('main-nav'),
    slowmo = document.getElementById('slowmo');

burger.addEventListener('click', function(e){
    this.classList.toggle('is-open');
    nav.classList.toggle('is-open');
});

slowmo.addEventListener('click', function(e){
    this.classList.toggle('is-slowmo');
});

/* Onload demo - dirty timeout */
let clickEvent = new Event('click');

window.addEventListener('load', function(e) {
    slowmo.dispatchEvent(clickEvent);
    burger.dispatchEvent(clickEvent);

    setTimeout(function(){
        burger.dispatchEvent(clickEvent);

        setTimeout(function(){
            slowmo.dispatchEvent(clickEvent);
        }, 3500);
    }, 10000);
});






