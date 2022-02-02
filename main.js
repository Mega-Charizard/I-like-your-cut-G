sasukeLX=0;
sasukeLY=0;
sasukeRX=0;
sasukeRY=0;

function preload()
{
    rinnagan=loadImage("IMG-0916 (1).PNG");
    EMS=loadImage("EMS.png")
}


function setup()
{
    canvas = createCanvas(350,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}


function draw()
{
    console.log("draw working");
    image(video,0,0,350,300);
    image(rinnagan,sasukeLX,sasukeLY,30,30);
    image(EMS,sasukeRX,sasukeRY,30,30);
}


function modelLoaded()
{
    console.log("model loaded");
}


function gotPoses(results)
{
    if (results.length>0)
    {
        console.log(results);
        console.log("sasuke LX: " + results[0].pose.leftEye.x);
        console.log("sasuke LY: " + results[0].pose.leftEye.y);
        console.log("sasuke RX: " + results[0].pose.rightEye.x);
        console.log("sasuke RY: " + results[0].pose.rightEye.y);
        sasukeLX=results[0].pose.leftEye.x - 4;
        sasukeLY=results[0].pose.leftEye.y - 10;
        sasukeRX=results[0].pose.rightEye.x - 5;
        sasukeRY=results[0].pose.rightEye.y - 10;
    }
}

function take_snapshot()
{
    save("ur_mom.png");
}