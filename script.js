var slider = document.getElementById('speedSlider');
var currentSpeedDisplay = document.getElementById('currentSpeed');

slider.oninput = function() {
  currentSpeedDisplay.innerHTML = this.value;
  setSpeed(this.value);
};

function setSpeed(speed) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/setSpeed?speed=' + speed, true);
  xhr.send();
}
