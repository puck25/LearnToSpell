
    
    //loads a gold star image when ever called
    var star = {image:'<img class="mainImages" src="/images/star.png" alt="Cat" height="148" width="148">'}

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
                $('.mainImages').effect("explode", 500);
                $('#starinc').html(starpoints);
                $('.mainImages').fadeIn(1000);
                $('#points').html(score);
                $('#finish').html('Well done, you have completed level!' + ' ' + Levelcomplete + '.' + 'Here is a gold star!');
                $('#imgload').effect("bounce", 1000, function () {
                    $('#imgLoad').html(star.image);
                });
                $('.mainImages').fadeIn(1000);
                starpoints++;
                currentLevel++;
                nextLevel;
            }
            else {
                var pic = levels[currentLevel].Answers[currentAnswer].imgref;
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

    //function that loads next level
    var nextLevel = function () { 
        $('#nextlevel').click(function(){
            $('#finish').fadeOut(1000);
            $('#star').fadeOut(1000);
            currentlevel++;
            $('span').html(' ' + level);
            $('#lightningimg').animate({ left: '-=' + progresslength + 'px' });
        });
    
    };