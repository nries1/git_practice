$(document).ready(function(){
  var card = '<div class="col-sm-3 col-md-3 col-lg-3 col-xl-3 card"></div>';
  for (var i=0; i < 16; i++) {
    $('div.cardsContainer').append(card);
  };
});
