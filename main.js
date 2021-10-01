var SpeechRecognition = window.webkitSpeechRecognition; ///API
var recognition = new SpeechRecognition();
 
function start(){
document.getElementById("textbox").innerHTML = ""; 
recognition.start();
} 
 
recognition.onresult = function(event) {
console.log(event); 
var Content = event.results[0][0].transcript;
document.getElementById("textbox").innerHTML = Content;
console.log(Content);
if(Content =="take my selfie"){
console.log("taking selfie --- ");
speak();
}
}
 
 
 
//class 99
//text into speech
function speak(){
var synth = window.speechSynthesis;//different API to convert the text to speech
speak_data = "Taking your Selfie in 5 seconds"; //if the text from the text area from HTML
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);//add the speak function above
 
 
 
Webcam.attach(camera);//add the webcam link in HTTML head
setTimeout(function()
{ 
take_snapshot(); 
save();
    }, 5000);
}
 
 
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});
 
 
 

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("selfie").innerHTML='<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}