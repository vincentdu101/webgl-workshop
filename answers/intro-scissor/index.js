exports.init = function(gl) {
}

// Run every frame: use this to draw things to the screen.
exports.draw = function(gl) {

  var w = gl.drawingBufferWidth
  var h = gl.drawingBufferHeight

  //Clear background to black
  gl.clearColor(0,0,0,1)
  gl.clear(gl.COLOR_BUFFER_BIT)

  //Turn on scissor test
  gl.enable(gl.SCISSOR_TEST)

  //Clip out region ordered by top-left, top-right, 
  cutScissor(0, h/2, w/2, h/2, gl, 1, 0, 0, 1);
  cutScissor(w/2, h/2, w/2, h/2, gl, 0, 1, 0, 1);
  cutScissor(w/2, 0, w/2, h/2, gl, 1, 1, 0, 1);
  cutScissor(0, 0, w/2, h/2, gl, 0, 0, 1, 1);
}

function cutScissor(x, y, width, height, gl, red, green, blue, alpha) {
      //Clip out region in center of screen 
  gl.scissor(x, y, width, height);

  //Clear to white
  gl.clearColor(red, green, blue, alpha);
  gl.clear(gl.COLOR_BUFFER_BIT);
}
