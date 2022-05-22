import { User } from './User.js';
import { Book } from './Book.js';
import { Author } from './Author.js';


// User
const userAlona = new User(
    'Alona',
    new Date(2021, 1, 5),
    [],
    [],
    [],
    
);
const userSasha = new User(
    'Oleksander',
    new Date(2020, 10, 16),
    [],
    [],
    [],
);
const userDasha = new User(
    'Dasha',
    new Date(2022, 2, 10),
    [],
    [],
    [],
);

// Add Friends
userAlona.addToFriends(userSasha);
userDasha.addToFriends(userAlona);
userDasha.addToFriends(userSasha);
userDasha.addToFriends(userAlona);
userAlona.removeFriend(userSasha);

// Author
const danielKeyes = new Author(
   "Daniel Keyes",
    new Date(1927, 7, 9),
    [],
);

const willSmith = new Author(
    "Will Smith",
    new Date(1968, 8, 25),
    [],
);
const walterIsaacson = new Author(
    "Walter Isaacson",
    new Date(1952, 4, 20),
    [],
);
const bodoSchofer = new Author(
    "Bodo Schofer",
    new Date(1960, 8, 10),
    [],
);
// Books
const flowersForAlgernon = new Book(
     "Flowers for Algernon",
    new Date(1959, 0, 1),
    userAlona,
    [danielKeyes],
    [],
);
const theBillyMilligan = new Book(
    "Множественные умы Билли Миллигана",
    new Date(1981, 0, 1),
    userSasha,
    [danielKeyes],
    [],
);
const will = new Book(
    "Will",
    new Date(2021, 0,1),
    userSasha,
    [willSmith],
    [],
);
const namensMoney = new Book(
    "Пес на ім'я Мані",
    new Date(1999, 8, 1),
    userDasha,
    [bodoSchofer],
    [],
);
const financialFreedom = new Book(
    "Шлях до фінансової свободи",
    new Date(1918, 3, 1),
    userSasha,
    [bodoSchofer],
    [],
);


userSasha.likeBook(flowersForAlgernon)
userAlona.likeBook(namensMoney)
userSasha.unlikeBook(flowersForAlgernon)
// userAlona.likeBook(namensMoney)
// userDasha.unlikeBook(namensMoney)

console.log('book',flowersForAlgernon)
console.log("author",danielKeyes)
console.log("userAlona", userAlona)
console.log("userSasha", userSasha)
console.log("userDasha", userDasha)
