$(document).ready(function(){
    $('.first-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 6500,
        autoplaySpeed: 1000,
        loop: true,
        rewind: true,
        autoWidth: false,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            1100:{
                items:2
            }
        }
    });

    $('.second-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 6500,
        autoplaySpeed: 1000,
        loop: true,
        autoWidth: false,
        responsive: {
            0: {
                items: 1
            },
            1100: {
                items: 4
            }
        }
    });
});

