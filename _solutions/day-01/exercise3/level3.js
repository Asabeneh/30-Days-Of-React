// Exercise 3 - Level 3

const {users, products} = require('./users-products.js');

const currentDate = new Date()

const personAccount = {
    firstName: '',
    lastName: '',
    incomes: '',
    expenses: '',
    totalIncome: function () {

    },
    totalExpense: function () {

    },
    accountInfo: function () {

    },
    addIncome: function () {

    },
    addExpense: function () {

    },
    accountBalance: function () {

    }
}


formatDateTime = function () {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth() 
    const day = currentDate.getDate()
    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    let amPm = 'AM'
    let formatDay = day
    let formatMonth = month

    if (hours > 11) {
        amPm = 'PM'
    } else amPm = 'AM'

    if (day < 10) {
        formatDay = `0${day}`
    }

    if (month < 10) {
        formatMonth = `0${month}`
    }

    return `${formatDay}/${formatMonth}/${year} ${hours}:${minutes} ${amPm}`
}



// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

signUp = function (email, password) {
        if (users.some((user) => user.email === email)) {
            console.log('An account with this email already exists!');
        } else {
            const username = email.slice(0, email.indexOf('@'));
            const capitalUsername = username[0].toUpperCase + username.slice(1)
            newUser = {
                _id: 'az17ds',
                username: capitalUsernamesername,
                email: email,
                password: password,
                createdAt: formatDateTime(),
                isLoggedIn: true,
            }
        users.push(newUser)
        console.log('New user created!')
        }
}

function deleteUserByEmail(email) {
    const userIndex = users.findIndex((user) => user.email === email);
  
    if (userIndex !== -1) {
      users.splice(userIndex, 1);
      console.log(`User with email ${email} has been deleted.`);
    } else {
      console.log('User with email not found.');
    }
  }


// b. Create a function called signIn which allows user to sign in to the application

const signIn = function (email, password) {
    const foundUser = users.find((user) => user.email === email && user.password === password);
    
    if (foundUser) {
      foundUser.isLoggedIn = true;
      console.log('You have logged in!');
    } else {
      console.log('Incorrect email or password.');
    }
  };

// c. Create a function called rateProduct which rates the product

const rateProduct = function (productID, userID, rating) {
    const foundProduct = products.find((product) => product._id === productID);

    if (foundProduct) {
        foundProduct.ratings.push({userId: userID, rate: rating})
        console.log('Rating added successfully')
    } else console.log('Product not found')
}


// d. Create a function called averageRating which calculate the average rating of a product

const averageRating = function (productID) {
    const foundProduct = products.find((product) => product._id === productID);
    ratingsArr = []
    
    if(foundProduct) {
        foundProduct.ratings.forEach((rating) => {
        ratingsArr.push(rating.rate)
        })
    } else {console.log("Product not found.")}

    sum = ratingsArr.reduce(function (a, b) {return a + b;}, 0);
    average = sum/ratingsArr.length
    console.log(average)
    return average
}

// e. Create a function called likeProduct. This function will help us to like to the product if it is not liked and remove like if it was liked.

const likeProduct = function (productID, userID) {
    const foundProduct = products.find((product) => product._id === productID);

    if (foundProduct) {
        if (foundProduct.likes.includes(userID)) {
            const userIdIndex = foundProduct.likes.indexOf(userID);
            foundProduct.likes.splice(userIdIndex, 1); // Remove the user ID from the 'likes' array
            console.log("Product unliked.");
        } else {
            foundProduct.likes.push(userID);
            console.log("Product liked.");
        }
    } else {
        console.log("Product not found.");
    }
}

