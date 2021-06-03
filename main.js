function preload()
{

}

function setup()
{
canvas = createCanvas(500,420);
canvas.position(550,150);
video=createCapture(VIDEO);
video.size(480,490);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}

function draw()
{
background("#FF8787");
document.getElementById("squareSide").innerHTML="Width and Height of the Square is : "+Difference+"px";
fill("#1589e8");
stroke("#e82015");
square(NoseX,NoseY,Difference);
}

function modelLoaded()
{
    console.log("poseNet is initialized!");
}

function gotPoses(results)
{
    if(results.length>0){
        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        console.log("NoseX= "+NoseX+"NoseY= "+NoseY);
        RightWristX = results[0].pose.rightWrist.x;
        LeftWristX = results[0].pose.leftWrist.x;
        Difference = floor(LeftWristX - RightWristX);

        console.log("RightWristX= "+RightWristX+"LeftWristX = "+LeftWristX+"Difference = "+Difference);
    }

}

var NoseX = 0;
var NoseY = 0;
var Difference = 0;
var RightWristX = 0;
var LeftWristX = 0;


