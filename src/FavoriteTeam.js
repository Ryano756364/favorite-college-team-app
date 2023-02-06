import {useState} from 'react';
import buffalo from './images/buffalo.png';  
import csu from './images/csu.png'; 
import michigan from './images/michigan.png'; 
import osu from './images/osu.png'; 
import ou from './images/ou.png'; 
import pitt from './images/pitt.png'; 
import heart from './images/heart.svg';
import './FavoriteTeam.css';

const pngMap = {
  //JS shortcut when key and value have same name
  buffalo,  //same as buffalo: buffalo
  csu,
  michigan,
  osu,
  ou,
  pitt
}

function FavoriteTeam({ type }) {
  const [clicks, setClicks] = useState(0);

  const onButtonClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div onClick={onButtonClick} className="team-container">
      <img src={pngMap[type]} alt="team" className="team-logo"/>
      <img src={heart} 
        alt="heart" 
        className="heart-icon"
        style={{
          width: 10 + 10 * clicks + 'px'
        }}/>
    </div>
  )
}

export default FavoriteTeam;
