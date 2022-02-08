Status = "";
keys_image = "";

function preload() {
    keys_image = loadImage("sissors.jpg");
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
    objectDetector.detect(keys_image, gotResult)
}

function gotResult (error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(keys_image, 0, 0, 640, 420);

    stroke("red");
    rect(200, 50, 250, 280);
    noFill();
    text('scissors', 210, 65);
}
