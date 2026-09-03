$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(200, 610, 50, 20, "blue");
createPlatform(1300, 400, 50, 20, "blue");
createPlatform(620, 600, 50, 20, "blue" );
createPlatform(410, 300, 50, 20,  "blue");
createPlatform(600, 350, 50, 20,  "blue");
createPlatform(780, 290, 50, 20,  "blue");
createPlatform(400, 550, 50, 20,  "blue");
createPlatform(100, 300, 50, 20,  "blue");
createPlatform(250, 400, 50, 20,  "blue");
createPlatform(1100, 610, 50, 20,  "blue");
createPlatform(1200, 500, 50, 20,  "blue");
createPlatform(900, 350, 50, 20,  "blue");
createPlatform(1100, 350, 50, 20,  "blue");
createPlatform(850, 550, 50, 20,  "blue");
createPlatform(200, 200, 50, 20,  "blue");
createPlatform(400, 150, 120, 10,  "blue",  250, 1000, 2, 200, 200, 0);
createPlatform(1100, 150, 50, 20,  "blue");
    // TODO 3 - Create Collectables
createCollectable("diamond", 1300, 360);
createCollectable("diamond", 200, 170, 0.5, 0.7);
createCollectable("diamond", 620, 520, 0.5, 0.7);
createCollectable("diamond", 600, 200, 0.5, 0.7);
createCollectable("diamond", 1100, 100, 0.5, 0.7);
    // TODO 4 - Create Cannons
createCannon("top", 400, 3000);
createCannon("right", 250, 2000);
createCannon("right", 510, 3000);   
createCannon("top", 1100, 3000);    
createCannon("top", 200, 5000, 20, 10, 100, 1300, 2);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
