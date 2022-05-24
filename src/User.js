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
            let { myBooks } = this;
            return myBooks.map(({ title }) => title).join(', ');
        }
    });

    Object.defineProperty(this, "likedBooks", {
        get() {
            let { likes } = this;
            return likes.map(({ title }) => title).join(', ');
        }
    });

    Object.defineProperty(this, "friendsNames", {
        get() {
            let { friends } = this;
            return friends.map(({ name }) => name).join(', ');
        }
    });
    // Add Friends
    this.addToFriends = function (friend) {
        if (this.friends.includes(friend)) {
            this.friends = this.friends.filter((itemFriend) => itemFriend !== friend);
            friend.friends = friend.friends.filter((itemFriend) => itemFriend !== this);
                // else {
                //     itemFriend.friends = itemFriend.friends.filter((myFriends) => {
                //         if (myFriends.name !== this.name) {
                //             return myFriends
                //         } 
                //      })
                // }
            // });
           
        } else {
            this.friends.push(friend);
            friend.friends.push(this);
            // this.friends.filter((itemFriend) => {
            //     if (itemFriend === friend) {
            //        itemFriend.friends.push(this)
            //     } 
            // })
        }
        
    };

    // Remove Friends
    this.removeFriend = this.addToFriends;

    // Add Like
    this.likeBook = function (book) {
        if (this.likes.includes(book)) {
            this.likes = this.likes.filter((itemBook) => itemBook !== book);
            book.likedUsers = book.likedUsers.filter((itemBook) => itemBook !== this);

            // {
            //     if (itemBook !== book) {
            //         return itemBook
            //     } else {
            //         itemBook.likedUsers = itemBook.likedUsers.filter((myLikes) => {
            //             if (myLikes.name !== this.name) {
            //                 return myLikes
            //             }
            //         })
            //     }
            // });
        } else {
            this.likes.push(book);
            book.likedUsers.push(this);
            // this.likes.filter((itemBook) => {
            //     if (itemBook === book) {
            //          return itemBook.likedUsers.push(this)
            //     }
            // })
        };
    }
    // Delete Like
    this.unlikeBook = this.likeBook;


   

}
