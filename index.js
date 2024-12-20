// Group: Toon, Dawn, Jesus, Christina, Hunter

const USSCathodeRay = {
  hull: 20,
  firepower: 5,
  accuracy: 0.7,
  attack
};

function attack(accuracy) {
  let randNum = Math.random();
  let hitSuccess = randNum < accuracy;
  return hitSuccess;
}

const AlienShips = [];

function generateAlienShips(numberOfShips) {
  for (let i = 0; i < numberOfShips; i++) {
    let AlienShip = {
      hull: getRandomInteger(3, 6),
      firepower: getRandomInteger(2, 4),
      accuracy: getRandomFloat(0.6, 0.8),
      attack
    };
    AlienShips.push(AlienShip);
  }
}
generateAlienShips(6);

// Steps
// 1. create the hero ship
// 2. generate alien ships using generateAlienShips
// 3. create battle function to simulate a single encounter
// 3. update battle function to continue the battle while there are aliens


function battle() {
  let hero = USSCathodeRay;
  let hitSuccess;
  let enemies = AlienShips;
  let encounter = 0;

  enemies.forEach((enemy) => {
    // prompt here for user interaction
    encounter++
    console.log(`%cEncounter number ${encounter} has begun!`, "color: lime")
    // hero attacks:
    while (enemy.hull > 0) {
      hitSuccess = hero.attack(hero.accuracy);
      if (hitSuccess) {
        enemy.hull -= hero.firepower;
        console.log(`Alien ship was hit and now has a hull of ${enemy.hull}`);
        if (enemy.hull <= 0) {
          console.log("%cGoodbye Alien, you have been destroyed RIP!!!", "color: crimson");
          continue; //?
        }
      } else {
        console.log("Oh no, the hero ship missed!");
      }

      // enemy attacks
      if (enemy.hull > 0) {
        console.log("%cEnemy gets to attack us, poop!", "color: tan")
        hitSuccess = enemy.attack(enemy.accuracy);
        if (hitSuccess) {
          hero.hull -= enemy.firepower;
          console.log(`Hero ship was hit and now has a hull of ${hero.hull}`);

          // check if dead here
          if (hero.hull <= 0) {
            console.log("Oh no we died :( The universe is DOOMED");
            return;
          }
        }
      }
    }
    
  });

  if (hero.hull > 0) {
    console.log("%cWe saved the day!", "font-size: 2rem");
  }
}

battle();

// Helper functions:

function getRandomInteger(lower, upper) {
  let randomInt = Math.floor(Math.random() * (upper - lower + 1)) + lower;
  return randomInt;
}

function getRandomFloat(lower, upper) {
  let randomFloat = Math.random() * (upper - lower) + lower;
  return randomFloat;
}
