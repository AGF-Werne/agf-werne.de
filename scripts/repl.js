var replaceStream = require('replacestream');
var path = require('path');
var fs = require('fs');

var url = path.join(process.cwd(), 'build/index.html');
var dest = path.join(process.cwd(), 'build/output.html');
var stream = fs.createReadStream(url);

// stream
//     .pipe(replaceStream('../node_modules/', '...............CDN................'))
//     .pipe(fs.createWriteStream(dest));

var matches = [
    {
        'search': '../node_modules/bootstrap/dist/css/bootstrap.min.css',
        'replaceBy': '__hahahaha__'
    }
];

stream.pipe( replaceStream( matches[0].search, matches[0].replaceBy ) );

stream.pipe( fs.createWriteStream( dest ) );