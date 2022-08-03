$(document).ready(function () {

  $(".menu-btn").on('click', function (e) {
    e.preventDefault();
    $("body").toggleClass("overflow")
    $("body").toggleClass("body-overlay-class")
    $(".headerFormPopup").toggleClass("headerFormPopup-open")
  });

  $(".form-close-btn").on('click', function (e) {
    e.preventDefault();
    $("body").removeClass()
    $(".headerFormPopup").toggleClass("headerFormPopup-open")
  });
 


  $(".btn-search-icon").on('click', function () {
    $(".form-wrapper").slideToggle();
   
  });


  /* accordine */
    $(".pg-bar span").each(function () {
        // $(".pg-bar .pg-value").innerText = '$9,500'
        $(this).animate(
          {
            width: $(this).attr("data-progress") + "%",
        },
          1000
        );
    });

    (function($){
      $('.accordion-tab-title').on('click' ,function() {
      $(this).siblings(".accordion-body").slideToggle().closest('.accordion-item').toggleClass('is-active').siblings().removeClass("is-active").find(".accordion-body").slideUp()
      });
      $(".accordions-wrapper.first-open").find(".accordion-item").first().addClass("is-active").find(".accordion-body").slideDown();
      }(jQuery));
    

      /*Bottom slider*/
      var swiper = new Swiper(".bottomSwiper", {
        slidesPerView: 4,
        spaceBetween: 20,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        loop: true,
        autoplay: {
          delay: 5000,
        },
      });


      /**Tab Slider */
      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesProgress: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });

      var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        slidesPerView: 4,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        thumbs: {
          swiper: swiper
        }
      });

      /* Form Open*/

 
});



// const progressContainer = document.querySelector('.progress-container');

// // initial call
// setPercentage();
// function setPercentage() {
//   const percentage = progressContainer.getAttribute('data-percentage') + '%';
//   const progressEl = progressContainer.querySelector('.progress');
//   const percentageEl = progressContainer.querySelector('.percentage');
//   const percvalue = progressContainer.getAttribute('value'); 
//   progressEl.style.width = percentage;
//   percentageEl.innerText = percvalue;
//   percentageEl.style.left = percentage;
// }




