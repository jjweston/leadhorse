// fakeword - Create fake words by combining two randomly-selected words.
// Copyright (C) 2017 Jeffrey J. Weston

var fs = require( "fs" );

var wordCount = 10;
var words = JSON.parse( fs.readFileSync( "words.json" ));

for ( var i = 0; i < wordCount; i++ )
{
    generateWord( words );
}

function generateWord( words )
{
    var word1 = Math.floor( Math.random() * words.length );
    var word2 = Math.floor( Math.random() * words.length );

    console.log( words[ word1 ] + words[ word2 ] );
}
