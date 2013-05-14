//declare variables
var levelAnswers = ["cat", "dog", "rat"];
var i = (0);
var level = (1);
var score = (1);
var pic = ('#' + levelAnswers[i]);
var starpoints = (1);
var progresslength = $('#progressbar').width();


//makes instructions disapear
$(document).ready(function () {
    $('#instructionsButton').click(function () {
        $('#instructions').slideUp('600', function () {
           $('#result').html('Click Play to begin!');
        });
    });
});


//shows controls for start of game
$(document).ready(function () {
    $('#play').click(function () {
        $('#result').fadeOut(1000);
        $('span').html(' ' + level);
        $('#progressbar').fadeIn('slow');
        $(pic).fadeIn('slow');
        $('form').fadeIn('slow');
        $('span').fadeIn('slow');
        $('#lightning').fadeIn('slow');
    });
});



//checks if word typed matches the answer in game
$(document).ready(function () {
    $('#clickme').click(function () {
        var answer = $('input[name=Word]').val();
        if (answer == levelAnswers[i]) {
            $(pic).effect("explode", 500);
            $('#result').html("WOW! You are right, great work!");
            $('#result').fadeIn(1000);
            $('#points').html(score);
            i++;
            animate(progress);
            $('input[name=Word]').val('');
            pic = '#' + levelAnswers[i];
            $(pic).fadeIn(1000);
            score++;
            if (i >= 3) {
                $('#result').html("Well done, you have completed the first level! Here is a gold star!");
                $('#star').fadeIn(1000);
                $('#starpoints').html(starpoints);
                starpoints++;
            }
            else {

            };
        }
        else {
            $('#result').html("Oops, try again!");
            $('#result').fadeOut(3000);
        }
    });
});

//loads next level
$(document).ready(function () {
    $('#nextlevel').click(function () {
        $('#result').fadeOut(1000);
        $('#star').fadeOut(1000);
        level++;
        $('span').html(' ' + level);
        $('#lightningimg').animate({left:'-='+progresslength+'px'});
    });
});


//works out the length of the progressbar and diveds the value by the amount of questions in the level
var progress = function () {
    return progresslength / levelAnswers.length;
};

//animates the progress icon to show progress of the level.
var animate = function (progress) {
    $('#lightningimg').animate({left:'+='+progress(progresslength)});
};