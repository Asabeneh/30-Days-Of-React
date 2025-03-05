import './App.css';

function App() {
  const ary = [1, 2, 3, 4];

  const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
  const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
  const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
  const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
  const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
  const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries
  
  const phrase = "Catnip is a bad cat!";
  //create arrays using split
  const wordsInPhrase = phrase.split(" ");
  const charsInPhrase = phrase.split("");
  const staticFill = Array(6).fill('-');
  const fruitsAndVeggies = fruits.concat(vegetables);

  //output of exercises
  console.log(ary.length);
  console.log(ary.toString());
  console.log(wordsInPhrase);
  console.log(charsInPhrase);
  console.log(wordsInPhrase[0]);
  console.log(wordsInPhrase[0]='Milkshake');
  console.log(wordsInPhrase);  
  console.log(staticFill);
  console.log(fruitsAndVeggies);
  console.log(fruitsAndVeggies.includes('fudge'));
  console.log(numbers.slice(1, 4));
  console.log(fruitsAndVeggies.push('turnip'));
  console.log(fruitsAndVeggies);
  fruitsAndVeggies.pop();
  console.log(fruitsAndVeggies);
  fruitsAndVeggies.shift();
  console.log(fruitsAndVeggies);
  fruitsAndVeggies.unshift('banana');
  console.log(fruitsAndVeggies);

  return (
    <div className="App">
      <p>Array:
        {ary.join(', ')}
      </p>
    </div>
  );
}

export default App;
