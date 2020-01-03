/**
 * Create the following variables
 * wins, losses ✅
 * 
 * displaying underscores:
 *      create an array of words to guess from ✅
 *      display a word at a time with underscores to show the character count ✅
 */

$(function () {
    var losses = 0;
    var wins = 0;
    var tries = 10; 

    $('#wins').append(wins);
    $('#losses').append(losses);
    $('#tries').append(tries);

    var words = ['milk', 'drink', 'butter', 'fish', 'meal', 'cereal', 'health food', 'wheat', 'protein', 'dairy'];

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
        for (var i = 0; i < wrd.length; i++) {
            underscores.push('_')
        }
        underscores = underscores.join(" ");
        // displays the initial word for the user to guess
        $('#word').text(underscores);
    }

    // displays the current word needed to be guessed
    displayWord(current_word);

    $(document).on('keyup', function(e){
        var letter = e.originalEvent.key;
        console.log(letter);
    })




    console.log('current_word: ', current_word);
});