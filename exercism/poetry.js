//Get the first letter of a sentence

let a = 'Stands so high';
let b = 'Huge hooves too';
let c = 'Impatiently waits for';
let d = 'Reins and harness';
let e = 'Eager to leave';

let frontDoorPassword = [a[0], b[0], c[0], d[0], e[0]].join(''); // First character
let backDoorResponse = a.charAt(a.length - 1) + b.charAt(b.length - 1) + c.charAt(c.length - 1) + d.charAt(d.length - 1) + e.charAt(e.length - 1);
// Capitalize a word

console.log(frontDoorPassword.toUpperCase());
console.log(backDoorResponse.trim().toUpperCase() + ' Please');