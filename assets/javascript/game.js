var targetNumber = Math.floor((Math.random() * 20) + 36);

// Game counters
var winCounter = 0;
var lossCounter = 0;


	$("#crystals-to-collect").text(targetNumber);



	// var images = $("<img>");
	// images.addClass("crystalcss");

	var images = ["redart.png", "purplecave.png", "blueart.png", "greyblueart.png"];

	var counter = 0;
	var numCrystals = 4;

	var numberOptions = [];
	for (var i = 0; i < numCrystals; i++) {
		numberOptions.push(Math.floor((Math.random() * 10) + 1));
	}

	for (var i = 0; i < numberOptions.length; i++) {

		var imageCrystal = $("<img>");

		imageCrystal.addClass("crystal-images");

		imageCrystal.attr("src", "assets/images/" + images[i]);


		imageCrystal.attr("data-crystalvalue", numberOptions[i]);

		$("#crystals").append(imageCrystal);
	}


		
	$(".crystal-images").on("click", function() {

		var crystalValue = ($(this).attr("data-crystalvalue"));
		crystalValue = parseInt(crystalValue);

		counter += crystalValue;

		$("#number-so-far").text(counter + " crystals!");

		if (counter === targetNumber) {
			winCounter++
			$("#wins").text(winCounter++);
			alert("You win!");
		}

		else if (counter >= targetNumber) {
			lossCounter++
			$("#losses").text(lossCounter++);
      		alert("You lose!!");
      	}

	});