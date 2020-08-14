var programCode = function(processingInstance) {
    with (processingInstance) {
      size(400, 400); 
      frameRate(60);
      
      
    }};

  // Get the canvas that ProcessingJS will use
  var canvas = document.getElementById("mycanvas"); 
  // Pass the function to ProcessingJS constructor
  var processingInstance = new Processing(canvas, programCode); 
