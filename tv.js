Status = "";
tv_image = "";

function preload() {
    tv_image = loadImage("tv.jpg");
}

function setup() {
    canvas = createCanvas(640, 350);
    canvas.position(315, 200);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Objects Detected!";
}

function modelLoaded() {
    console.log("Model Loaded!");
    detected = true;
    objectDetector.detect(tv_image, gotResult);
}

function gotResult (error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(tv_image, 0, 0, 640, 420);

    stroke("red");
    rect(200, 50, 250, 100);
    noFill();
    text('tv', 210, 65);

    stroke("red");
    rect(30, 150, 100, 100);
    noFill();
    text('potted plant', 40, 165);
    
    stroke("red");
    rect(300, 240, 150, 100);
    noFill();
    text('bench', 310, 255);
}
