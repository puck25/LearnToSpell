$(document).ready(function () {
    $('#instructions').draggable({ appendTo: "#instructions" });
});
    
    //loads a gold star image when ever called
    var star = {image:'<img class="mainImages" src="/images/star.png" alt="Cat" height="100" width="100">'}

    //declare all varilables
    var currentLevel = 0;
    var currentAnswer = 0;
    var currentImage = 0;
    var level = 1;
    var currentlevelLenghtt = levels[currentLevel].Answers.length;
    var score = 0;
    var starpoints = 1;
    var totalAmountofLevels = levels.lenght;
    var Levelcomplete = 1;


    //hide instruction screen
    $(document).ready(function () {
        $('#instructionsButton').click(function () {
            $('#cloudimgdiv').show('puff', 1000);
            $('#stats').animate({ left: '+=295' }, 1000);
            $('#instructions').slideUp(600, function () {
                $('#finish').fadeIn(1000, function () {
                    $('#finish').html('Click play to begin!');

                });
            });
        });
    });

    //code the loads the play command
    $(document).ready(function () {
        $('#play').click(function () {
            $('#finish').fadeOut(1000);
            $('span').html(' ' + level);
            $('#imgLoad').html(levels[currentLevel].Answers[currentAnswer].imgref);
            $('#progressbar').fadeIn('slow');
            $('#imgLoad').fadeIn('slow');
            $('form').fadeIn('slow');
            $('span').fadeIn('slow');
            $('#lightning').fadeIn('slow');
            $('#points').html(score);
            $('#textbox').focus();
        });
    });

   
//code that calls the main game passing in the form value
    $(document).ready(function () {
        $('#clickme').click(function () {
            var answer = $('input[name=Word]').val();
            learToSpellGame(answer);
        });
    });

     //Main game funcational code
    var learToSpellGame = function (answer) {
        //If statement that checks if the game is complete... i.e. correctAnswer is more then available.
        var correctAnswer = levels[currentLevel].Answers[currentAnswer].Word;
        if (answer === correctAnswer) {
            currentAnswer++;
            score++;
            if (score === currentlevelLenghtt) {
                animate(progress);
                $('input[name=Word]').val('');
                $('#pointsinc').html(score);
                $('.mainImages').effect("explode", 500);
                $('#starsinc').html(starpoints);
                $('.mainImages').fadeIn(1000);
                $('#finish').html('Well done, you have completed level!' + ' ' + Levelcomplete + '.' + 'Here is a gold star!');
                $('#imgLoad').html(star.image);
                $('.mainImages').fadeIn(1000);
                starpoints++;
                currentLevel++;
                
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
        return progresslength / currentlevelLenghtt;
    };

    //animates the progress icon to show progress of the level.
    var animate = function (progress) {
        $('#lightningimg').animate({ left: '+=' + progress() });
    };


        //loads next levelX
    $(document).ready(function () {
        $('#nextlevel').click(function () {
            currentLevel++
            currentAnswer = 0;
            level++;
            $('#finish').fadeOut(1000);
            $('#imgLoad').fadeOut(1000);
            $('span').html(' ' + level);
            $('input[name=Word]').val('');
            //$('#lightningimg').animate({ left: '-=' + progresslength + 'px' });
            $('#imgLoad').html(levels[currentLevel].Answers[currentAnswer].imgref);
        });
    });
 