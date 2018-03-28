var replaceStream = require( 'replacestream' );
var path = require( 'path' );
var fs = require( 'fs' );
var sourceFolder = path.join( __dirname, '..', 'build' );
var sourceFile = path.join( sourceFolder, 'index.html' );
var matches;

matches = [
    {
        'searchFor': 'href="../node_modules/bootstrap/dist/css/bootstrap.min.css"',
        'replaceBy': 'href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"'
    },
    {
        'searchFor': 'href="https://use.fontawesome.com/releases/v5.0.6/css/all.css"',
        'replaceBy': 'href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"'
    },
    {
        'searchFor': 'src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"',
        'replaceBy': 'src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"'
    },
    {
        'searchFor': 'src="../node_modules/jquery/dist/jquery.min.js"',
        'replaceBy': 'src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"'
    },
    {
        'searchFor': 'src="../node_modules/popper.js/dist/umd/popper.min.js"',
        'replaceBy': 'src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"'
    },
    {
        'searchFor': 'src="../node_modules/bootstrap/dist/js/bootstrap.min.js"',
        'replaceBy': 'src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"'
    }
];

fs.readdirSync( sourceFolder ).forEach( forEachFile );

return true;

function forEachFile ( fileName ) {
    if ( path.extname( fileName ) !== '.html' ) {
        return false;
    }

    return searchReplaceFile( fileName );
}

function searchReplaceFile ( fileName ) {
    var filePath = path.join( sourceFolder, fileName );
    var file = fs.createReadStream( filePath, 'utf8' );
    var content = '';

    file.on( 'data', onData );
    file.on( 'end', onEnd );

    return true;

    function onData ( chunk ) {
        matches.forEach( ( match ) => {
            content = chunk.toString().replace( match.searchFor, match.replaceBy );
        });

        return chunk;
    }

    function onEnd () {
        fs.writeFile( filePath, content, onWriteFile );
    }

    function onWriteFile ( err ) {
        if ( err ) {
            return console.log( err );
        }

        console.log( 'Updated', filePath );

        return err;
    }
} 