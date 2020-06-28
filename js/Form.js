class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.question1 = createElement('h4');
      this.reset = createButton('Submit');
    }
    hide(){
      this.question1.hide();
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Survey");
      this.title.position(displayWidth/2 - 50, 0);

      this.question1.html("Do you think pollution is a problem");
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
      this.reset.position(displayWidth-100,20);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.greeting.html("Thank You");
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  
    }
  }