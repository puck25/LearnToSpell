$(document).ready(function () {



    //level answers and ImgRef
    var level1 = new Object();
    level1.answers1 = 'cat';
    level1.answers2 = 'dog';
    level1.answers3 = 'rat';
    level1.ImgRef = ["/imganswers/cat.jpg", "/imganswers/dog.jpg", "/imganswers/rat.jpg"]

    //declare variables
    var variables = new Object();
    variables.levelmove = (0);
    variables.answermove = (0);
    variables.answerid = (1);
    variables.move = (0);
    variables.objecttype = (0);
    variables.currentlevel = ['level1', 'level2', 'level2'];
    variables.object = ['.answers', '.ImgRef'];
    variables.total = variables.currentlevel[variables.levelmove] + variables.object[variables.objecttype] + variables.answerid;
    //variables.levelAnswers = ["cat", "dog", "rat"];
    variables.i = (0);
    variables.level = (1);
    variables.score = (1);
    variables.pic = ('#' + variables.currentlevel[variables.i]);
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
            $('#result').fadeOut(1000);
            $('span').html(' ' + variables.level);
            $('#progressbar').fadeIn('slow');
            $(variables.pic).fadeIn('slow');
            $('form').fadeIn('slow');
            $('span').fadeIn('slow');
            $('#lightning').fadeIn('slow');
        });
    });

    var answeroutput = function () {
        return variables.total;
    }


    //checks if word typed matches the answer in game
    $(document).ready(function () {
        $('#clickme').click(function () {
            var answer = $('input[name=Word]').val();
            if (answer == variables.total) {
                $(variables.pic).effect("explode", 500);
                $('#result').html("WOW! You are right, great work!");
                $('#result').fadeIn(1000);
                $('#points').html(variables.score);
                variables.i++;
                variables.answerid++;
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
                    variables.levelmove++;
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
            $('#lightningimg').animate({ left: '-=' + variables.progresslength + 'px' });
        });
    });


    //works out the length of the progressbar and divs the value by the amount of questions in the level
    var progress = function () {
        return variables.progresslength / variables.levelAnswers.length;
    };

    //animates the progress icon to show progress of the level.
    var animate = function (progress) {
        $('#lightningimg').animate({ left: '+=' + progress(variables.progresslength) });
    };

});