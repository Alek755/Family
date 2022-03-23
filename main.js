Webcam.set({
    width: 500,
    height: 400,
    image_format: "png",
    png_quality: 90

})

Photo_Taker = document.getElementById("Camera");

Webcam.attach("#Camera");

function Capture_Image() {
    Webcam.snap(function(data_uri){
        document.getElementById("Result").innerHTML = "<img id='Result__Img' src="+data_uri+">";
        
    }) 
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5imweShIj/model.json", modelLoaded);
function modelLoaded() {
    console.log ("Model is Loaded");

}

console.log("ml5version", ml5.version);