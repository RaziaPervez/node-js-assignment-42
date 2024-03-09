//project=42
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s 
//name. Call show_magicians() to see that the list has actually been modified
function showMagicians(magicians) {
    // Print the list of magicians
    magicians.forEach(function (magician) { return console.log(magician); });
}
function makeGreat(magicians) {
    // Add 'the Great' to each magician's name
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] += " the Great";
    }
}
// Original list of magicians
var magicians = ["razia", "hanza", "isha"];
console.log("Original list of magicians:");
showMagicians(magicians);
// Add 'the Great' to each magician's name
makeGreat(magicians);
console.log("\nModified list of magicians:");
showMagicians(magicians);
