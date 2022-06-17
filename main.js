left_wrist_x="";
left_wrist_y="";
right_wrist_x="";
right_wrist_y="";
left_wrist_score=0;
right_wrist_score=0;
song_1="";
song_2="";
song_1_status="";
song_2_status="";
function preload()
{
   song_1=loadSound("music2.mp3");
   song_2=loadSound("music.mp3");
}
function setup()
{
canvas=createCanvas(600,500);
canvas.position(600,300);
video=createCapture(VIDEO);
video.hide();
pose_net=ml5.poseNet(video , modelLoaded);
pose_net.on("pose" , got_poses);
}
function draw()
{
image(video,0,0,600,500);
fill("red");
stroke("red");
if (left_wrist_score > 0.2) 
{
    circle(left_wrist_x,left_wrist_y,20);
    song_2.stop();
    if (song_1_status == false) 
    {
    song_1.play()
    document.getElementById("song").innerHTML="Song = Harry Potter Theme song";
    {

    }    
    }
}
}
function modelLoaded()
{
    console.log("Posenet is on");
}
function got_poses(results)
{
if (results.length > 0) 
{
    console.log(results);
    left_wrist_x=results[0].pose.leftWrist.x;
    left_wrist_y=results[0].pose.leftWrist.y;
    right_wrist_x=results[0].pose.rightWrist.x;
    right_wrist_y=results[0].pose.rightWrist.y;
    left_wrist_score=results[0].pose.leftWrist.score;
    right_wrist_score=results[0].pose.rightWrist.score;
    song_1_status=song_1.isPlaying();
    song_2_status=song_2.isPlaying();
}
}