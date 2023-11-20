const PLAYERS = [
  "Spiderman",
  "Captain America",
  "Wonderwoman",
  "Popcorn",
  "Gemwoman",
  "Bolt",
  "Antwoman",
  "Mask",
  "Tiger",
  "Captain",
  "Catwoman",
  "Fish",
  "Hulk",
  "Ninja",
  "Black Cat",
  "Volverine",
  "Thor",
  "Slayer",
  "Vader",
  "Slingo",
];

// initialize players with image and strength
const initPlayers = (players) => {
  let detailedPlayers = [];
  // Create players using for loop
  // Type your code here
  players.forEach((el, i) => {
    let playerObj = {
      name: el,
      strength: 97,
      image: `./images/super-${i + 1}.png`,
    };
    if (i % 2 == 0) {
      playerObj.type = "hero";
    } else {
      playerObj.type = "villain";
    }
    detailedPlayers.push(playerObj);
  });
  // console.log(detailedPlayers)
  return detailedPlayers;
};

// getting random strength
const getRandomStrength = () => {
  // Return a random integer (0,100]
  // Note: You can use Math.random() and Math.ceil()
  return Math.ceil(Math.random() * 100) + 1;
};

const buildPlayers = (players, parameter) => {
  // for seperating heroes & villains
  let fragment = "";

  for (let i = 0; i < players.length; i++) {
    // console.log(players)
    if (players[i].type == parameter) {
      console.log(players[i].type);
      fragment += `<div class="player">
                            <img src="${players[i].image}" alt="">
                            <div class="name">${players[i].name}</div>
                            <div class="strength">${players[i].strength}</div>
                        </div>`;
    }
  }

  // Loop through players and accumulate HTML template
  // depending of type of player(hero|villain)
  // Type your code here

  return fragment;
};
// Display players in HTML
const viewPlayers = (players) => {
  document.getElementById("heroes").innerHTML = buildPlayers(players, "hero");
  document.getElementById("villains").innerHTML = buildPlayers(
    players,
    "villain"
  );
};

window.onload = () => {
  viewPlayers(initPlayers(PLAYERS));
};
