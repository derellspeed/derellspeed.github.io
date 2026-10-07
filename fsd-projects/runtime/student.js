function moveScenery() {
  for (let i = 0; i < scenery.building.instances.length; i++) {
    const buildingInstance = scenery.building.instances[i];
    buildingInstance.x += buildingInstance.speedX + currentLevel.speed;

    if (buildingInstance.x + buildingInstance.width < 0) {
      buildingInstance.x = scenery.building.loopWidth;
    }
  }

  for (let i = 0; i < scenery.lamp.instances.length; i++) {
    const lampInstance = scenery.lamp.instances[i];
    lampInstance.x += lampInstance.speedX + currentLevel.speed;

    if (lampInstance.x + lampInstance.width < 0) {
      lampInstance.x = scenery.lamp.loopWidth;
    }
  }
}

function generateLevel() {
  for (let i = 0; i < currentLevel.gameObjects.length; i++) {
    const currentObject = currentLevel.gameObjects[i];
    create(currentObject);
  }
}

function create(obj) {
  if (obj.type === "obstacle") {
    makeObstacle(obj);
  } else if (obj.type === "enemy") {
    makeEnemy(obj);
  } else if (obj.type === "powerup") {
    makePowerup(obj);
  } else if (obj.type === "goal") {
    makeGoal(obj);
  } else if (obj.type === "platform") {
    makePlatform(obj);
  }
}

function filterObjects(type) {
  const matchingObjects = [];

  for (let i = 0; i < gameObjects.length; i++) {
    if (gameObjects[i].type === type) {
      matchingObjects.push(gameObjects[i]);
    }
  }

  return matchingObjects;
}

function moveGameObjects(objectList) {
  for (let i = 0; i < objectList.length; i++) {
    const currentObject = objectList[i];
    currentObject.x += currentObject.speedX - currentLevel.speed;
  }
}

function handleProjectileCollisions() {
  for (let i = 0; i < gameObjects.length; i++) {
    const currentObject = gameObjects[i];

    for (let j = 0; j < projectiles.length; j++) {
      const currentProjectile = projectiles[j];

      if (isCollidingWithProjectile(currentObject, currentProjectile) === true) {
        handleProjectileObjectCollision(j, i);
      }
    }
  }
}

function handleHallebotGenericCollisions() {
  for (let i = 0; i < gameObjects.length; i++) {
    const currentObject = gameObjects[i];

    if (currentObject.type !== "platform" && isGenericCollision(currentObject)) {
      handleHallebotGenericCollision(i);
    }
  }
}

function triggerLevelTransition() {
  currentLevelIndex += 1;
  gameObjects = [];

  if (currentLevelIndex >= LEVELS.length) {
    player.winConditionMet = true;
    return;
  }

  currentLevel = LEVELS[currentLevelIndex];
  generateLevel();
}
