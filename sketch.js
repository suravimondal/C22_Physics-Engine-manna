     //renaming
     const Engine= Matter.Engine;
     const World= Matter.World;
     const Bodies= Matter.Bodies;
     
     var engine, world, ground; 
     
     function setup() {
        createCanvas(400,400);
        
        //create your personal engine
        engine= Engine.create();
        world= engine.world;

        var options={
          isStatic: true
        }


        ground= Bodies.rectangle(200,380,400,20,options);
        World.add(world,ground);
        console.log(ground);
        //console.log(ground.position.y);
      }

      function draw() {
        Engine.update(engine);
        background(0);  

        rectMode(CENTER);
        rect(ground.position.x,ground.position.y,400,20);

       
      }