var pair, pairWith;
// var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
var array = ["BLANK","Amir","Andrew","Christina","Daniel","David","Dominic","Isaac","Ben","Jonathan","Josh","Kaitlin","Kim","Krista","Michael","Olivia","Ramin","Russell","Vincent","Yosef"];
numberPair = array.length/2;

$(document).ready(function() {


  // if more than one person in array, pick a pair
  $(".pairInfo").toggle();
  $(".pairListDiv").toggle();
  function listPair() {
    $("#studentPair").text(pair + " with " + array[pairWith]);
  }

  function addToList() {
    $("#pairList").append("<li>" + pair + " with " + array[pairWith] + "</li>");
  }

  function discardPair() {
    // array.push(pair);
    pairWith = Math.floor(Math.random() * (array.length));
    listPair();
  }

  function keepPair() {
    $(".pairListDiv").fadeIn(1000);
    addToList();
    array.splice(pairWith,1);
    if (array.length > 0) {
      pair = (array.pop());
      pairWith = Math.floor(Math.random() * (array.length));
      listPair();
    } else {
      $("#keepPair").toggle();
      $("#discardPair").toggle();
      $("#studentPair").text("Now get to work!");
      $(".pairInfo").fadeOut(3000);
    }
  }

  if (array.length > 1) {
    pair = (array.pop());
    pairWith = Math.floor(Math.random() * (array.length));
    $("#startPairing").click(function(){
      listPair();
      $(".pairInfo").fadeIn(1000);
      // $(".pairListDiv").toggle();
    });
    // $("#startPairing").click().toggle();
    $("#keepPair").click(keepPair);
    $("#discardPair").click(discardPair);

  }





});
