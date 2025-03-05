import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [ season, setSeason ] = useState('choose a season');
  const [ dataLoad, setDataLoad ] = useState(false );

  const dataFake = {
    name: 'Mamedov'
  }

  const changeBackground = season => {
      let backgroundColor;

      if( season === "spring" ){
          return backgroundColor = "green"
      } else if( season === "summer" ){
          return backgroundColor = "orange"
      } else if( season === "autumn" ){
          return backgroundColor = "brown"
      } else if( season === "winter" ) {
          return backgroundColor = "blue"
      } else {
          return  backgroundColor = "white"
      }
  }

  useEffect( () => {
      setTimeout( () => setDataLoad( value => !value ), 5000 )
  },[season])

  const wrapperStyle = {
      backgroundColor : changeBackground(season)
  }

  return (
    <div
        className="App"
        style={ wrapperStyle }>
      <select defaultValue={season} style={{ width: 120, height: 30 }} onChange={ event => setSeason(event.target.value) }>
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
          <option value="autumn">Autumn</option>
          <option value="winter">Winter</option>
      </select>
      <div>
          {  dataLoad === true && (
              <p>{ dataFake.name }</p>
          )  }
      </div>
    </div>
  );
}

export default App;
