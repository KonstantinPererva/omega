function initCarousel() {
    var carouselPhoto = new Swiper('.style-icons-slider', {
        loop: true,
        speed: 800,
        spaceBetween: 10,
        slidesPerView: '1',
        centeredSlides: false,
        navigation: {
            nextEl: '.style-icons-slider-navigation .button-navigation-next',
            prevEl: '.style-icons-slider-navigation .button-navigation-prev',
        },
        breakpoints: {
            768: {
                spaceBetween: 0,
                slidesPerView: 'auto',
                centeredSlides: true,
            }
        }
    });

    var carouselMore = new Swiper('.slider-more-content', {
        loop: true,
        speed: 800,
        spaceBetween: 10,
        slidesPerView: '1',
        navigation: {
            nextEl: '.slider-more-content-navigation .button-navigation-next',
            prevEl: '.slider-more-content-navigation .button-navigation-prev',
        },
        breakpoints: {
            1152: {
                slidesPerView: 2,
                spaceBetween: 15
            }
        }
    });
}

initCarousel();

function changeImage() {

    var btnList = [].slice.call(document.querySelectorAll('.photo-years-slider-button__item'));
    var slideList = [].slice.call(document.querySelectorAll('.photo-years-slider__item'));
    var tooltipList = [].slice.call(document.querySelectorAll('.tooltip'));

    var change = function () {
        btnList.forEach(function (btn, ind) {
            btn.slide = slideList[ind];

            if (window.innerWidth < 768) {
                appendTooltip(btn.slide, tooltipList[ind]);
            } else {
                appendTooltip(btn, tooltipList[ind]);
            }

            btn.addEventListener('click', function () {
                hideSlide();
                btn.classList.add('active');
                showSlide(btn.slide);
            });
        })
    };

    var showSlide = function (slide) {
        var currentSlide = slide;
        function show() {
            currentSlide.classList.add('active');
        }

        setTimeout(show,400);
    };

    var hideSlide = function () {
        btnList.forEach(function (btn) {
            btn.classList.remove('active');
        });

        slideList.forEach(function (slide) {
            slide.classList.remove('active');
        });
    };

    var appendTooltip = function (node, tooltip) {
        node.appendChild(tooltip);
    };

    var init = function () {
        change();
    };

    return {
        init: init
    }
}

changeImage().init();

window.addEventListener('resize', function () {
    if (window.innerWidth < 768) {
        changeImage().init();
    } else {
        changeImage().init();
    }
});