// Define variables
var counter=0;
var wins=0;
var losses=0;

// Assign targetNumber variable for our guess
var targetNumber=Math.floor(Math.random()*102)+19;

// Assign initial scores to html page
$("#numGuess").text(targetNumber);
$("#currentNum").text(counter);
$("#winCounter").text(wins);
$("#lossCounter").text(losses);

// Make array of images for crystals
var imageLinks=["assets/images/Steven_Shield_WD.png", "assets/images/Current_Pearl_Request.png", "assets/images/GarnetByKmes.png", "assets/images/Jfek_New_Gen.png"];

// Make for-loop that will assign random value from 1-12 to each of our images
for (var i= 0; i< imageLinks.length; i++) {
    var imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("src", imageLinks[i]);

    imageCrystal.attr("data-crystalvalue", Math.floor(Math.random()*12)+1);

    $("#crystals").append(imageCrystal);
}

// Main Process
$(".crystal-image").on("click", function(){

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter +=crystalValue;
    $("#currentNum").text(counter);

    if (counter === targetNumber){
        wins++;
        $("#winCounter").text(wins)
        resetGame();
    }

    else if (counter >= targetNumber) {
        losses++;
        $("#lossCounter").text(losses)
        resetGame();
    }

    function resetGame(){
        counter =0;
        targetNumber=Math.floor(Math.random()*101) +19;
        $("#numGuess").text(targetNumber);
        $("#currentNum").text(counter);
        $("#winCounter").text(wins);
        $("#lossCounter").text(losses);
    }

});