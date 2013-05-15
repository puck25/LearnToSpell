$(document).ready(function(){
    
//declare variables
var variables = new Object();
        variables.levelAnswers = ["cat", "dog", "rat"];
        variables.i = (0);
        variables.level = (1);
        variables.score = (1);
        variables.pic = ('#' + level1.answers[variables.i]);
        variables.starpoints = (1);
        variables.progresslength = $('#progressbar').width();

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
        $('#result').fadeOut(1000);9
        $('span').html(' ' + variables.level);
        $('#progressbar').fadeIn('slow');
        $(variables.pic).fadeIn('slow');
        $('form').fadeIn('slow');
        $('span').fadeIn('slow');
        $('#lightning').fadeIn('slow');
    });
});



//checks if word typed matches the answer in game
$(document).ready(function () {
    $('#clickme').click(function () {
        var answer = $('input[name=Word]').val();
        if (answer == variables.levelAnswers[variables.i]) {
            $(variables.pic).effect("explode", 500);
            $('#result').html("WOW! You are right, great work!");
            $('#result').fadeIn(1000);
            $('#points').html(variables.score);
            variables.i++;
            animate(progress);
            $('input[name=Word]').val('');
            variables.pic = '#' + variables.levelAnswers[variables.i];
            $(variables.pic).fadeIn(1000);
            variables.score++;
            if (variables.i >= 3) {
                $('#result').html("Well done, you have completed the first level! Here is a gold star!");
                $('#star').fadeIn(1000);
                $('#starpoints').html(variables.starpoints);
                variables.starpoints++;
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

//loads next levelX
$(document).ready(function () {
    $('#nextlevel').click(function () {
        $('#result').fadeOut(1000);
        $('#star').fadeOut(1000);
        variables.level++;
        $('span').html(' ' + variables.level);
        $('#lightningimg').animate({left:'-='+variables.progresslength+'px'});
    });
});


//works out the length of the progressbar and divs the value by the amount of questions in the level
var progress = function () {
    return variables.progresslength / variables.levelAnswers.length;
};

//animates the progress icon to show progress of the level.
var animate = function (progress) {
    $('#lightningimg').animate({left:'+='+progress(variables.progresslength)});
};

});