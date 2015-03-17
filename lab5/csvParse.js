var http = require('http'),
    fs = require('fs');

    fs.readFile('./data.csv', 'utf-8', function(err, data) {
        var responseData = {};

        var lines = data.split('\n');
        lines.forEach(function(line) {
            var parts = line.split(',');
            responseData[parts[0]] = parts[1];
        });
        console.log('Parsed data', JSON.stringify(responseData));

    });

console.log('finished parsing');
