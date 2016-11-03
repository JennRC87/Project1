$(document).ready(function(){

function moreBadGuys(){


$( "#villain-container") .hide();

// $("#villian1").css({
//   "top": Math.random() * window.innerHeight + "px",
//   "left":Math.random() * window.innerHeight + "px"
// })


setInterval(function(){
$( "#villain-container").show();

$("#villain1").css({
  "top": Math.random() * parseInt($('#villain-container').css('height')) + "px",
  "left":Math.random() * parseInt($('#villain-container').css('width')) + "px"
})
console.log('timeout')
}, 700)
}
 for(var i=0; i<5; i++) {
    moreBadGuys();
  }


})
//gets the villians to appear and dissappear
// setTimeout(function() {
//     $('#villian1').fadeOut('fast');
// }, 5000)

// setTimeout(function() {
//     $('#villian1').fadeIn('fast');
// }, 10000)

// })


// $('#menu').click(function(){
//     if ($('.undermenu').css('display') == 'block') {
//         $('.undermenu').hide();
//     }
//     else {
//         $('.undermenu').show();
//     }
// });
