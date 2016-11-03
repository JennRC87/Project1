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

   for(var i=0; i<5; i++) {
      moveBadGuys();
    }

    var body = $('body');
    function checkForWinner(){
      if ($('.badguy').length === 0){
        alert("Congratulations!!!! You found The White Transvaal Lion!")
      }
    }
  $('.badguy').click(function(){
    alert("Shot");
    $( ".badguy" ).hide();
  });


})


// duck.click(function(){
//       $(this).addClass('shot');
//       var that=(this)
//       setTimeout(function(){
//         $(that).remove();
//         checkForWinner();
//       }, 1000);
//     })
//     body.append(duck);

