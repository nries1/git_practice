$(document).ready(function() {
  MatchGame.renderCards(MatchGame.generateCardValues(),$('.cardsContainer'));


var MatchGame = {};

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
  var cardColors = ["hsl(25,85%,65%)","hsl(55,85%,65%)","hsl(90,85%,65%)",
  "hsl(160,85%,65%)","hsl(220,85%,65%)","hsl(265,85%,65%)","hsl(310,85%,65%)",
  "hsl(360,85%,65%)"];
  for (var i = 0; i<cardValues.length-1; i++) {
    var $card = '<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 card">3</div>';
    $card.data('value',cardValues[i]);
    $card.data('flipped',false);
    $card.data('color', cardColors[$card.value-1]);
//    $($card).text($($card).data('value'));
    $game.append($card);

  };
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};

});
