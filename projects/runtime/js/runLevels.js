var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE

    function createSawBlade(hitx, hity, imgx, imgy)
    {
    var hitZoneSize = 25;

    var damageFromObstacle = 10;

    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);

    sawBladeHitZone.x = (hitx);

    sawBladeHitZone.y = hity

    var obstacleImage = draw.bitmap("img/sawblade.png");

    obstacleImage.x = imgx;

    obstacleImage.y = imgy;

    sawBladeHitZone.addChild(obstacleImage);

    game.addGameItem(sawBladeHitZone);
  }

    createSawBlade(400, 550, -25, -25);

    createSawBlade(400, 500, -25, -25);

    createSawBlade(400, 450, -25, -25);




    function createEnemy(x,y)
    {

      var enemy = game.createGameItem("enemy", 25);

      var redSquare = draw.rect(50, 50, "red");
  
      redSquare.x = -25;
  
      redSquare.y = -25;
  
      enemy.addChild(redSquare);
  
      enemy.x = x;
  
      enemy.y = y;
  
      game.addGameItem(enemy);
  
      enemy.velocityX = -2;
  
      enemy.rotationalVelocity = 5;
  
      enemy.onPlayerCollision = function () 
      {
  
        game.changeIntegrity(-10)
  
      };
  
      enemy.onProjectileCollision = function()
      {
  
        game.increaseScore(100);
  
        enemy.shrink();
  
      }

    }


    createEnemy(400, groundY - 10);

    createEnemy(800, groundY - 100);

    createEnemy(1200, groundY - 50);

    function createReward(x, y)
    {

      var reward = game.createGameItem("reward", 25);

      var coin = draw.bitmap('img/reward.png');

      coin.x = -25;
      coin.y = -25;

      reward.addChild(coin);

      reward.x = x;
      reward.y = y;

      game.addGameItem(reward);

      reward.velocityX = -1;

      reward.onPlayerCollision = function()
      {
  
        game.changeIntegrity(15);
        game.increaseScore(300);
        reward.shrink();
  
      }
    }

      createReward(450, groundY - 50);

    function createMarker(x,y)
    {

      var end = game.createGameItem("end", 32);

      var flag = draw.bitmap("img/flag.png");

      flag.x = -32;
      flag.y = -32;

      end.addChild(flag);

      end.x = x;
      end.y = y;

      game.addGameItem(end);

      end.velocityX = -2;

      end.onPlayerCollision = function()
      {
        end.shrink();
        startLevel();
      }

      end.onProjectileCollision = function()
      {
        end.shrink();
        startLevel();
      }
      
    }

    createMarker(canvasWidth, groundY);

    

    function startLevel() {
      // TODO 13 goes below here

      var level = currentLevel[2];

      var levelObjects = gameItems[2];


      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
