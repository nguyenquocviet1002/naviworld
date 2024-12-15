var navi_1_2_0_testimonials = new Swiper(".navi_1_2_0_testimonials__mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        dynamicMainBullets: 2,
    },
    breakpoints: {
        // when window width is >= 320px
        767: {
          slidesPerView: 2,
          spaceBetween: 20
        },
      }
});