// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
  var translate = function(word) {
$(".btn btn-primary").click (function(){
	var word= $(".btn btn-primary").val()
    var array = word.split('');
    var vowels = ['a','e','i','o','u'];
    var newWord = '';
    for(var i = 0; i < word.length-1; i++) {
        for(var y = 0; y < word.length-1; y++) {
            if(word[y] === vowels[i]) {
                for(var x = y; x < word.length; x++){
                    newWord = newWord + word[x];
                }
                for(var n = 0; n < y; n++){ 
                    newWord = newWord + word[n];
                }
                return newWord + "ay";
                
            }       
        }
    }
});

function sentenceToPigLatin(word){
     var vowels = ['a','e','i','o','u'];
     var firstLetter= word.charAt(0);
	 if(vowels.includes(firstLetter)){
	   for(var i = 0; i < word.length; i = i + 1){
	   return word + "ay";
}
}
}

$("#input").click (function(){
	var word= $(".btn btn-primary").val()
	console.log(word);
	var saved = sentenceToPigLatin(word);
	$('body').append(saved);
});