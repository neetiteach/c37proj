class Question{
    constructor() {
       
        
        this.uname = createInput('Name');
        this.uans = createInput('Enter option');
        this.button = createButton('Submit');
        this.title = createElement('h1');
        this.question = createElement('h3');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.option4 = createElement('h4');
      }
    
      hide(){
        this.title.hide();
        this.uname.hide();
        this.button.hide();
        this.uans.hide();
      }

      
      display(){
          
        this.title.html("Quiz Time");
        this.title.position(390,0);
        
        this.question.html("One rabbit saw 6 elephants while going towards River.Every elephant saw 2 monkeys are going towards river. Every monkey holds one tortoice in their hands. How many animals are going towards the river?");
              // How many animals are going towards the river?");
        this.question.position(150,80);
        
        this.option1.html("A. 3");
        this.option1.position(150,150);
        
        this.option2.html("B. 5");
        this.option2.position(150,170);

        this.option3.html("C. 8");
        this.option3.position(150,190);

        this.option4.html("D. 0");
        this.option4.position(150,210);

        
        this.uname.position(150,260);
          this.uans.position(370,260);
          
          this.button.position(150,300);
           
          this.button.mousePressed(()=>{
             this.uname.hide();
             this.uans.hide();

             player.name=this.uname.value();
             player.ans=this.uans.value();
             pcount++;
              player.index=pcount;
              player.update();
              player.updateCount(pcount);
              console.log("Main yahan huin")
             
          });
          
      }

      
    
}