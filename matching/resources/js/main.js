var MatchGame = {};
var $game = {};

function getRandomIntInclusive(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};

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



$(document).ready(function(){
//  var card = '<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 card">3</div>';
  var randomArray = MatchGame.generateCardValues();
  for (var i=0; i < 16; i++) {
    $('#card'+i).text(randomArray[i]);
  };
});

$('div.col-xs-3.col-sm-3.col-md-3.col-lg-3.col-xl-3.card').click(function() {
  if (flippedCards.length<2) {
    var cardVal = $(this).text();
    flippedCards.push(cardVal);
    alert("You've flipped the cards:"+flippedCards[0]);
    } else
      if (flippedCards.length==2) {
        flippedCards = [];
        var cardVal = $(this).text();
        flippedCards.push(cardVal);
        alert("You've flipped the cards:"+flippedCards[0]+flippedCards[1]);
      };
});
