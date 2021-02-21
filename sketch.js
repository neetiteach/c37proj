var canvas;
var dbase;
var gmode=0,player,pcount,quest,allPlayers;
var qz;
function setup(){
  canvas = createCanvas(850,400);
  dbase=firebase.database();
  qz=new Quiz();
   qz.getState();
  qz.start();
  
}


function draw(){
  background("lightpink");
 
  if(pcount === 4){
    qz.update(1);
  }
  if(gmode === 1){
    "chere"
    clear();
    qz.play();
  }

}
