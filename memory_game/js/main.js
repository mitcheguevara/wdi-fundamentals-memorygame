  console.log("Up and running");
  var cards = ["queen","queen","king","king"];
  var cardsInPlay = [];
  
  var cardOne = cards[0]; 
  var cardTwo = cards [3];

  cardsInPlay.push("cardOne", "cardTwo");
 
 if (cardsInPlay.lenght === 2) {
 	if (cardsInPlay [0] === cardsInPlay [1]) {
 		alert("You found a match")
 	}	else {
 		alert ("Sorry, try again.")
 	}
 }
  console.log();
  console.log("User flipped" + cardOne);
  console.log("User flipped" + cardTwo);
