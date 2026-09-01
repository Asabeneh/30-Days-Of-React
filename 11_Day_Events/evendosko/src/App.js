import './App.css';
import {useEffect, useRef} from "react";

function App() {
  const box = useRef();

  const wrapStyles = {
    maxHeight: '100%',
    maxWidth: '100%',
    backgroundColor: 'brown',
    position: 'relative',
    width: '100vw',
    height: '100vh'

  }

  const boxes = {
    padding : '1rem',
    width: 150,
    position: 'absolute',
    backgroundColor: 'rebeccapurple'
  }

  const generateLeft = () => {
    return Math.floor(Math.random() * window.screen.width );
  }

  const generateTop = () => {
    return Math.floor(Math.random() * window.screen.height );
  }

  const handleGetAway = () => {
        box.current.style.left = `${generateLeft()}px`;
        box.current.style.top = `${generateTop()}px`;
  }

  return (
    <div className="App" style={wrapStyles}>
      <div style={boxes} onMouseEnter={handleGetAway} ref={box}>React Fıtısı Burada bir elametttt</div>
    </div>
  );
}

export default App;
