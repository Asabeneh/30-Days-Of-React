console.log('OBJECT LİTERALS');

const dog = {
  name:'Lessie',
  color:'Brown',
  legs: '4',
  age: 3,
  bark: 'wooof wooof'
}

console.log(dog.name,dog['color'])

dog.breed = 'rot';
dog.GetDogInfo = function(){
  return `this dogs name is ${this.name} and it has good ${this.color} color it has ${this.legs} legs.`;
}

console.log(dog.GetDogInfo())