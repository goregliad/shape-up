function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function() {
        callback(webP.height == 2);
    };
    webP.src = "data:img/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function(support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});



$('.about-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.about-slider-nav',
});
$('.about-slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.about-slider-for',
    focusOnSelect: true
});


$('.wr-cliets-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    responsive: [{
        breakpoint: 1025,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
});

$('.wr-photo-slider').slick({
    centerMode: true,
    centerPadding: '30px',
    arrows: false,
    slidesToShow: 3,
    responsive: [{
            breakpoint: 1024,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '35px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
    ]
});

let openBurger = document.querySelector('.header-burger');
let menuBurger = document.querySelector('.header-menu');
let bodyOverflow = document.querySelector('body');

openBurger.addEventListener('click', function() {
    openBurger.classList.toggle('active-burger');
    menuBurger.classList.toggle('active-burger');
    bodyOverflow.classList.toggle('lock');
});


// let closeMenu = document.querySelectorAll('.header-list-item');
// closeMenu.addEventListener('click', function() {
//     openBurger.classList.remove('.active-burger');
//     menuBurger.classList.remove('.active-burger');
// });