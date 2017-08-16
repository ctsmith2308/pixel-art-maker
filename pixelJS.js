document.addEventListener('DOMContentLoaded', function addPixels() {
  createPixels()
  createColors(colorArr, 'paletteContainer')
  createColors(colorArr2, 'secondPaletteContainer')
  colorClicker();
  // colorClicker2();
})
var colorArr = [
  '#0000e6', '#0000cc', '#0000b3',
  '#4d0099', '#5900b3', '#6600cc',
  '#b30000', '#cc0000', '#e60000',
  '#4d2600', '#663300', '#804000',
  '#e68a00', '#cc7a00', '#b36b00',
  '#e6e600', '#ffff33', '#ffff99'
];

var colorArr2 = [
  '#009900', '#008000', '#006600',
  '#99004d', '#b30059', '#cc0066',
  '#00ffcc', '#00e6b8', '#00cca3',
  '#ffccff', '#ff99ff', '#ff66ff',
  '#75a3a3', '#669999', '#527a7a',
  '#b3b3b3', '#8c8c8c', '#666666'
];

function createPixels() {
  for (var i = 0; i < 3906; i++) {
    var div = document.createElement('div');
    div.className = ('pixels');
    var getContainer = document.getElementById('pixelContainer');
    getContainer.append(div);
  }
}

function createColors(arr, id) {
  var getPalette = document.getElementById(id);
  for (var i = 0; i < colorArr.length; i++) {
    var currentColor = arr[i]; // red
    var div = document.createElement('div');
    if (id === 'secondPaletteContainer') {
      div.className = 'colors2';
      div.style.backgroundColor = currentColor;
      getPalette.append(div);
    } else {
      div.className = 'colors';
      div.style.backgroundColor = currentColor;
      getPalette.append(div);
    }
  }
}

function colorClicker() {
  var grabPixelContainer = document.querySelector('#pixelContainer');
  var grabPalette = document.querySelector('#paletteContainer');
  var grabSecondPalette = document.querySelector('#secondPaletteContainer');
  var currentColorBox = document.querySelector('#currentColor');
  var border = document.querySelector('#pixelContainer');
  var color = '';
  var brushState = true;


  var currentColor = function() {
    color = event.target.style.backgroundColor;
    currentColorBox.style.backgroundColor = color;
    border.style.backgroundColor = color;

  }

  var setColor = function() {
    event.target.style.backgroundColor = color;
    event.target.style.borderColor = color;
  }

  var paintBrush = function() {
    if (brushState) {
      grabPixelContainer.addEventListener('mouseover', setColor);
      brushState = false;
    } else {
      grabPixelContainer.removeEventListener('mouseover', setColor);
      brushState = true;
    }
  }

  function reset(event) {
    grabPixelContainer.style.backgroundColor = 'white';
    // color = "white";
  }

  grabPalette.addEventListener('click', currentColor);
  grabSecondPalette.addEventListener('click', currentColor);
  grabPixelContainer.addEventListener('click', paintBrush);
  button.addEventListener('click',reset);
}
