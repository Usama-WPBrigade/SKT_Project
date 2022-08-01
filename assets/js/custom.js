$(document).ready(function () {
  $(".btn-search-icon").on('click', function () {
    $(".form-wrapper").slideToggle();
    // $("body").toggleClass("overflow")
    // $(".menu_icon").toggleClass("openmenu")
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



