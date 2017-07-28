// my debuger 
"use strict"


/// Global Variables \\\\
var battlesWon = [];
var enemyLockerRoom = [];
var fighterlockerRoom = [];
var battleVictory;
var currentFighter;
var currentEnemy;
var currentEnemy2;
var victories = 0;
var round = 1;
var warWon = false;
var fighterPicked = false;
var enemyPicked = false;
$(document).ready(function() {

    var saberAudio = new Audio('assets/Lightsaber.mp3');

    // Character constructor function 
    function Character(name, healthP, attackP, counterP, imagePath, id) {
        this.name = name;
        this.healthP = healthP;
        this.attackP = attackP;
        this.counterP = counterP;
        this.imagePath = imagePath
        this.id = id;
        this.counterBlow = function(enemyCounter, healthP) {

            this.healthP = this.healthP - currentEnemy.counterP;


        };
        this.attack = function(enemyHealthP, attackP) {

            this.attackP = this.attackP * round;
            currentEnemy.healthP = currentEnemy.healthP - this.attackP;


        }

        this.renderCharacter = function(name, health, imagePath) {
            this.div = $("<div class='characterChoices', id=" + "'" + this.id + "'" + 'data-name=' + "'" + this.id + "'" + '>"');
            this.badge = $("<div class='character-name', id=" + this.id + '>"').text(this.name + "  " + this.healthP);
            this.image = $("<img alt='image' class='character'>").attr("src", this.imagePath);
            this.characterDIV = $(this.div).append(this.image).append(this.badge);



        }


    };

    // initialize character objects
    const obi = new Character("obi", 300, 8, 40, "assets/images/imageObi.jpg", "unsure");
    const yoda = new Character("yoda", 380, 7, 40, "assets/images/imageYoda.png", "jedi");
    const ytwoDtwo = new Character("ytwoDtwo", 200, 8, 30, "assets/images/imageYtwoDtwo.png", "machine");
    const vader = new Character("vader", 200, 14, 10, "assets/images/imageDarth.png", "dark");

    // hide unneccessary elements 
    $("#arena, #attackButton, #enemyreadyButton, #instructions,  #enemyMsg, #loser, #victory2, #victory1").hide();

    // render characters to screen
    obi.renderCharacter();
    yoda.renderCharacter();
    vader.renderCharacter();
    ytwoDtwo.renderCharacter();
    $("#preFightPanel").append(obi.characterDIV, yoda.characterDIV, vader.characterDIV, ytwoDtwo.characterDIV);
    // push all characters to array 
    enemyLockerRoom.push(obi, yoda, vader, ytwoDtwo);


    // +++ TESTING and DEBUGGING +++
    console.log(enemyLockerRoom.length);

    $(".characterChoices").on("click", function() {

        let j = 0;

        if (!(fighterPicked)) {

            let currentFighter = $(this).attr('data-name');
            alert(currentFighter);


            if (currentFighter === "jedi") {
                currentFighter = yoda;
                fighterPicked = true;
                let idx = enemyLockerRoom.indexOf(yoda);
                console.log(idx);
                fighterlockerRoom = enemyLockerRoom.splice(idx, 1);
                if (fighterPicked && (!(enemyPicked))) {
                    $('#arena').show().append(this);

                    $(preFightPanel.children).removeClass('characterChoices').addClass('enemy');


                } else
                if (currentFighter === "machine") {
                    currentFighter = ytwoDtwo;
                    fighterPicked = true;
                    let idx = enemyLockerRoom.indexOf(ytwoDtwo);
                    if (fighterPicked && (!(enemyPicked))) {
                        $('#arena').show().append(this);
                        $(preFightPanel.children).removeClass('characterChoices').addClass('enemy');
                    }


                } else if (currentFighter === "dark") {
                    currentFighter = vader;
                    fighterPicked = true;
                    let idx = enemyLockerRoom.indexOf(vader);
                    fighterlockerRoom = enemyLockerRoom.splice(idx, 1);
                    if (fighterPicked && (!(enemyPicked))) {
                        $('#arena').show().append(this);

                        $(preFightPanel.children).removeClass('characterChoices').addClass('enemy');
                    }
                }
            } else {
                (currentFighter === "unsure")
                currentFighter = obi;
                fighterPicked = true;
                let idx = enemyLockerRoom.indexOf(obi);
                fighterlockerRoom = enemyLockerRoom.splice(idx, 1);
                if (fighterPicked && (!(enemyPicked))) {
                    $('#arena').show().append(this);

                    $(preFightPanel.children).removeClass('characterChoices').addClass('enemy');
                }

            }

            //             ++++ TESTING and DEBUGGING +++ 
            // _________________________________________________________
            console.log('Current Fighter: ' + currentFighter);
            console.log('preFightPanel: ' + preFightPanel)
            console.log('enemyLockerRoom ' + enemyLockerRoom.length);



            $('.enemy').on('click', function() {

                $('#enemySpot1').append(this);
                $('#attackButton').show();

                if (this.id === "jedi") {
                    currentEnemy = yoda;

                } else if (this.id === "unsure") {
                    currentEnemy = obi;
                } else if (this.id === "machine") {
                    currentEnemy = ytwoDtwo;
                } else {
                    currentEnemy = vader;
                }

                // +++ TESTING and DEBUGGING +++
                // _____________________________
                console.log(currentEnemy.counterP);

                $('.attackButton').on('click', function() {

                    
                        currentFighter.attack();
                        currentFighter.counterBlow();
                        currentFighter.badge.text(currentFighter.healthP);
                        currentEnemy.badge.text(currentEnemy.healthP);



                        if (currentFighter.healthP < 1) {
                            alert('dead')
                            $('#loser').slideDown('slow');

                        }
                        if (currentEnemy.healthP < 1) {
                            $('#enemySpot1').remove();
                            $('#victory1').slideDown('slow');
                            $('#enemyreadyButton').show();
                            currentEnemy = {};



                        }
                        round++

                        // +++ TESTING and DEBUGGING +++
                        // 
                        // console.log(currentFighter.attack + " | " + currentFighter.counterBlow)
                        console.log("Round: " + round);
                        console.log("Current enemy health " + currentEnemy.healthP);
                    
                });
                $('#enemyreadyButton').on('click', function() {
                    $('.attackButton').removeClass('attackButton').addClass('btnrd2')
                    $('#victory1').slideUp('fast');
                    $('#enemyreadyButton').hide();
                    $(arena.children).removeClass('enemy');
                    $(arena.children).addClass('enemy2');
                    
               
            });
            $('.enemy').on('click', function() {
                    alert(this.id)
               if (this.id === "jedi") {
                    currentEnemy = yoda;
                    currentEnemy.healthP = yoda.healthP;
                    currentEnemy.badge.text(currentEnemy.healthP);

                } else if (this.id === "unsure") {
                    currentEnemy = obi;
                    currentEnemy.enemyHealthP = obi.healthP;
                    currentEnemy.badge.text(currentEnemy.healthP);
                } else if (this.id === "machine") {
                    currentEnemy = ytwoDtwo;
                    currentEnemy.healthP = ytwoDtwo.healthP;
                    currentEnemy.badge.text(currentEnemy.healthP);
                } else {
                    currentEnemy = vader;
                    currentEnemy.healthP = vader.healthP;
                    currentEnemy.badge.text(currentEnemy.healthP);
                }

                // +++ TESTING and DEBUGGING +++
                // _____________________________
                console.log(currentEnemy.counterP);

               
                $('#enemySpot2').append(this);
                $('.btnrd2').on('click', function(){

                })
                // $('#attackButton').on('click', function(){
                //          alert('step2')
                // })
            })});
        }
    })
})