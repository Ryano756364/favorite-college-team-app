import {useState} from 'react';

function getRandomTeam() {
  const teams = ['ohio-state', 'michigan', 'csu', 'pitt', 'buffalo', 'ny'];
  return teams[Math.floor(Math.random() * teams.length)];
}

function App() {
  const [team, setTeam] = useState([]);

  // Cannot use teams.push() because it will modify exisiting state which we don't want to do
  const onButtonClick = () => {
    setTeam([...team, getRandomTeam()] );
  }

  return (
    <div>
      <button onClick={onButtonClick}>Add college team</button>
      <div>{team}</div>
    </div>
  )
}

export default App;
