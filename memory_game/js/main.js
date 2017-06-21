  var cards = [
{
  rank: 'queen',
  suit: 'hearts'
  cardImage: "images/queen-of-hearts.png"
},
{
  rank: 'queen',
  suit: 'diamonds',
  cardImage: "images/queen-of-diamonds.png"
},
{
  rank: 'king',
  suit: 'hearts',
  cardImage: "images/king-of-hearts.png"
},
{
  rank: 'king',
  suit: 'diamonds',
  cardImage: "images/king-of-diamonds.png"
}
];
  var cardsInPlay = [];
  var cardId = cards [0,1,2,3];
 /* 
  var checkForMatch = function() {
	if(cardsInPlay [0] === cardsInPlay [1]) {
		console.log("You've found a match!");
	}  else {
		console.log("Sorry,try again.");
	}
};
  var flipCard = function (cardId){
  	console.log("User flipped" + cards[cardId]);
  if(cardsInPlay.length === 3) {
  	if (cardsInPlay [0] === cardsInPlay[1]){
  		 alert("You've found a match!");
  	} else {
  		alert("Sorry, try again.");
  	}
  }
};
*/
var checkForMatch = function(cardId) {
	if(cardsInPlay.length === 2)	{
	 	if (cardsInPlay[0] === cardsInPlay[1]) {
	      	console.log("You found a match!");
	      	alert("You found a match!");
  		} else {
  			console.log("Sorry, try again.");
     		 alert("Sorry, try again.");
     		 
     		 cardsInPlay = [];
  		}
  	}
};

var flipCard = function() {
	console.log('this', this)
	console.log("User flipped" + cards[cardId].rank);
	cardsInPlay.push([cardId].rank);
	checkForMatch(cardId);
  console.log(cardImage);
  console.log(suit);
};

 

