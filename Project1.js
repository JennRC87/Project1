$(document).ready(function(){

  function moveBadGuys(){

  $( "#villain-container") .hide();

  setInterval(function(){
  $( "#villain-container").show();

  $("#villain1").css({
    "top": Math.random() * parseInt($('#villain-container').css('height')) + "px",
    "left":Math.random() * parseInt($('#villain-container').css('width')) + "px"
  })
  console.log('timeout')
  }, 800)
  }

  moveBadGuys();

    // var body = $('body');
    // function checkForWinner(){
    //   if ($('.badguy').length === 0){
    //     alert("Congratulations!!!! You found The White Transvaal Lion!")
    //   }
    // }
  $('.badguy').click(function(){
    // alert("Shot");
    $( '.badguy' ).hide();

  });

$('body').click(function(){
// I used .get because I'm using #gunshot as a native javascript object and if I didn't I would be using a jquery object
$('#gunshot').get(0).play();
})

})


  // var game_start = new Audio('audio/start-round.mp3');
  // game_start.play();

