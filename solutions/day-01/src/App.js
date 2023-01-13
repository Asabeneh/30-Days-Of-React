import './App.css';

function App() {
  const ary = [];
  ary.push([1,2,3,4]);
  return (
    <div className="App">
      <p>Array:
        {
          ary.map((element) => {
            return element.toString();
          })
        }
      </p>
    </div>
  );
}

export default App;
