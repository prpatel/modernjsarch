var buffer = '';
var data = eventsSrc;

function changeDataElement(newVal) {
    var el = document.getElementById('data');
    var p = document.createElement("p");
    p.innerHTML = newVal;
    el.appendChild(p);
}

function createNewEntry(e) {
  console.log('appending to DOM');
  var newDataAppend = "<h3>" + e.title + "</h3>";
  newDataAppend += "<p>";
  newDataAppend += e.persons[0].full_public_name;
  newDataAppend += "</p>";
  changeDataElement(newDataAppend);
}

function cfpData() {
//  console.log('speaker count:' + file.speakers.speakers.length)
  //console.log('session count:' + data.events.length)
  _.each(data.events, function(e) {
      // console.log('"' + e.title + '" by ' + e.persons[0].full_public_name);
      createNewEntry(e);
  });
}


window.onload = function() {
  cfpData();
  console.log('settings interval');
  setInterval(function() {
    // console.log('firing interval');
    // _.random(data.events, function(e) {
    //     console.log('"' + e.title + '" by ' + e.persons[0].full_public_name);
    //     createNewEntry(e);
    // })
    var random = _.random(0,data.events.length);
    createNewEntry(data.events[]);
  }, 100);
};
