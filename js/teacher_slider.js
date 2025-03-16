var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, // Default for mobile
    spaceBetween: 10, // Space between slides
    loop: true, // Infinite loop
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // When window width is >= 576px (small devices)
        576: {
            slidesPerView: 2, // Show 2 slides
            spaceBetween: 20,
        },
        // When window width is >= 768px (tablets)
        768: {
            slidesPerView: 3, // Show 3 slides
            spaceBetween: 30,
        },
        // When window width is >= 992px (laptops)
        992: {
            slidesPerView: 4, // Show 4 slides
            spaceBetween: 40,
        },
    },
});
