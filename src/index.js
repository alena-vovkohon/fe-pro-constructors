import { User } from './User.js';
import { Book } from './Book.js';
import { Author } from './Author.js';


// User
const userAlona = new User({
    name: 'Alona',
    date: new Date(2021, 1, 5),
    myBooks: [],
    friends: [],
    likes: [],
    
});
const userSasha = new User({
    name: 'Oleksander',
    date: new Date(2020, 10, 16),
    myBooks: [],
    friends: [],
    likes: [],
});
const userDasha = new User({
    name: 'Dasha',
    date: new Date(2022, 2, 10),
    myBooks: [],
    friends: [],
    likes: [],
});

// Add Friends
userAlona.addToFriends(userSasha);
userDasha.addToFriends(userAlona);
userDasha.addToFriends(userSasha);
userDasha.removeFriend(userAlona);
// userDasha.removeFriend(userAlona)

// Author
const danielKeyes = new Author({
    name: "Daniel Keyes",
    dateOfBirth: new Date(1927, 7, 9),
    books:[],
});

// console.log(danielKeyes instanceof Author)

// const author = new Author('Orwell', new Date(1903, 5, 25));
// console.log(author)


const willSmith = new Author({
    name: "Will Smith",
    dateOfBirth: new Date(1968, 8, 25),
    books: [],
});
const walterIsaacson = new Author({
    name: "Walter Isaacson",
    dateOfBirth: new Date(1952, 4, 20),
    books: [],
});
const bodoSchofer = new Author({
    name: "Bodo Schofer",
    dateOfBirth: new Date(1960, 8, 10),
    books: [],
});
// Books
const flowersForAlgernon = new Book({
    title: "Flowers for Algernon",
    year: new Date(1959, 0, 1),
    publicationBy: userAlona,
    authors: [danielKeyes],
    likedUsers:[],
});
const theBillyMilligan = new Book({
    title: "Множественные умы Билли Миллигана",
    year: new Date(1981, 0, 1),
    publicationBy: userSasha,
    authors: [danielKeyes],
    likedUsers: [],
});
const will = new Book({
    title: "Will",
    year: new Date(2021, 0,1),
    publicationBy: userSasha,
    authors: [willSmith],
    likedUsers: [],
});
const steveJobs = new Book({
    title: "Steve Jobs",
    year: new Date(2011, 9, 24),
    publicationBy: userAlona,
    authors: [walterIsaacson],
    likedUsers: [],
});
const namensMoney = new Book({
    title: "Пес на ім'я Мані",
    year: new Date(1999, 8, 1),
    publicationBy: userDasha,
    authors: [bodoSchofer],
    likedUsers: [],
});
const financialFreedom = new Book({
    title: "Шлях до фінансової свободи",
    year: new Date(1918, 3, 1),
    publicationBy: userSasha,
    authors: [bodoSchofer],
    likedUsers:[],
});


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
