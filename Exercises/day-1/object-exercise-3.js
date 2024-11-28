// // Exercises: Level 3

// // Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
// const personAccount = {
//   firstName: "fitsum",
//   lastName: "helina",
//   incomes: [
//     { description: "Salary", amount: 50000 },
//     { description: "Bonus", amount: 10000 },
//   ],
//   expenses: [
//     { description: "Rent", amount: 10000 },
//     { description: "Groceries", amount: 5000 },
//   ],
//   totalIncome() {
//     return this.incomes.reduce((total, income) => total + income.amount, 0);
//   },
//   totalExpense() {
//     return this.expenses.reduce((total, expense) => total + expense.amount, 0);
//   },
//   accountInfo() {
//     return `Account Information: ${this.firstName} ${this.lastName}`;
//   },
//   addIncome(description, amount) {
//     this.incomes.push({ description, amount });
//   },
// };

// // **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()

const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "ab12ex", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// // Imagine you are getting the above users collection from a MongoDB database.
// // a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// const newuser = {
//   _id: "eedfcf",
//   username: "John Doe",
//   email: "johndoe@johndoe.com",
//   password: "123456",
//   createdAt: "08/01/2020 10:15 AM",
//   isLoggedIn: null,
// };

// const signUp = (newuser) => {
//   // //solution1
//   const userExists = users.find((user) => user._id === newuser._id);
//   if (userExists) {
//     console.log("User already exists!");
//     return;
//   } else {
//     users.push(newuser);
//     console.log("User added successfully!");
//   }

//   // solution 2
//   for (const user of users) {
//     if (user._id === newuser._id) {
//       console.log("User already exists!");
//       return;
//     } else {
//       users.push(newuser);
//       console.log("User added successfully!");
//       break;
//     }
//   }
// };
// signUp(newuser);

// // b. Create a function called signIn which allows user to sign in to the application
// const signIn = (newuser) => {
//   const exists = users.find((user) => user._id === newuser._id);
//   if (exists) {
//     exists.isLoggedIn = true;
//     console.log("user signIn success");
//   } else {
//     exists.isLoggedIn = false;
//     console.log("account does not exist");
//   }
// };

// The products array has three elements and each of them has six properties.
// const product = [
//   {
//     _id: "eedfcf",
//     name: "Mobile phone",
//     description: "Huawei Honor",
//     price: 200,
//     ratings: [
//       { userId: "fg12cy", rate: 5 },
//       { userId: "zwf8md", rate: 4.5 },
//     ],
//     likes: [],
//   },
//   {
//     _id: "aegfal",
//     name: "Laptop",
//     description: "MacPro: System Darwin",
//     price: 2500,
//     ratings: [],
//     likes: ["fg12cy"],
//   },
//   {
//     _id: "hedfcg",
//     name: "TV",
//     description: "Smart TV: Procaster",
//     price: 400,
//     ratings: [{ userId: "aegfal", rate: 5 }, { userId: "zwf8md", rate: 3.5 },],
//     likes: ["fg12cy"],
//   },
// ];

// a. Create a function called rateProduct which rates the product
// const rateproduct = (productId, userid, rate) => {
//   const product = product.find((item) => productId === item._id);
//   if (product) {
//     const exixst = product.ratings.find((rating) => userid === rating.userId);
//     if (exixst) {
//       console.log("user already rated this product");
//     } else {
//       product.rating.push({ userid, rate });
//     }
//   } else {
//     console.log("product not found");
//   }
// };


// const rateProduct = (productId, userId, rate) => {
//   const product = products.find((product) => product._id === productId );
//   if (product) {
//     const user = users.find((users) => users._id === userId);
//     if (user) {
//       const existingRating = product.ratings.find(
//         (rating) => rating.userId === userId
//       );
//       if(!existingRating){
//       product.ratings.push({ userId: users._id, rate });
//       console.log("Product rating updated successfully");}
//       else{
//         console.log("User already rated this product");
//       }
//     }
//     else{
//       console.log("User not found");
//     }
//   }
//   else{
//     console.log("Product not found");
//   }
// }
// rateProduct("aegfal", "ab12ex", 2);



// // b. Create a function called averageRating which calculate the average rating of a product
// const averageRating = (productid, products) => {
//   const product = products.find((item) => productid === item._id);
//   if (product) {
//     if (product.ratings.length === 0) {
//       console.log(`No ratings yet for ${product.name}`);
//       return;
//     }
//     const sum = product.ratings.reduce((sum, rating) => sum + rating.rate, 0);
//     const average = sum / product.ratings.length;
//     console.log(
//       `average rating for ${product.name} is ${average} and it had ${product.ratings.length} rates `
//     );
//   } else {
//     console.log("product not found");
//   }
// };

// // Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

// const likeProduct = (productId, userId, products) => {
//   const product = products.find((item) => productId === item._id);
//   if (product) {
//     const exixst = product.likes.find((like) => userId === like);
//     if (exixst) {
//       product.likes = product.likes.filter((like) => like !== userId);
//       console.log(`${userId} has removed like from ${product.name}`);
//     } else {
//       product.likes.push(userId);
//       console.log(`${userId} has liked ${product.name}`); 
//     }
//   } else {
//     console.log("product not found");
//   }
// };


// const userratedproduct = (productId, userId, products) => {
//   const rated = products.filter((item) => item.rating.userId===userId)
//   if (rated != 0) {
//     const product = products.filter((item) => productId === item._id);
//     if (product) {
//       console.log(`${userId} has rated ${product.name}`);
//     } else {
//       console.log("product not found");
//     }
//   }
// }


const userRatedProducts = (userId, products) => {

  const ratedProducts = products.filter((item) =>
    item.ratings.find((rating) => rating.userId === userId)
  );
  return ratedProducts.map((item) => item.name);
};

const ratedByUser = userRatedProducts("ab12ex", products);
console.log(ratedByUser);


