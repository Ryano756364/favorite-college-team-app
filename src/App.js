import {useState} from 'react';
import FavoriteTeam from './FavoriteTeam';
import './App.css';

function getRandomTeam() {
  const teams = ['osu', 'michigan', 'csu', 'pitt', 'buffalo', 'rochester-ny', 'ou'];
  return teams[Math.floor(Math.random() * teams.length)];
}

function App() {
  const [team, setTeam] = useState([]);

  const onButtonClick = () => {
    setTeam([...team, getRandomTeam()]);
  }

  const renderedTeams = team.map((team, index) => {
    return <FavoriteTeam type={team} key={index} />
  });

  return (
    <div className='main-container'>
      <button onClick={onButtonClick}>Add college team</button>
      <div className='team-container'>{renderedTeams}</div>
    </div>
  )
}

export default App;
