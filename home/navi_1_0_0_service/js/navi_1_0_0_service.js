var navi_1_0_0_service = new Swiper(".navi_1_0_0_service__mySwiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      }
    }
  });