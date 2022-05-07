video="";
status="";
object=[];
function preload() {
    video=createVideo('video.mp4');
}
function setup() {
    canvas=createCanvas(480, 380);
    canvas.center();
    video.hide();
}
function draw(){
    image(video, 0, 0, 480, 380);
    if (status !="")
    {
        objectDetecter.detect(video, gotresult);
        for (i=0; i < objects.length;i++) 
        {
          document.getElementById("status").innerHTML="Status.Object Detected";
          document.getElementById("number_of_objects").innerHTML="number of Objects Detected are :"+objects.length;
          fill("#FF0000");
          percent=floor(objects[i].confidence*100);
          text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15);
          noFill();
          stroke("#FF0000");
          rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
      }
      
        } 
      
      


function gotresult(error, results) {
    if(error)
    {
        console.log(error);
    }
    console.log(result);
    objects=results;
}

function start() {
   objectDetecter=ml5.objectDetecter('cocossd', modalLoaded);
   document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function modalLoaded() {
    console.log("Moadal Loaded");
    status=true;
    video.loop(1);
    video.speed(1);
    video.volume(1);
}