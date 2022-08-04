$(document).ready(function () {


  /** Open contact form code block start*/
  $(".menu-btn").on('click', function (e) {
    e.preventDefault();
    $("body").toggleClass("overflow")
    $(".headerFormPopup").toggleClass("headerFormPopup-open")
    $(".form-main-wrapper").toggleClass("form-main-wrapper-open")
    
  });

  $(".form-close-btn").on('click', function (e) {
    e.preventDefault();
    $("body").removeClass()
    $(".headerFormPopup").removeClass("headerFormPopup-open")
    $(".form-main-wrapper").removeClass("form-main-wrapper-open")

  });
 

  $(".headerFormPopup").on("click", function (e) {
    if (e.target.className !== ".form-main-wrapper"  &&
  !$(e.target).parents(".headerFormPopup").length
) {
      $(".headerFormPopup").removeClass("headerFormPopup-open");
      $("body").removeClass();
    $(".form-main-wrapper").removeClass("form-main-wrapper-open")

      
    }
  });
  /** Open contact form code block end*/
 
/* On mobile menu slide down code block start*/
$(".burger_icon").on('click', function (e) {
  e.preventDefault();
  $("body").toggleClass("overflowformenu")
  $("nav").slideToggle();
  $(".burger_icon").toggleClass("openmenu")
 
});

/* Dropdown menu open/ close*/
$(".mobile-memu-down").on('click', function (e) {
  e.preventDefault();
  // $("body").toggleClass("overflow")
  $(".dropdown-content").slideToggle();
  $(".mobile-memu-down").toggleClass("rotatemobile-menu")
 
});

/* On mobile menu slide down code block End*/





  $(".btn-search-icon").on('click', function () {
    $(".form-wrapper").slideToggle();
   
  });


  

  /*On Mobile Search form open close code block*/
  $(".mobile-search-btn").on('click', function (event) {
    $(".mobile-search-field").slideToggle();
    $(".desktop-menu").hide();
   
  });
  
  // $(".close-mobile-search").on('click', function (event) {
  //   $(".mobile-search-field").hide();
  //   $(".desktop-menu").show();
   
  // });


  $(".mobile-search-field").on("click", function (e) {
    if (e.target.className !== ".mobile-search-form"  &&
  !$(e.target).parents(".mobile-search-field").length
      ) {
      $(".mobile-search-field").slideToggle();
      $(".desktop-menu").show();
    }
  // alert("hello")
  });

  /*On Mobile Search form open close code block*/
  
  $(".mobilesearch-input").on("input", function () {
    var res = $(this).val();
    if (res != 0) {
      $("#closemobile-search").addClass("hide");
    } else if (res == 0) {
      $("#closemobile-search").removeClass("hide");
    }
  });

  /* accordine code block start */
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
    
  /* accordine code block end */
      
  
  /*Bottom slider*/
      var swiper = new Swiper(".bottomSwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
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
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          820: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1124: {
            slidesPerView: 4,
            spaceBetween: 15,
          }
        }
    });


      /**Tab Slider */
      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 2,
        freeMode: true,
        watchSlidesProgress: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          640: {
            slidesPerView:3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          }
        }
        
      });

      var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 0,
        slidesPerView: 1,
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
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          
        }

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





// document.addEventListener('mouseup', function(e) {
//   var container = document.getElementsByClassName('headerFormPopup');
//   if (!container.contains(e.target)) {
//       // container.style.display = 'none';
//       alert("Hello wordl")
//   }
// });