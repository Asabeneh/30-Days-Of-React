import './App.css';

function App() {
  const ary = [1, 2, 3, 4];
  console.log(ary.length);
  console.log(ary.toString());
  return (
    <div className="App">
      <p>Array:
        {ary.join(', ')}
      </p>
    </div>
  );
}

export default App;
