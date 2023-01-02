/*Create an object literal called personAccount. 
It has firstName, lastName, incomes, expenses properties and 
it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
Incomes is a set of incomes and its description and expenses is a set of incomes and its description. */
const personalAccount = {
    firstName: 'Charles',
    lastName: 'Johnson',
    incomes: {
        incomes: [1000,2500,350,5000],
        descriptions: ['Business profits', 'Salary', 'Copyright on song', 'Apartment for Rent']
    },
    expenses: {
        incomes: [350,123,50,600],
        descriptions: ['Oil filter change', 'Shoes', 'Takeout order', 'Electric bill']
    },
    totalIncome(){},
    totalExpense(){},
    accountInfo(){},
    addIncome(){},
    addExpense(){},
    accountBalance(){}
}


// **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
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

/* 2. Imagine you are getting the above users collection from a MongoDB database. 
a. Create a function called signUp which allows user to add to the collection. 
   If user exists, inform the user that he has already an account */
    function signUp(id,name,email,password, date, status){
        let newUser = {
            _id: id,
            username: name,
            email: email ,
            password: password,
            createdAt: date,
            isLoggedIn: status
        }
        users.push(newUser);
    } 
    signUp('ks28df','Billy','Billy@billy.com','123456','01/2/23 4:14 AM',false);

// b. Create a function called signIn which allows user to sign in to the application 
function signIn(username, password){
    let success = false;
    users.forEach(element => {
        if(element.username === username && element.password === password){
            console.log('Welcome, thank you for signing in!');
            success = true;
        }
    });
    if(success === false){
        console.log('Error, invalid username/password');
    }
}
signIn('Billy', '123456');

// 3. The products array has three elements and each of them has six properties. 
// a. Create a function called rateProduct which rates the product 
function rateProduct(item, userId, rating) {
    let myRating = {
        userId: userId,
        rate: rating
    }
    let success = false;
    products.forEach(element => {
        if(element.name.includes(item) && userId.length == 6){
            element.ratings.push(myRating);
            success = true;
        }
    });
    if(success == false){
        console.log('Could not find item or userID incorrect');
    }
}
rateProduct('Laptop','ggdksf', 7);

// b. Create a function called averageRating which calculate the average rating of a product
let total = 0, count = 0, success = false;
function averageRating(name) {
    products.forEach(element=>{
        if(element.name === name && element.ratings.length !== 0){
            success = true;
            element.ratings.forEach(itemRate =>{
                total = total + itemRate.rate
                count++;
            })
        }
    })
    if(success == false){
        console.log(`Item name: '${name}' or rating does not exist`)
    }else{
        console.log(`The average rating for ${name} is: ${total/count}`)
    }
}
averageRating('mobile phone');

/* 4. Create a function called likeProduct. This function will helps to 
like to the product if it is not liked and remove like if it was liked.*/
function likeProduct(userID, name) {
    let removed = false, found = false;
    let likes = userID;
    products.forEach(element => {
        if(element.name === name){
            found = true;
            element.likes.forEach((element,index,likesArray)=>{
                if(element === likes){
                    likesArray.splice(index,1);
                    removed = true;
                }
            })
            if(removed == false){
                element.likes.push(userID);
                console.log(`Added like for product: ${name}`);
            }else{
                console.log(`Deleted like for product: ${name}`);
            }
        }
    });
    if(found == false){
        console.log('Error, invalid product name');
    }
}
likeProduct('fg12cy', 'Laptop');
