document.addEventListener('DOMContentLoaded', function addDiv() {
  createPixels()
  createColors(colorArr)
  colorClicker();
})
var colorArr = [
  '#0000e6', '#0000cc', '#0000b3',
  '#6600cc', '#5900b3', '#4d0099',
  '#e60000', '#cc0000', '#b30000',
  '#000000'
];

function createPixels() {
  for (var i = 0; i < 3024; i++) {
    var div = document.createElement('div');
    div.className = ('pixels');
    var getContainer = document.getElementById('pixelContainer');
    getContainer.append(div);
  }
}

function createColors(arr) {
  for (var i = 0; i < colorArr.length; i++) {
    var currentColor = colorArr[i]; // red
    console.log('this is the current color = ' + currentColor)
    var div = document.createElement('div');
    div.className = 'colors';
    console.log('this is the class name = ' + div.className);
    div.style.backgroundColor = currentColor;
    var getPalette = document.getElementById('paletteContainer');
    getPalette.append(div);
  }
}

function colorClicker() {
  var grabPixelContainer = document.querySelector('#pixelContainer');
  var grabPalette = document.querySelector('#paletteContainer');
  var color = '';

  var currentColor = function() {
    color = event.target.style.backgroundColor;
  }
  var setColor = function() {
    event.target.style.backgroundColor = color;
    event.target.style.borderColor = color;
  }
  
  grabPalette.addEventListener('click', currentColor)
  grabPixelContainer.addEventListener('click', setColor);

}
