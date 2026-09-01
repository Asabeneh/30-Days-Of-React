import './App.css';
import ImgComp from './components/imgComp';
import SubComp from './components/subComp';
import UserCard from './components/userCardComp';
import ColorGen from './components/colorGenComp';
import person from './images/person.jpg';
import pichtml from './images/htmlpng.png';
import piccss from './images/csspng.png';
import picjs from './images/jspng.png';
import picreact from './images/reactpng.png';


function App() {
  return (
    <div className="App">
            <ColorGen numColor={5}/>
      <ImgComp
        pichtml={pichtml}
        piccss={piccss}
        picjs={picjs}
        picreact={picreact}
      />
      <SubComp />
      <UserCard person={ person } />
    </div>
  );
}

export default App;
