import { Book } from './Book.js';

/**
 * @param {string} name
 * @param {Date} date
 * @constructor
 * @property {string} name
 * @property {Date} date
 * @property {Book[]} myBooks
 * @property {User[]} friends
 * @property {Book[]} likes
 */
export function User(name, date) {
    this.name = name;
    this.date = date;
    this.myBooks = [];
    this.friends = [];
    this.likes = [];

    
    Object.defineProperty(this, "publishedBooks", {
        get() {
            return this.myBooks.map(({ title }) => title).join(', ');
        }
    });

    Object.defineProperty(this, "likedBooks", {
        get() {
            return this.likes.map(({ title }) => title).join(', ');
        }
    });

    Object.defineProperty(this, "friendsNames", {
        get() {
            return this.friends.map(({ name }) => name).join(', ');
        }
    });

    // Add Friends
    this.addToFriends = function (friend) {
        if (this.friends.includes(friend)) {
            this.friends = this.friends.filter((itemFriend) => itemFriend !== friend);
            friend.friends = friend.friends.filter((itemFriend) => itemFriend !== this);  
        } else {
            this.friends.push(friend);
            friend.friends.push(this);
        }
    };
    // Remove Friends
    this.removeFriend = this.addToFriends;

    // Add Like
    this.likeBook = function (book) {
        if (this.likes.includes(book)) {
            this.likes = this.likes.filter((itemBook) => itemBook !== book);
            book.likedUsers = book.likedUsers.filter((itemUser) => itemUser !== this);
        } else {
            this.likes.push(book);
            book.likedUsers.push(this);
        };
    }
    // Delete Like
    this.unlikeBook = this.likeBook;
}
