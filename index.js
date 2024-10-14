// Bartłomiej Brzoza 20434

/* zad1
 const wait = 3000;
console.log("Początek skryptu...");
setTimeout(function(){
 console.log("Upłynęły minimum 3 sek...")
}, wait);
console.log("koniec skryptu...");
*/

/* zad2 cz1
const fs = require("fs");
const data = fs.readFileSync('package.json');
console.log("Początek skryptu.");
console.log(data.toString());
console.log("Koniec skryptu.");
*/

/* zad2 cz2
const fs = require("fs");
console.log("Początek skryptu.");
fs.readFile('package.json', function (err, data) {
 if (err) return console.error(err);
 console.log(data.toString());
});
console.log("Koniec skryptu.");
*/

/* zad3
const http = require('http');
const hostname = '127.0.0.1';
const port = 8888;
const server = http.createServer(function(request, response) {
 response.statusCode = 200;
 response.setHeader('Content-Type', 'text/plain');
 response.end('Witaj, z serwera node.js !\n');

});
server.listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`);
});
*/

//zad 4 import (wyjaśnienie na dole)
const uniqueSlug = require('unique-slug')
const http = require('http');
const path = require("path");
const util = require("util");
const v8 = require("v8");
const hostname = '127.0.0.1';
const port = 8888;
const server = http.createServer((request, response) => {
 response.statusCode = 200;
 response.setHeader('Content-Type', 'text/plain');
 response.end('Hello, from node.js serwer !\n');

});
server.listen(port, hostname, () => {
 util.log(v8.getHeapStatistics());
 console.log(path.basename(__filename));
 util.log(path.join(__dirname, 'uploads','images'));
 console.log(`Server running at http://${hostname}:${port}/`);
 console.log(uniqueSlug());
});

/*
 zad 4 unique-slug (Wygenerowuje unikalny ciąg znaków odpowiedni do użycia w plikach i adresach URL.)
 https://www.npmjs.com/package/unique-slug
 uniqueSlug(str) → String (8 chars)
 Jeśli zostanie przekazany string, zwracaną wartością będzie murmur hash w formacie szesnastkowym.

 Jeśli string nie zostanie przekazany, będą to 4 losowo wygenerowane bajty przekonwertowane na 8 znaków szesnastkowych.

*/

