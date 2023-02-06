import {useState} from 'react';
import FavoriteTeam from "./FavoriteTeam";

  function App() {
    const [count, setCount] = useState(0);

    const onButtonClick = () => {
      setCount(count + 1);
    };

    return (
      <div>
        <button onClick={onButtonClick}>Increase team vote</button>
        <div>
          Number of votes: {count}
        </div>
        <FavoriteTeam />
      </div>
    )
  }

export default App;
