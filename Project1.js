$(document).ready(function(){
  var counter = 1
  //starts out with one bad guy

  var mob = $('.badguy').length//finds how many bad guys i've set up returns an array
  console.log(mob)
    function moveBadGuys(){

    $( ".badguy").hide();

    //hides the villian initially

    setInterval(function(){ //makes it so my villian moves around the screen in intervals
    $("#villain"+counter).show(); //how he is initially revealed
    $("#villain"+counter).css({
      "top": Math.random() * parseInt($('#villain-container').css('height')) + "px",
      "left":Math.random() * parseInt($('#villain-container').css('width')) + "px"
    })
    console.log($('#villain'+counter).css('height'))
    }, 800) //how fast his movement is
    }

    moveBadGuys();


    $('.badguy').click(function(){
      // alert("Shot"); //click action is working
      $( '.badguy' )[0].remove();
      counter++ //adds villians to the game
        function checkForWinner(){
          if (counter === mob+1){ //this is how the bad guy
             setTimeout(function(){ //so that when the winner "kills" the gangster the prompt is delayed after he disappers and the gunshot has sounded
              alert("Nice work with that heater! You found The White Transvaal Lion! Now let's get some bathtub gin.");
             }, 1000) //the delay of the prompt

         }

        }
        console.log(counter)
        checkForWinner();

    });

    $('body').click(function(){
    // I used .get because I'm using #gunshot as a native javascript object and if I didn't I would be using a jquery object
    $('#gunshot').get(0).play();

    })

})

