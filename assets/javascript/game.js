var counter=0;
var wins=0;
var losses=0;

var targetNumber=Math.floor(Math.random()*101)+19;

$("#numGuess").text(targetNumber);
$("#currentNum").text(counter);
$("#winCounter").text(wins);
$("#lossCounter").text(losses);

var numberOptions =[Math.floor(Math.random()*11)+1];
var imageLinks=["assets/images/Steven_Shield_WD.png", "assets/images/Current_Pearl_Request.png", "assets/images/GarnetByKmes.png", "assets/images/Jfek_New_Gen.png"];

for (var i= 0; i< imageLinks.length; i++) {
    var imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("src", imageLinks[i]);

    imageCrystal.attr("data-crystalvalue", Math.floor(Math.random()*11)+1);

    $("#crystals").append(imageCrystal);
}

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