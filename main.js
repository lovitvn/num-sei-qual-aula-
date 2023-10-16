song=""
function preload() {
    song=loadSound("pigstep.mp3")
}
scoreRight = 0
scoreLeft = 0
rightX = 0
rightY = 0
leftX = 0
leftY = 0
function setup(){
    canvas = createCanvas(611,488)
    canvas.center()
        video = createCapture(VIDEO)
        video.hide()
        poseNet = ml5.poseNet(video,modelLoaded)
        poseNet.on("pose",gotPoses)
    }
    function modelLoaded(){
        console.log("oobjeto de exemplo para ser seguido foi tranferido para esse software com exito.")
    }
    function gotPoses(results){
        if (results.length>0) {
            scoreRight = results[0].pose.keypoints[10].score;
            scoreLeft = results[0].pose.keypoints[9].score;  
            rightX = results[0].pose.rightWrist.x;    
            rightY = results[0].pose.rightWrist.y;  
            leftX = results[0].pose.leftWrist.x;   
            leftY = results[0].pose.leftWrist.y;          
        }
    }
    function draw(){
        image(video,0,0,611,488)
    }