Status = "";
cup_image = "";

function preload() {
    cup_image = loadImage("cup.jpg");
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
    objectDetector.detect(cup_image, gotResult)
}

function gotResult (error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(cup_image, 0, 0, 640, 420);

    stroke("red");
    rect(30, 50, 300, 200);
    noFill();
    text('laptop', 40, 65);
    
    stroke("red");
    rect(300, 240, 200, 100);
    noFill();
    text('cup', 310, 255);
}
