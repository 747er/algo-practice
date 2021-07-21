function tournamentWinner(competitions, results) {
  let winners = {};
  let currentLeader = "";
  let winningTeam = "";

  competitions.forEach((competition, index) => {
    winningTeam = competition.reverse()[results[index]];

    if (index === 0) {
      currentLeader = winningTeam;
    }

    if (winners[winningTeam]) {
      winners[winningTeam].score += 3;
      if (winners[winningTeam].score > winners[currentLeader].score) {
        currentLeader = winningTeam;
      }
    } else {
      winners[winningTeam] = { name: winningTeam, score: 3 };
    }
  });

  return currentLeader;
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
