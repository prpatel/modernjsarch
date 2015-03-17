//lab02.js
var y = 'green';
_.each(_.range(1,10), function(x) {
   console.log(x);
});


function changeDataElement(newVal) {
    var el = document.getElementById('data');
    el.innerHTML = newVal
}

setInterval(function() {
    changeDataElement(y);
}, 1000)

y = 'green';
//y = 'purple';
