//project=42
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s 
//name. Call show_magicians() to see that the list has actually been modified

function showMagicians(magicians: string[]): void {
    // Print the list of magicians
    magicians.forEach(magician => console.log(magician));
}

function makeGreat(magicians: string[]): void {
    // Add 'the Great' to each magician's name
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] += " the Great";
    }
}

// Original list of magicians

const magicians: string[] = ["razia","hanza","isha"];
console.log("Original list of magicians:");
showMagicians(magicians);

// Add 'the Great' to each magician's name
makeGreat(magicians);
console.log("\nModified list of magicians:");
showMagicians(magicians);

