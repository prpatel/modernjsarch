var mu = require('mu2'),
fs     = require('fs'),
_ = require('underscore');

function jsonEscape(str)  {
    return str.replace(/\n/g, "").replace(/\r/g, "").replace(/\t/g, "");
}

function esc (key, val) {
  console.log('encountered string')
    if (typeof(val)!="string") return val;

    return jsonEscape(val);
}

var buffer = '';
var file = fs.readFileSync("data/events.json", "utf8");
file = (JSON.parse(jsonEscape(file)));

function cfpData() {
//  console.log('speaker count:' + file.speakers.speakers.length)
  console.log('session count:' + file.events.length)
  _.each(file.events, function(e) {

      console.log('"' + e.title + '" by ' + e.persons[0].full_public_name)    

  });


}

cfpData();
return;

mu.compileAndRender('templates/speakerpromo.html', file)
    .on('data', function (c) {
      buffer += c.toString();
      })
    .on('end', function () {
      console.log(buffer);
    });
