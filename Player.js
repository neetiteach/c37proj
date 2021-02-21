class Player {
  constructor(){
    this.index = null;
    this.ans= 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = dbase.ref('ccount');
    playerCountRef.on("value",(data)=>{
      pcount = data.val();
    })
  }

  updateCount(count){
    dbase.ref('/').update({
      ccount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    dbase.ref(playerIndex).set({
      name:this.name,
      ans:this.ans
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = dbase.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    });
  }
}
