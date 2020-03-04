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

const nav = document.getElementById('main-nav'),
      burger = document.getElementById('burger');

burger.addEventListener('click', function(){
    nav.classList.toggle('is-open');
});






