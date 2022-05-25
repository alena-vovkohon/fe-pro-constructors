import { Author } from './Author.js';
import { User } from './User.js';

/**
 * @param {string} title
 * @param {Date} year
 * @param {User} publicationBy
 * @param {Author[]} authors
 * @constructor
 * @property {string} title
 * @property {Date} year
 * @property {Author[]} authors
 * @property {User[]} likedUsers
 * @property {User} publicationBy
 */
export function Book(title, year, publicationBy, authors=[]) {
    this.title = title;
    this.year = year;
    this.publicationBy = publicationBy;
    this.authors = authors;
    this.likedUsers = [];

    this.publicationBy.myBooks.push(this);
    this.authors.forEach((author) => {
        author.books.push(this);
    });

    Object.defineProperty(this, "suggestedBooks", {
        get() {
            let { authors, title: titleThisAutor } = this;
            let arrBook = [];
            authors.map(({ books }) => books.forEach(({ title }) => {
                if (title !== titleThisAutor) {
                    arrBook.push(title)
                }
            }))
            let set = [...new Set(arrBook)]
            return set.join(', ')
        }
    });


    Object.defineProperty(this, "suggestedPublicators", {
        get() {
            let { authors, publicationBy: publicationByThisAutor } = this;
            let arrUser = [];

         authors.map(({ books }) => books.forEach(({ publicationBy }) => {

                if (publicationBy !== publicationByThisAutor) {
                    let { name } = publicationBy;
                    arrUser.push(name)
                }
            }))
            let set = [...new Set(arrUser)]
            return set.join(', ')
        }
    });

   
}
