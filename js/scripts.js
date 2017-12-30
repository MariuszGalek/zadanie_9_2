// scripts.js

var femaleNames = ['Anna', 'Alicja', 'Amanda', 'Amelia'];
var maleNames = ['Adam', 'Antek', 'Albert', 'Andrzej'];
var allNames = femaleNames.concat(maleNames);
console.log(allNames);

var newName = 'Amanda';
if (allNames.indexOf(newName) === -1) {
		var x = allNames.push(newName);
}
console.log(allNames);

var newName = 'Aurelia';
if (allNames.indexOf(newName) === -1) {
		var x = allNames.push(newName);
}
console.log(allNames);