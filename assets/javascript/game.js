/**
 * Create the following variables
 * wins, losses ✅
 * 
 * displaying underscores:
 *      create an array of words to guess from ✅
 *      display a word at a time with underscores to show the character count
 */

$(function(){
    var losses = 0;
    var wins = 0; 

    $('#wins').append(wins);
    $('#losses').append(losses);

    var words = ['milk', 'drink', 'butter', 'fish', 'meal', 'cereal', 'health food', 'wheat', 'protein', 'dairy'];
    
    // Two options to select a word from the list
    // Select it from same the order shown in the array - SELECTED THIS OPTION
    // OR, randomly selecting words from the array without duplicating a word already selected. 

    var current_word_index = 0;
    var current_word = words[current_word_index];

    console.log('current_word: ', current_word)


});