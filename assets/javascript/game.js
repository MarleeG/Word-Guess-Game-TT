/**
 * Create the following variables
 * wins, losses ✅
 * 
 * displaying underscores:
 *      create an array of words to guess from ✅
 *      display a word at a time with underscores to show the character count ✅
 */
const log = console.log;

$(function () {
    var losses = 0;
    var wins = 0;
    var tries = 2;

    $('#wins').append(wins);
    $('#losses').append(losses);
    $('#tries').append(tries);
    $("#game-alert").hide();

    var words = ['lilk', 'drink', 'butter', 'fish', 'meal', 'cereal', 'healthy', 'wheat', 'protein', 'dairy'];

    // Two options to select a word from the list
    // Select it from same the order shown in the array - SELECTED THIS OPTION 
    // OR, randomly selecting words from the array without duplicating a word already selected. 

    // the index of the word will be stored in current_word_index
    var current_word_index = 0;
    // the current word will be store in the curren_word variable
    var current_word = words[current_word_index];

    // this will hold the total number of underscores needed
    // to display for the current word
    var underscores = [];


    // this function will display the underscores totalling the 
    // length of the characters in the word
    function displayWord(wrd) {
        underscores = [];
        for (var i = 0; i < wrd.length; i++) {
            underscores.push('_');
        }
        underscores = underscores.join(" ");
        // displays the initial word for the user to guess
        $('#word').text(underscores);
    }

    // displays the current word needed to be guessed
    displayWord(current_word);

    // Event listener that will listen for the user key values 
    // on keyup
    $(document).on('keyup', function (e) {
        var letter = e.originalEvent.key;

        // Checks if any letters in the current_word matches 
        // what the user just selected on keyup. 
        checkLetter(letter);
    });


    // Create a function that checks if any letter the user has selected
    // matches the ones from the current word
    // Updates the scores
    function checkLetter(ltr) {
        //this will store all the indices that match 
        // what the user has guessed   
        var matching_index = [];

        for (var i = 0; i < current_word.length; i++) {
            // if the user's letter matches any index of the current word
            // store this index inside of the matching_index array
            if (ltr == current_word[i]) {
                matching_index.push(i);
            }
        }


        log(`matching_index.length > 0 :: ${matching_index.length > 0}`);
        // display any matching letters 
        if (matching_index.length > 0) {
            // underscores is a string so in order to apply some methods 
            // that can be applied only to an array converted it into an array using split() method
            // underscores = [...underscores];
            underscores = underscores.split(" ");

            for (var x = 0; x < matching_index.length; x++) {
                // this holds the value of which index needs to display to the user
                var changing_index = matching_index[x];

                // this will assign the index needed to be displayed with the letter
                // the user has keyed
                underscores[changing_index] = ltr;
            }

            underscores = underscores.join(" ");
            $('#word').text(underscores);
        } else {
            // no matching letters were found
            // decrease tries by 1
            tries--;

            // displays remaining tries left
            $('#tries').text('Tries: ' + tries);

            // when tries are equal to 0 increase losses by 1 ✅
            // 
            if (tries === 0) {
                // $("#game-alert").show();

                // Increases total number of losses
                losses++;

                // displays the updated losses
                $("span#losses").text('Losses: ' + losses);

                // Go to next word and display it to the user

                // go to the next word/index in the array
                current_word_index++;
                if(current_word_index === 10){
                    alert('All words shown. Stop Game')
                }

                // the current word will be store in the curren_word variable
                current_word = words[current_word_index];

                // displays the next word
                displayWord(current_word);

                // resets the number of tries back to 10
                tries = 10;
                $('#tries').text('Tries: ' + tries);


            }


        }

    }





    console.log('current_word: ', current_word);
});