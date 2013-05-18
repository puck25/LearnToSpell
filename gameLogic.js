
    
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
            $('#instructions').slideUp(600, function () {
                $('#result').fadeIn(1000, function () {
                    $('#result').html('Click play to begin!');
                });
            });
        });
    });

    //code the loads the play command
    $(document).ready(function () {
        $('#play').click(function () {
            $('#result').fadeOut(1000);
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
                $('#imgLoad').html(pic);
                $('.mainImages').fadeIn(1000);
                $('#points').html(score);
                $('#result').html('Well done, you have completed level!' + ' ' + Levelcomplete + '.' + 'Here is a gold star!');
                $('#starpoints').html(starpoints);
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
                $('#result').fadeIn(1000);
                $('#result').html("WOW! You are right, great work!");
                $('#points').html(score);
                animate(progress);
                $('#imgLoad').html(pic);
                $('.mainImages').fadeIn(1000);
            };

        }
        else {
            $('#result').html("Oops, try again!");
            $('#result').fadeOut(3000);
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
            $('#result').fadeOut(1000);
            $('#star').fadeOut(1000);
            currentlevel++;
            $('span').html(' ' + level);
            $('#lightningimg').animate({ left: '-=' + progresslength + 'px' });
        });
    
    };