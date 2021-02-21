class Quiz{
    

    getState(){
     var dbref=dbase.ref("gstate");
     dbref.on("value",(data)=>{
      gmode=data.val();
     console.log(gmode);
     });
    }

    update(gm){
         dbase.ref("/").update({
            gstate:gm
         });
     }
    

    async start(){
       
     if(gmode===0){
         player=new Player();
         var pcountref=await dbase.ref("ccount").once("value");
         if(pcountref.exists()){
             pcount=pcountref.val();
             player.getCount();
         }
         quest=new Question();
         console.log("here");
         quest.display();
     }
    }

    play(){
         quest.hide();
         background("yellow")
         textSize(50);
         text("Result Of the Quiz",340,50);
         Player.getPlayerInfo();
         if(allPlayers!==undefined){
             var dpos=300;
             fill("blue");
              textSize(20);
             text("*NOTE: Contestant who answered correct are highlighted in green color!",130,270);
             for(var plr in allPlayers){
                 if(allPlayers[plr].ans==="B"||allPlayers[plr].ans==="b")
                     fill("green");
                   else
                     fill("red");

                     dpos+=20;
                     textSize(15);
                      text(allPlayers[plr].name + ": " + allPlayers[plr].ans,250,dpos);
                    
             }
         }
         
      }


     

}