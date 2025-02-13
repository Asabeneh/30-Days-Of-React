import countries from "./countries.mjs"
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages)
console.log("min age = "+ages[0])
console.log("max age= "+ ages[ages.length-1])
let start = Math.floor((ages.length-1)/2)
let end = Math.ceil((ages.length-1)/2)
console.log("median age is= "+ ages.slice(start,end+1))
let sum =0;
for(let i =0 ; i< ages.length ; i++){
    sum+= ages[i]
}
console.log("average age = "+ sum/ages.length)
console.log("Range of age = " + (ages[ages.length-1]-ages[0]))

console.log(countries.slice(0,10))
let start1 = Math.floor((countries.length-1)/2)
let end1 = Math.ceil((countries.length-1)/2)
console.log("median age is= "+ countries.slice(start1,end1+1))

let personAccount = {
    firstName : "Ashim",
    lastName : "Debnath",
    income :[
        {
            "income" : 10000,
            "description" : "business"
        },
        {
            "income" : 20000,
            "description" : "job"
        }
    ],
    expenses : [
        {
            expense:5000,
            description : "food"
        },
        {
            expense : 5000,
            description : "cloths"
        },
        {
            expense : 5000,
            description : "date"
        },
        {
            expense : 10000,
            description :"others"
        }
    ],
    totalIncome : function (){
        let incomes = this.income;
        let sum =0;
        for (let income of incomes){
          sum += income.income
        }
        return sum;
    },
    totalExpenses : function(){
        let expenses = this.expenses;
        let sum = 0;
        for(let expense of expenses){
            sum += expense.expense
        }
        return sum
    },
    accountBalance : function (){
        return (this.totalIncome() - this.totalExpenses())
    }
}

console.log(personAccount.totalIncome())
console.log(personAccount.totalExpenses())
console.log(personAccount.accountBalance())


const users = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '08/01/2020 9:00 AM',
      isLoggedIn: false,
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '08/01/2020 9:30 AM',
      isLoggedIn: true,
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '08/01/2020 9:45 AM',
      isLoggedIn: true,
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '08/01/2020 9:50 AM',
      isLoggedIn: false,
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '08/01/2020 10:00 AM',
      isLoggedIn: false,
    },
  ]
  
  

  function signUp(users ,name , email , password){
    let userExist = true;
      for(const user of users){
         if(user.email == email){
            userExist = true;
        }else{
            userExist = false;
            }
         }
         if(!userExist){
         users.push({
            _id : Math.floor(Math.random(3000)*10000),
            name : name,
            email : email,
            password : password,
            createdAt : Date.now()
         })
        }else{
            console.log("user already exist!")
        }
      }


  signUp(users , "Ashim" , "ashd69@gmail.com","12345")

  console.log(users)

  signUp(users , "Ashim" , "ashd69@gmail.com","12345")


  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy'],
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy'],
    },
  ]

  function rateProduct(prodname , userId , rating , products){

    for(const product of products){

        if(product.name == prodname){
            product.ratings.push({
                userId : userId,
                rate : rating
            })
        }
    }
         
  }

  rateProduct('TV','ppkk11',5,products)
  for(const product of products){

    console.log(product)
}

function averageRating(prodName , products){
  for(const product of products){
    if(product.name == prodName){
        let ratings = product.ratings
        console.log(ratings)
        let sum = 0;
        let l = ratings.length;
        for(const rating of ratings){
            sum += rating.rate
        }
        return (sum / l);
    }
  }
}

console.log(`average rating ${averageRating('mobile phone',products)}`)

function likeProduct(name , userId , products){
    for(const product of products){
       if(product.name == name && product.likes.length == 0){
           product.likes.push(userId)
       }else if(product.name == name && product.likes.length != 0){
         product.likes.pop()
       }
    }
}

likeProduct('mobile phone','ppkk11',products)
for(let product of products)
     console.log(product)