// fakeword - Create fake words by combining two randomly-selected words.
// Copyright (C) 2017 Jeffrey J. Weston

var fs = require( "fs" );

var words = JSON.parse( fs.readFileSync( "words.json" ));

console.log( "Hello world!" );
console.log();

for ( var i = 0; i < words.length; i++ )
{
    console.log( words[ i ] );
}

console.log();

var word1 = Math.floor( Math.random() * words.length );
var word2 = Math.floor( Math.random() * words.length );

console.log( word1 );
console.log( word2 );
console.log();

console.log( words[ word1 ] + words[ word2 ] );
