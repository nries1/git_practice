$(document).ready(function() {
  MatchGame.renderCards(MatchGame.generateCardValues(),$('div.cardsContainer'));
  $('div#timerBox').append(new Date());
  $('div.card').click(function() { flipCard($(this),$('div.cardsContainer'))});

});
var MatchGame = {};
var matchCounter = 0;
/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/


// Generate a random integer between two integers, inclusive

 function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
 };

 /*
   Generates and returns an array of matching card values.
  */

MatchGame.generateCardValues = function() {

  var seqArray = [];
  var ranArray = [];

  for (var i=1; i < 9; i++) {
    seqArray.push(i);
    seqArray.push(i);
  };

  while (seqArray.length>0) {
    var ranNum = getRandomIntInclusive(0, seqArray.length-1);
    ranArray.push(seqArray[ranNum]);
    seqArray.splice(ranNum,1);
  };

  return ranArray;

};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
    $game.empty();
    $game.data('flippedCards',[]);
    var cardColors = ["hsl(25,85%,65%)","hsl(55,85%,65%)","hsl(90,85%,65%)",
    "hsl(160,85%,65%)","hsl(220,85%,65%)","hsl(265,85%,65%)","hsl(310,85%,65%)",
    "hsl(360,85%,65%)"];
    for (var i = 0; i<cardValues.length; i++) {
      var $card = $('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 card"></div>');
      $card.data('value',cardValues[i]);
      $card.data('flipped',false);
      $card.data('color', cardColors[Number(cardValues[i]-1)]);
      $card.data('id', i)
      $game.append($card);
//      $('div.card').click(function() { flipCard($(this),$('div.cardsContainer'))});
  };
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

 flipCard = function($card, $game) {
    if ($card.data('flipped')==true) {
        return;
      } else {
        $card.css('background-color', $card.data('color'));
        $card.text($card.data('value'));
        $card.data('flipped',true);
        $game.data('flippedCards').push($card);
        if ($game.data('flippedCards').length == 2) {
          if ($game.data('flippedCards')[0].data('value')==$game.data('flippedCards')[1].data('value')) {
              console.log("flippedCards array: "+$game.data('flippedCards')[1]);
              $game.data('flippedCards')[0].css("background-color","rgb(153,153,154)");
              $game.data('flippedCards')[0].css("color", "rgb(204,204,204)");
              $game.data('flippedCards')[0].css("border", "4px solid #ffffff");
              $game.data('flippedCards')[1].css("background-color","rgb(153,153,154)");
              $game.data('flippedCards')[1].css("color", "rgb(204,204,204)");
              $game.data('flippedCards')[1].css("border", "4px solid #ffffff");
              $game.data('flippedCards',[]);
              matchCounter = matchCounter + 1;
              if (matchCounter == 8) {
                setTimeout(function() {
                  alert("you win!");
                }, 350);
              };
            } else {
              setTimeout(function() {
                console.log("flippedCards array: "+toString($game.data('flippedCards')[1]));
                $game.data('flippedCards')[0].data('flipped', false);
                $game.data('flippedCards')[0].css("background-color", "rgb(35,64,86)");
                $game.data('flippedCards')[0].text("");
                $game.data('flippedCards')[1].data('flipped', false);
                $game.data('flippedCards')[1].css("background-color", "rgb(35,64,86)");
                $game.data('flippedCards')[1].text("");
                $game.data('flippedCards',[]);
              }, 350);
            };
          };
        };
      };
