import {useState} from 'react';
import FavoriteTeam from './FavoriteTeam';

function getRandomTeam() {
  const teams = ['ohio-state', 'michigan', 'csu', 'pitt', 'buffalo', 'ny'];
  return teams[Math.floor(Math.random() * teams.length)];
}

function App() {
  const [team, setTeam] = useState([]);

  const onButtonClick = () => {
    setTeam([...team, getRandomTeam()]);
  }

  const renderedTeams = team.map((team, index) => {
    //Mapping component to use when showing a list of items to user (very important!)
    return <FavoriteTeam type={team} key={index} />
  });

  return (
    <div>
      <button onClick={onButtonClick}>Add college team</button>
      <div>{renderedTeams}</div>
    </div>
  )
}

export default App;
