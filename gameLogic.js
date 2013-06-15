
//loads a gold star image when ever called
var star = {image:'<img class="mainImages" src="/images/star.png" alt="Cat" height="100" width="100">'}

//declare all varilables
var currentLevel = 0;
var endoflevel = 1;
var finalAnswer = 0;
var currentAnswer = 0;
var currentImage = 0;
var level = 1;
var score = 0;
var starpoints = 1;
var currentlevelLenght = levels[currentLevel].Answers.length;
var totalAmountofLevels = levels.lenght;
var Levelcomplete = 1;
var lastScore = 0;


$(document).ready(function () {
    $('#instructions').draggable({ appendTo: "#instructions" });

    //hide instruction screen
    $('#instructionsButton').click(function () {
        $('#cloudimgdiv').show('puff', 1000);
        $('#stats').animate({ left: '+=295' }, 1000);
        $('#instructions').slideUp(600, function () {
            $('#finish').fadeIn(1000, function () {
                $('#finish').html('Click play to begin!');

            });
        });
    });

    //code that loads the play command
    $('#play').click(function () {
        $('#finish').fadeOut(1000);
        $('span').html(' ' + level);
        $('#imgLoad').html(levels[currentLevel].Answers[currentAnswer].imgref);
        $('#progressbar').fadeIn('slow');
        $('#imgLoad').fadeIn('slow');
        $('#formcontainer').fadeIn('slow');
        $('span').fadeIn('slow');
        $('#lightning').fadeIn('slow');
        $('#points').html(score);
        $('#textbox').focus();
    });

    //code that calls the main game passing in the form value
    $('#clickme').click(function () {
            var answer = $('input[name=Word]').val();
            learToSpellGame(answer);
    });

    //Allows return key to be used for answering question
    $('#textbox').keydown(function (e) {
        var code = e.which;
        if (code == 13) {
            $('#clickme').click();
        }
    });

    //loads next level
    $('#nextlevel').click(function () {
        var progresslength = $('#progressbar').width();
        finalAnswer = 0;
        $('#textbox').focus();
        currentLevel++;
        endoflevel++;
        currentAnswer = 0;
        level++;
        $('#finish').fadeOut(1000);
        $('span').html(' ' + level);
        $('input[name=Word]').val('');
        $('#finish').fadeIn(1000);
        $('#imgLoad').html(levels[currentLevel].Answers[currentAnswer].imgref);
        currentlevelLenght = levels[currentLevel].Answers.length;
        $('#lightningimg').animate({ left: '-=' + progresslength });
        learToSpellGame();
    });
});


//Main game funcational code
var learToSpellGame = function (answer) {

    //If statement that checks if the game is complete... i.e. correctAnswer is more then available.
    var correctAnswer = levels[currentLevel].Answers[currentAnswer].Word;
    if (answer === correctAnswer) {
        currentAnswer++;
        finalAnswer++;
        score++;
        if (score === currentlevelLenght + lastScore) {

            if ( currentLevel + 1 === levels.length && currentAnswer === currentlevelLenght) {
                animate(progress);
                GameComplete();
            }
            else {
                animate(progress);
                $('#textbox').focus();
                $('input[name=Word]').val('');
                $('#pointsinc').html(score);
                $('.mainImages').effect("explode", 500);
                $('#starsinc').html(starpoints);
                $('.mainImages').fadeIn(1000);
                $('#finish').html('Well done, you have completed level' + ' ' + Levelcomplete + '.' + 'Here is a gold star!');
                $('#imgLoad').html(star.image);
                $('.mainImages').fadeIn(1000);
                starpoints++;
                lastScore = score;
                Levelcomplete++;

            };

        }
        else {
            var pic = levels[currentLevel].Answers[currentAnswer].imgref;
            $('#textbox').focus();
            $('input[name=Word]').val('');
            $('.mainImages').effect("explode", 500);
            $('#finish').fadeIn(1000);
            $('#finish').html("WOW! You are right, great work!");
            $('#pointsinc').html(score);
            animate(progress);
            $('#imgLoad').html(pic);
            $('.mainImages').fadeIn(1000);
        };

    }
    else {
        $('#finish').html("Oops, try again!");
        $('#finish').fadeOut(3000);
    }
};

//works out the length of the progressbar and divs the value by the amount of questions in the level
var progress = function () {
    var progresslength = $('#progressbar').width();
    return progresslength / currentlevelLenght;
};

//animates the progress icon to show progress of the level.
var animate = function (progress) {
    $('#lightningimg').animate({ left: '+=' + progress() });
};

//function to check if game is complete
var GameComplete = function () {
    $('#stats').slideToggle(1000);
    $('#cloudimgdiv').fadeOut(1000);
};