/* Required Trello Ticker Settings */

// Name of Trello list with items that should be decorated with the "active" class.
var activeListName = "Active";
// ID of public Trello board to follow.
var boardId = "";
// API key obtained from .
var apiKey = "";
// Name of Trello list with items to show.
var workingSetListName = "Working Set";

/* Optional Trello Ticker Settings */

// (Optional) Character to delimit linebreaks (e.g., ":" would insert a line break between "Now:" and "Current task").
var lineBreak = ":";
// (Optional) Frequency to check for card updates, in milliseconds.
var refreshFrequency = 5000;
// (Optional) Whether the line break character should also be rendered.
var retainLineBreak = true;
// (Optional) Title card text to show.  Blank for no title card.
var title = "";

// Parse query string values for overrides.
if (location.search.indexOf("?") == 0){
	var queryStringParts = location.search.substring(1).split("&");
	for (var i = 0; i < queryStringParts.length; i++){
		var parts = queryStringParts[i].split("=", 2);
		switch (parts[0].toLowerCase()){
			case "activeListName":
				activeListName = replaceAll("\\+", " ", decodeURIComponent(parts[1]));
				break;
			case "apiKey":
				apiKey = replaceAll("\\+", " ", decodeURIComponent(parts[1]));
				break;
			case "boardid":
				boardId = replaceAll("\\+", " ", decodeURIComponent(parts[1]));
				break;
			case "lineBreak":
				lineBreak = replaceAll("\\+", " ", decodeURIComponent(parts[1]));
				break;
			case "refreshFrequency":
				refreshFrequency = replaceAll("\\+", " ", decodeURIComponent(parts[1]));
				break;
			case "title":
				title = replaceAll("\\+", " ", decodeURIComponent(parts[1]));
				break;
			case "workingSetListName":
				workingSetListName = replaceAll("\\+", " ", decodeURIComponent(parts[1]));
				break;
		}
	}
}
			
// Angular module for Trello Ticker.
var trelloTicker = angular.module("TrelloTicker", ["ngSanitize"])
var trelloCardsController = trelloTicker.controller("CardsController", function ($scope, $timeout) {
	$scope.cards = [];
	$scope.titleValue = "";
	
	// Set the title box, if a value is passed in.
	if (title != "")
		$scope.titleValue = title;
	
	// On load, initialize the Trello API and refresh cards.
	$.getScript("https://trello.com/1/client.js?key=" + encodeURI(apiKey), refreshCards);

	// Refresh the cards on a regular schedule.
	var lastCardsResult = null;
	function refreshCards(){
		Trello.get("/boards/" + boardId + "/lists?cards=open&card_fields=name&fields=name", refreshCardsSuccess);
		
		function refreshCardsSuccess(result){
			if (result != lastCardsResult){
				lastCardsResult = result;
		
				$scope.cards = [];
				
				for (var i = 0; i < result.length; i++){
					if (result[i].name == workingSetListName || result[i].name == activeListName){
						var receivedCards = result[i].cards;

						for (var j = 0; j < receivedCards.length; j++){
							var card = receivedCards[j];
							if (result[i].name == activeListName)
								card.className = "active";
							
							if (lineBreak != "")
								card.name = card.name.replace(lineBreak, (retainLineBreak ? lineBreak : "") + "<br/>");
					
							$scope.cards.push(card);
						}
					}
				}
			}
		}

		// Refresh after refreshFrequency milliseconds.
		$timeout(refreshCards, refreshFrequency);
	}
});

// Helper function for string replacements.
function replaceAll(find, replace, str) {
	return str.replace(new RegExp(find, "g"), replace);
}

// Once the DOM is loaded, if no title is set, remove it from the page.
$(document).ready(function(){
	if (title == "")
		$("#titleValue").remove();
});
