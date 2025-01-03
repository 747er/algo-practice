const tournamentWinner = (competitions, results) => {
    const scores = {
      currentBestTeam: 0,
    };
    let currentBestTeam = 'currentBestTeam';
    
  
    for (let idx = 0; idx < competitions.length; idx++) {
      const winner =
        results[idx] === 1 ? competitions[idx][0] : competitions[idx][1];
  
  
      if (winner in scores) {
        scores[winner] += 3;
      } else {
        scores[winner] = 3;
      }
  
      if (scores[winner] > scores[currentBestTeam]) {
        currentBestTeam = winner;
      }
    }
  
    return currentBestTeam;
  };
  
  // const competitions = [
  //   ["HTML", "C#"],
  //   ["C#", "Python"],
  //   ["Python", "HTML"],
  // ];
  const competitions = [
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"],
  ];
  const results = [0, 1, 1];
  
  const winner = tournamentWinner(competitions, results);
  console.log(winner);
  