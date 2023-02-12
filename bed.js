img = "";
status = "";

function preload() {
    img = loadImage('20230207_164600.jpg');
   }

function setup() {
    canvas = createCanvas(640, 380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Dectecting Objects";
   }

   function modelLoaded() {
    console.log("Model is Loaded")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
      console.log(error);
    }
      console.log(results);
  }

function draw() {

}