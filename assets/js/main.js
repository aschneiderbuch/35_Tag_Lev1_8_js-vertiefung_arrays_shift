console.log("test");

let obst = ["Apfel", "Birne"];

const deutscheGerichte = ["Speckkuchen", "1Thüringer Rostbratwurst", "Quarkkeulchen", "Sauerbraten"];
deutscheGerichte.unshift("Pizza", "Nudeln", "Salat", obst, )


// shift am     Anfang    entfernen
deutscheGerichte.shift(0);

// sortieren  0-... a-z   zahlen kommen vor Buchstaben
deutscheGerichte.sort();

// rückwärts sortieren z-a ... -0  zahlen kommen rückwärts vor Buchstaben
 deutscheGerichte.reverse();

deutscheGerichte.sort();

console.log(deutscheGerichte.indexOf("Nudeln")); // 2
deutscheGerichte.splice(2, 1);     // Nudeln entfernen
console.log(deutscheGerichte.indexOf("Salat")); // 3
deutscheGerichte.splice(3, 1);     // Salat entfernen

const nichtGut = deutscheGerichte

console.log(nichtGut);
console.table(nichtGut);


console.log(deutscheGerichte);
console.table(deutscheGerichte);