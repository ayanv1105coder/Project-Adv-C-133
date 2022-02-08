Status = "";
light_image = "";

function preload() {
    light_image = loadImage("light.jpg");
}

function setup() {
    canvas = createCanvas(640, 350);
    canvas.position(315, 200);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Objects Detected"; 
}

function modelLoaded() {
    console.log("Model Loaded!");
    detected = true;
    objectDetector.detect(light_image, gotResult)
}

function gotResult (error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(light_image, 0, 0, 640, 420);

    stroke("red");
    rect(200, 50, 180, 200);
    noFill();
    text('traffic light', 210, 65);
}
