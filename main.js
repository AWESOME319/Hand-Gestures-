Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera")
Webcam.attach('#camera');
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captures_image" src="'+data_uri+'"/>'
    });
}
console.log('ml5 version:',ml5.version)
classifier=ml5.imageClassifier('hhttps://teachablemachine.withgoogle.com/models/H6itz1z1E/model.json',modelLoaded);
function modelLoaded(){
    console.log('Model Loaded')
}
function check(){
    img=document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML=results[0].label;
        document.getElementById("result_emotion_name2").innerHTML=results[1].label;
        prediction_1= results[0].label;
        prediction_2=results[1].label;
        speak();
        if(results[0].label=="Wave"){
            document.getElementById("update_emoji").innerHTML="&#128075";
 }
       if(results[0].label=="Super"){
        document.getElementById("update_emoji").innerHTMl="#128076";
       }
       if(results[0].label=="Good"){
        document.getElementById("update_emoji").innerHTMl="&#128077";
       }
       if(results[1].label=="Bad"){
        document.getElementById("update_emoji").innerHTMl="&#128078";
       }
       if(results[1].label=="Congratulations"){
        document.getElementById("update_emoji").innerHTMl="&#128079";
       }
       if(results[1].label=="Cool"){
        document.getElementById("update_emoji").innerHTMl="&#129304";
       }
       if(results[1].label=="Peace"){
        document.getElementById("update_emoji").innerHTMl="&#9996";
       }

    }
}
