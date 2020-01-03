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
    var tries = 10;

    $('#wins').append(wins);
    $('#losses').append(losses);
    $('#tries').append(tries);
    $("#game-alert").hide();

    var words = ['milk', 'drink', 'butter', 'fish', 'meal', 'cereal', 'healthy', 'wheat', 'protein', 'dairy'];
    var letters_keyed = [];
    var decereasing_tries = true;


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


    // create a function that will display the letters keyed ✅
    function updatedKeyedLetters(letter) {
        // if the letter the user has selected does not exist
        // in the letters_keyed array then push the value in the array

        if (letters_keyed.indexOf(letter) === -1) {
            $("#game-alert").hide();
            letters_keyed.push(letter);
            var keyed_letters_placeholder = letters_keyed;

            keyed_letters_placeholder.join(" ");
            $("#keyed-letters").text(keyed_letters_placeholder);
            decereasing_tries = true;
        } else {
            // the letter user has clicked on already exists
            // inform the user the letter has been selected already
            // do not take away any points
            $("#game-alert").show();
            updateAlert('#game-alert', 'alert-success', 'alert-warning', '#game-alert-message', `This letter has been keyed already. Please try another letter.`);

            decereasing_tries = false;
        }
    }

    // Event listener that will listen for the user key values 
    // on keyup
    $(document).on('keyup', function (e) {
        var letter = e.originalEvent.key;

        // Checks if any letters in the current_word matches 
        // what the user just selected on keyup. 
        checkLetter(letter);
    });

    function updateAlert(alert_id, remove_class, add_class, message_id, message) {
        $(alert_id).removeClass(remove_class);
        $(alert_id).addClass(add_class);
        $(message_id).text(message)
    }

    function nextWord() {
        // allow decreasing of the tries to take place
        decereasing_tries = true;

        // go to the next word/index in the array
        current_word_index++;
        if (current_word_index === 10) {
            alert('All words shown. Stop Game')
        }

        // this will clear the letters keyed
        letters_keyed = [];

        var keyed_letters_placeholder = letters_keyed;

        keyed_letters_placeholder.join(" ");
        $("#keyed-letters").text(keyed_letters_placeholder);



        // the current word will be store in the curren_word variable
        current_word = words[current_word_index];

        // displays the next word
        displayWord(current_word);
    }


    // Create a function that checks if any letter the user has selected
    // matches the ones from the current word
    // Updates the scores
    function checkLetter(ltr) {
        // update displayed letters
        updatedKeyedLetters(ltr);
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


        // display any matching letters 
        if (matching_index.length > 0) {
            // underscores is a string so in order to apply some methods 
            // that can be applied only to an array converted it into an array using split() method
            underscores = underscores.split(" ");

            for (var x = 0; x < matching_index.length; x++) {
                // this holds the value of which index needs to display to the user
                var changing_index = matching_index[x];

                // this will assign the index needed to be displayed with the letter
                // the user has keyed
                underscores[changing_index] = ltr;
            }

            // if there aren't any underscores remaining in the word displayed 
            // to the user then increase wins by 1 ✅
            // and go to next word
            if (underscores.indexOf("_") === -1) {
                wins++;
                $('#wins').text('Wins: ' + wins);

                // Let the user know they have guessed correctly
                $('#game-alert').show();
                updateAlert('#game-alert', 'alert-warning', 'alert-success', '#game-alert-message', `You've guessed the word correctly. \nThe word was: ${current_word}`);

                nextWord();


            } else {
                underscores = underscores.join(" ");
                $('#word').text(underscores);
            }





        } else {
            // no matching letters were found
            // decrease tries by 1 if decereasing_tries is true

            decereasing_tries ? tries-- : null;

            // displays remaining tries left
            $('#tries').text('Tries: ' + tries);

            // when tries are equal to 0 increase losses by 1 ✅
            if (tries === 0) {
                // $("#game-alert").show();

                // Increases total number of losses
                losses++;

                // show an alert message for what the word was
                // Let the user know they have guessed correctly
                $('#game-alert').show();
                updateAlert('#game-alert', 'alert-warning', 'alert-danger', '#game-alert-message', `The word was: ${current_word}`);

                updateAlert('#game-alert', 'alert-success', 'alert-danger', '#game-alert-message', `The word was: ${current_word}`);

                // displays the updated losses
                $("span#losses").text('Losses: ' + losses);

                // Go to next word and display it to the user
                nextWord();

                // resets the number of tries back to 10
                tries = 10;
                $('#tries').text('Tries: ' + tries);


            }


        }

    }





    console.log('current_word: ', current_word);
});