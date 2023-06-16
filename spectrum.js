function Spectrum() {
  this.name = "spectrum";
  this.draw = function() {
    push();
    var spectrum = fourier.analyze();
    noStroke();

    for (var i = 0; i < spectrum.length; i++) {
      var x = map(spectrum[i], 0, 255, 0, width / 100);
      var w = map(spectrum[i], 0, 255, 0, width);
      var y = map(i, 0, spectrum.length, 0, height);
      var r = spectrum[i];
      var g = map(spectrum[i], 0, 255, 255, 0);
      var b = 0;
      fill(r, g, b);
      rect(x, y, w, height / spectrum.length);

      // for frame rate adjustment
      frameRate(i);
    }

    pop();
  };
}
