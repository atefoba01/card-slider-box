

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    // centeredSlides: true,
    spaceBetween: 25,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      DynamicsBullets: true,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },

breakpoints:{
    0:{
        slidesPerView: 1,
    },
    520:{
        slidesPerView: 2,
    },
    950:{
        slidesPerView: 3, 
    },
},

  });



//   var swiper = new Swiper(".slide-content", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });