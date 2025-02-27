document.addEventListener("DOMContentLoaded", function () {
    const swiperElement = document.querySelector('.swiper');

    if (swiperElement) {
        const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
});
