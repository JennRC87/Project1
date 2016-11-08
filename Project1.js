$(document).ready(function(){

  var clickCounter = 0;
  var counter = 1;
  var shotsLeft = 9;
  $('#shotsFired').text(shotsLeft);
  //dynamically appended the shotsFired to the DOM
  //starts out with one bad guy

  var mob = $('.badguy').length//finds how many bad guys i have
  console.log(mob)
  function moveBadGuys(){



    setInterval(function(){ //makes it so my villian moves around the screen in intervals
    $("#villain"+counter).fadeIn(2000); //Thanks Heidi for that fade! how he is initially revealed and how I get the next bad guy to appear.
    $("#villain"+counter).css({
      "top": Math.random() * parseInt($('#villain-container').css('height')) + "px",
      "left":Math.random() * parseInt($('#villain-container').css('width')) + "px"
    })
    console.log($('#villain'+counter).css('height'))
    }, 1000) //how fast his movement is
    }

    moveBadGuys();


    $('.badguy').click(function(){
      // alert("Shot"); //click action is working

      $( '.badguy')[0].remove();
      $('#wilhelmScream').get(0).play();

      counter++ //adds villians to the game
        function checkForWinner(){
          if (counter === mob+1){ //this is how the bad guy
             setTimeout(function(){ //so that when the winner "kills" the gangster the prompt is delayed after he disappers and the gunshot has sounded
              alert("Nice work with that heater! You found The White Transvaal Lion! Now let's get some bathtub gin.");
                location.reload();
             }, 1000) //the delay of the prompt
         }

        }
        console.log(counter)
        checkForWinner();

    });

    $('#villain-container').click(function(){
      shotsLeft--;
          //decreasing the click counter
      $('#shotsFired').text(shotsLeft);
    // I used .get because .play only works with native JavaScript
      $('#gunshot').get(0).play();
      clickCounter++
     if (clickCounter === 9) {
      alert ('Somebody call the meat wagon. You just got bumped off.')
      location.reload(); //Thanks Roy!(stackoverflow.com)
      }
    })

      $('#button').click(function(){
        var textTop = $('#story').css('top');
        //we uses .css attribute to get the y cordinate of the top
        textTop = textTop.split('p');
        //we did this because we wanted to get rid of the px and make it a number it got rid of the p
        textTop.pop('');
        //this was to get rid of the x in the px and only the number is left
        textTop = Number(textTop)-50;
        //we converted the 0 string into a number
        console.log(textTop);
        if (textTop < -300){
          textTop = 0
        }
        $('#story').css('top', textTop+'px');
        //this is to perform the math we took away to make it go up
      })

})



