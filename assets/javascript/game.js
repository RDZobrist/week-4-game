
  
/// Global Variables \\\\
var battlesWon = [];
var enemyLockerRoom = [];
var fighterlockerRoom = [];
var battleVictory;
var currentFighter;
var currentEnemy;
var warWon = false;
var fighterPicked = false;
var enemyPicked = false;
$(document).ready(function(){    
	$("#arena, #attackButton, #enemyreadyButton, #instructions,  #enemyMsg, #loser, #victory2, #victory1").hide();
	$("#preFightPanel").html("Characters");
	
var yodaAudio;
var yTwoAudio;
var saberAudio = new Audio('assets/Lightsaber.mp3');
var darthAudio;
var obiAudio;
///// characters \\\\
var characters = {
	"obi" : {
		name: "obi",
		health: 300,
		attack: 8,
		counter: 40,
		imagePath: "assets/images/imageObi.jpg"
				
	},
 
	"yoda" : {
		name: "yoda",
		health: 360,
		attack: 7,
		counter: 40,
		imagePath: "assets/images/imageYoda.png"
		// yodaWar: function(){
		// 	if ()
		// }
	},
	"ytwoDtwo": {
		name: "ytwoDtwo",
		health: 240,
		attack: 8,
		counter: 30,
		imagePath: "assets/images/imageYtwoDtwo.png"
	},
	"vader" : {
		name: "vader",
		health: 200,
		attack: 14,
		counter: 10,
		imagePath:  "assets/images/imageDarth.png"
 
  }
 
};
// configuring character YtwoDtwo's div\\
  var yTwoDtwoDiv = $("<div class='charChoicesDIV ytwoDtwo'id='machine' data-name=ytwoDtwo'" + characters.ytwoDtwo + "'>");
    var yTwoDtwoName = $("<div class='character-name'>").text("YtwoDtwo");
    var yTwoDtwoImage = $("<img alt='image' class='character-image'>").attr("src", characters.ytwoDtwo.imagePath);
    var yTwoDtwoHealth = $("<div class='character-health'>").text(characters.ytwoDtwo.health);
// configuring character Yoda's div \\
var yodaDiv = $("<div class='charChoicesDIV yoda' id='jedi' data-name=yoda" + characters.yoda + "'>");
    var yodaName = $("<div class='character-name' id='jedi'>").text("Yoda");
    var yodaImage = $("<img alt='image' class='character-image'>").attr("src", characters.yoda.imagePath);
    var yodaHealth = $("<div class='character-health'>").text(characters.yoda.health);
      
 
    
// configuring character Obi's div\\
 var obiDiv = $("<div class='charChoicesDIV obi' id='unsure' data-name=obi'" + characters.obi + "'>");
    var obiName = $("<div class='character-name'>").text("Obi");
    var obiImage = $("<img alt='image' class='character-image'>").attr("src", characters.obi.imagePath);
    var obiHealth = $("<div class='character-health'>").text(characters.obi.health);
   
// configuring character darth vader's Div \\
     var darthDiv = $("<div class='charChoicesDIV darth' id='dark' data-name=vader'" + characters.vader + "'>");
    var darthName = $("<div class='character-name'>").text("Darth Vader");
    var darthImage = $("<img alt='image' class='character-image'>").attr("src", characters.vader.imagePath);
    var darthHealth = $("<div class='character-health'>").text(characters.vader.health);
// deploying character divs - image, name, health - to html \\
yodaDiv.append(yodaName).append(yodaImage).append(yodaHealth);
$("#leftovers").append(yodaDiv);
yTwoDtwoDiv.append(yTwoDtwoName).append(yTwoDtwoImage).append(yTwoDtwoHealth);
 $("#leftovers").append(yTwoDtwoDiv);
 obiDiv.append(obiName).append(obiImage).append(obiHealth);
 $("#leftovers").append(obiDiv);
 darthDiv.append(darthName).append(darthImage).append(darthHealth);
 $("#leftovers").append(darthDiv);
var jedi = characters.yoda;
var dark = characters.vader;
var unsure = characters.obi;
var machine = characters.ytwoDtwo;
// was attempting to push image into array upon click, then check if value is one of four values - "dark", "unsure", "jedi", "machine" - already attached to character images. if so, then have that corresponding image = the correct character.name \\\\
// this will be the function that renders all characters\\
// user chooses fighter \\
 $(".charChoicesDIV").on("click", function(){
 	$("#buttonText").text("I'm ready to choose my opponent.");
 	
 	
if(fighterPicked === false){
var currentFighter = $(this).attr('id');
if (currentFighter === "jedi"){
	currentFighter = characters.yoda;
}
if (currentFighter === "machine"){
	currentFighter = characters.ytwoDtwo;
}
if (currentFighter === "dark"){
	currentFighter = characters.vader;
}
if (currentFighter === "unsure"){
	currentFighter = characters.obi;
}
}
// remove opening message from DOM \\
$("#openingMsg").hide();
// send chosen fighter to arena, rendering character panel to Enemy panel
 $("#arena").append(this);
       
 // send remaining characters to enemyLockerRoom array \\
 $(leftovers.children).addClass("enemy");
enemyLockerRoom.push(leftovers.children);
 // change panel heading to "Enemies" \\
   $("#preFightPanel").html("Enemies");
        
// animating instructions \\
	if(fighterPicked === false && enemyPicked === false){
    $("#instructions").slideDown("slow");
     // clearing the screen \\
	$(".hider").hide();
 $(".enemy").on("click", function(){
 	$("#enemySpot").append(this);
 	$(leftovers.children).removeClass("enemy").addClass("enemy2wo");
 	if(enemyPicked === false){
 	var currentEnemy = $(this).attr("id");
 	alert(currentEnemy);
 	if(currentEnemy === "jedi"){
 		currentEnemy = characters.yoda;
 	}
 	if(currentEnemy === "unsure"){
 		currentEnemy = characters.obi;
 	}
 	if (currentEnemy === "machine"){
 		currentEnemy = characters.ytwoDtwo;
 	}
 	if(currentEnemy === "dark"){
 		currentEnemy = characters.vader;
 	}
 	
 	enemyPicked = true;
 	$("#attackButton").show();
 	var round = 0;
 	var victories = 0;
 	$("#attackButton").on("click", function(){
 		
round++;
var roundd = currentFighter.attack * round;
 		if(warWon === false){
 			for (i=0; i < currentEnemy.counter; i++){
 				--(currentFighter.health);
 			
 			}
 			for (j = 0; j < roundd; j++){
 				--(currentEnemy.health);
 			}
 				
 				yodaHealth.text(characters.yoda.health);
 				obiHealth.text(characters.obi.health);
 				yTwoDtwoHealth.text(characters.ytwoDtwo.health);
 				darthHealth.text(characters.vader.health);
 				if (currentFighter.health < 1){
 					$(".hider").hide();
 					$("#enemyMsg").hide();
 					$("#loser").slideDown("slow");
 					$("#enemyreadyButton").show();
 					
 				}
 // ----------->				// was havin a very hard time reassingning currentEnemy \\<-----------
// --------> 				// once the first one died so the game could \\				<-----------------------
 				// 				continue. I tried so many things it was crazy, started to \\\
 						// \\wonder if I set the game up wrong, was stubborn and wouldnt quit\\\
 				// then I ran out of time. 
 				if (currentEnemy.health < 1){
 					victories++;
 					$("#enemySpot").remove();
 					$("#attackButton").addClass("roundtwoBtn");
 					
 				
 					
''
 					$("#loser, #enemyMsg, #arena, #attackButton").hide();
 					$("#victory1").slideDown("slow");
 					$("#enemyreadyButton").show();
 					$(".enemy").addClass("enemyoptions2");
 					
 				}
$("#enemyreadyButton").on("click", function(){
	$(".hider").hide();
	$("#victory1").slideUp("fast");
	$(".hider, #arena, #attackButton").show();
})
 	var enemytwoPkd = false;
  $(".enemy2wo").on("click", function(){
  	var enemyRndtwo = $(this).attr('id');
  	console.log(enemyRndtwo);
  	currentEnemy = enemyRndtwo;
if(warWon === false && enemytwoPkd === false){
if(currentEnemy === "jedi"){
 		currentEnemy = characters.yoda;
 	}
 	if(currentEnemy === "unsure"){
 		currentEnemy = characters.obi;
 	}
 	if (currentEnemy === "machine"){
 		currentEnemy = characters.ytwoDtwo;
 	}
 	if(currentEnemy === "dark"){
 		currentEnemy = characters.vader;
 	}
 	
 	enemytwoPkd = true;
 	console.log(currentEnemy);
 	// console.log(currentEnemy.health);
 	console.log("this is the: " + round);
$(".roundtwoBtn").on("click", function(){
	round++;
console.log("cureent counter: " + currentEnemy.counter);
console.log("this is the fighter attack: " + currentFighter.attack);
var rounddd = currentFighter.attack * round;
 		if(warWon === false){
 			for (i=0; i < currentEnemy.counter; i++){
 				--(currentFighter.health);
 			
 			}
 			for (j = 0; j < rounddd; j++){
 				--(currentEnemy.health);
 			}
 				
 				yodaHealth.text(characters.yoda.health);
 				obiHealth.text(characters.obi.health);
 				yTwoDtwoHealth.text(characters.ytwoDtwo.health);
 		}		darthHealth.text(characters.vader.health);
 				
})
if (currentFighter.health < 1){
	warLost = true;
	$(".hider, .roundtwoBtn, #arena").hide();
	$("#loser").slideDown("slow");
}
if(currentEnemy.health < 1){
victories++;
alert(victories);
$("#enemySpot").remove();
}
}
})
}
  })		
 		}
 	})		
 }
 })
	   
 
        if(enemyLockerRoom.length > 0){
	fighterPicked = true;}
})
	
	
	
        
;
     
 
$("#enemyreadyString").on("click", function(){
	$(".hider, #arena, #enemyMsg").show();
		$("#instructions").slideUp("fast");
	$("#charPanel").addClass("preGamejitter");
});