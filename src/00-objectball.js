// Part 1: Building the Object

const gameObject = () => {

  let teamsObj = {
    home: {
      teamName: 'Brooklyn Nets',
      colors: ['Black', 'White'],
      players: {
        'Alan Anderson': {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        'Reggie Evans': {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        'Brook Lopez': {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        'Mason Plumlee': {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        'Jason Terry': {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    },
    away: {
      teamName: 'Charlotte Hornets',
      colors: ['Turquoise', 'Purple'],
      players: {
        'Jeff Adrien': {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        'Bismak Biyombo': {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        'DeSagna Diop': {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        'Ben Gordon': {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        'Brendan Haywood': {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  };

  return teamsObj;
};





// Step 2: Building Functions


// For example, let's say we want to build a function, homeTeamName,
// that returns the name of the home team
const homeTeamName = () => {
  let teamsObj = gameObject();
  return teamsObj.home.teamName;
};


// Build a function, numPointsScored that takes in an argument of a player's
// name and returns the number of points scored for that player.
const numPointsScored = (playerName) => {
  let homeTeamPlayerNamesArr = Object.keys(gameObject().home.players);
  let awayTeamPlayerNamesArr = Object.keys(gameObject().away.players);

  if (homeTeamPlayerNamesArr.includes(playerName)) {
    return gameObject().home.players[playerName].points;
  } else if (awayTeamPlayerNamesArr.includes(playerName)) {
    return gameObject().away.players[playerName].points;
  }

  return `${playerName} does NOT exist!`;
};


// Build a function, shoeSize, that takes in an argument of a player's name and
// returns the shoe size for that player.
const shoeSize = (playerName) => {
  let homeTeamPlayerNamesArr = Object.keys(gameObject().home.players);
  let awayTeamPlayerNamesArr = Object.keys(gameObject().away.players);

  if (homeTeamPlayerNamesArr.includes(playerName)) {
    return gameObject().home.players[playerName].shoe;
  } else if (awayTeamPlayerNamesArr.includes(playerName)) {
    return gameObject().away.players[playerName].shoe;
  }

  return `${playerName} does NOT exist!`;
};


// Build a function, teamColors, that takes in an argument of the team name and
// returns an array of that teams colors.
const teamColors = nameOfTeam => {
  let teamsObj = gameObject();
  if (teamsObj.home.teamName === nameOfTeam) {
    return teamsObj.home.colors;
  } else if (teamsObj.away.teamName === nameOfTeam) {
    return teamsObj.away.colors;
  }
};


// Build a function, teamNames, that operates on the game object to return
// an array of the team names.
const teamNames = gmObj => [gmObj.home.teamName, gmObj.away.teamName];


// Build a function, playerNumbers, that takes in an argument of a team name
// and returns an array of the jersey number's for that team.
const playerNumbers = nameOfTeam => {
  let jerseyNumbersArr = [];
  let teamsObj = gameObject();

  if (teamsObj.home.teamName === nameOfTeam) {
    for (let playerName in teamsObj.home.players) {
      jerseyNumbersArr.push(teamsObj.home.players[playerName].number);
    }

    return jerseyNumbersArr;
  } else if (teamsObj.away.teamName === nameOfTeam) {
    for (let playerName in teamsObj.away.players) {
      jerseyNumbersArr.push(teamsObj.away.players[playerName].number);
    }

    return jerseyNumbersArr;
  }
};


// Build a function, playerStats, that takes in an argument of a player's name
// and returns a object of that player's stats.
const playerStats = playerName => {
  let gmObj = gameObject();
  let homeTeamPlayerNamesArr = Object.keys(gmObj.home.players);
  let awayTeamPlayerNamesArr = Object.keys(gmObj.away.players);

  if (homeTeamPlayerNamesArr.includes(playerName)) {
    return gmObj.home.players[playerName];
  } else if (awayTeamPlayerNamesArr.includes(playerName)) {
    return gmObj.away.players[playerName];
  }
};


// // Build a function, bigShoeRebounds, that will return the number of rebounds
// // associated with the player that has the largest shoe size.
// const bigShoeRebounds = () => {
//   // First, find the player with the largest shoe size

// };
