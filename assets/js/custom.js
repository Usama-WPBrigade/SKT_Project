$(document).ready(function () {
    $(".pg-bar span").each(function () {
        // $(".pg-bar .pg-value").innerText = '$9,500'
        $(this).animate(
          {
            width: $(this).attr("data-progress") + "%",
            
        },
          1000
        );
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



