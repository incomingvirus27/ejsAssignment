// Book class: Represents a Book
class Book{
    constructor(title, author, isbn, price, pages, country){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.price = price;
        this.pages = pages;
        this.country = country;

    }
}

// UI class: Handle UI tasks
class UI{
    static displayBooks(){

        const StoredBooks = [
            {
                title: "Book One",
                author: "Micheal Cyprus",
                isbn: "2345678",
                price: "&#8358 30000",
                pages: "560",
                country: "Nigeria"
            },
            {
                title: "Book Two",
                author: "Jane Doe",
                isbn: "17745678",
                price: "&#8358 50000",
                pages: "560",
                country: "Nigeria"
            }
        ];

        const books = StoredBooks;
        // const books = Store.getBooks();
        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book){
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td>${book.price}</td>
        <td>${book.pages}</td>
        <td>${book.country}</td>       
        <td><a href="#" class = "btn btn-danger btn-sm delete">X</a></td>       
        `;
        list.appendChild(row);
    }

    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }
    
    static showAlert(message, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);
        // vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 2000);
    }

    static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
        document.querySelector('#price').value = '';
        document.querySelector('#pages').value = '';
        document.querySelector('#country').value = '';
    }
}

// Store Class: handles storage
class store{
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }
        else{
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static addBook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn){
        const books = Store.getBooks();
        books.forEach((book, index) => {
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }    
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    // prevent actual submit
    e.preventDefault();
// Get form values
const title = document.querySelector('#title').value;
const author = document.querySelector('#author').value;
const isbn = document.querySelector('#isbn').value;
const price = document.querySelector('#price').value;
const pages = document.querySelector('#pages').value;
const country = document.querySelector('#country').value;

// validate
if(title === '' || author === '' || isbn === '' || price === '' || pages === '' || country === ''){
    UI.showAlert('Please fill in all fields', 'danger');
}else{
// instantiate book
const book = new Book(title, author, isbn, price, pages, country);
// Add boook to UI
UI.addBookToList(book);

// Add book to store
Store.addBook(book);

// Show success message
UI.showAlert('Book Added', 'success');

// clear fields
UI.clearFields();
}

});

// Event: Remove a book
document.querySelector('#book-list').addEventListener('click', (e) => {
UI.deleteBook(e.target);

// Show success message
UI.showAlert('Book Removed', 'success');
});
































// // Book class: Represents a Book
// class Book{
//     constructor(title, author, isbn){
//         this.title = title;
//         this.author = author;
//         this.isbn = isbn;
//     }
// }

// // UI class: Handle UI tasks
// class UI{
//     static displayBooks(){

//         const StoredBooks = [
//             {
//                 title: "Book One",
//                 author: "Micheal Cyprus",
//                 isbn: "2345678"
//             },
//             {
//                 title: "Book Two",
//                 author: "Jane Doe",
//                 isbn: "17745678"
//             }
//         ];

//         const books = StoredBooks;
//         // const books = Store.getBooks();
//         books.forEach((book) => UI.addBookToList(book));
//     }

//     static addBookToList(book){
//         const list = document.querySelector('#book-list');
//         const row = document.createElement('tr');
//         row.innerHTML = `
//         <td>${book.title}</td>
//         <td>${book.author}</td>
//         <td>${book.isbn}</td>
//         <td><a href="#" class = "btn btn-danger btn-sm delete">X</a></td>       
//         `;
//         list.appendChild(row);
//     }

//     static deleteBook(el){
//         if(el.classList.contains('delete')){
//             el.parentElement.parentElement.remove();
//         }
//     }
    
//     static showAlert(message, className){
//         const div = document.createElement('div');
//         div.className = `alert alert-${className}`;
//         div.appendChild(document.createTextNode(message));
//         const container = document.querySelector('.container');
//         const form = document.querySelector('#book-form');
//         container.insertBefore(div, form);
//         // vanish in 3 seconds
//         setTimeout(() => document.querySelector('.alert').remove(), 2000);
//     }

//     static clearFields(){
//         document.querySelector('#title').value = '';
//         document.querySelector('#author').value = '';
//         document.querySelector('#isbn').value = '';
//     }
// }

// // Store Class: handles storage
// class store{
//     static getBooks(){
//         let books;
//         if(localStorage.getItem('books') === null){
//             books = [];
//         }
//         else{
//             books = JSON.parse(localStorage.getItem('books'));
//         }
//         return books;
//     }
//     static addBook(book){
//         const books = Store.getBooks();
//         books.push(book);
//         localStorage.setItem('books', JSON.stringify(books));
//     }

//     static removeBook(isbn){
//         const books = Store.getBooks();
//         books.forEach((book, index) => {
//             if(book.isbn === isbn){
//                 books.splice(index, 1);
//             }
//         });
//         localStorage.setItem('books', JSON.stringify(books));
//     }    
// }

// // Event: Display Books
// document.addEventListener('DOMContentLoaded', UI.displayBooks);

// // Event: Add a Book
// document.querySelector('#book-form').addEventListener('submit', (e) => {
//     // prevent actual submit
//     e.preventDefault();
// // Get form values
// const title = document.querySelector('#title').value;
// const author = document.querySelector('#author').value;
// const isbn = document.querySelector('#isbn').value;

// // validate
// if(title === '' || author === '' || isbn === ''){
//     UI.showAlert('Please fill in all fields', 'danger');
// }else{
// // instantiate book
// const book = new Book(title, author, isbn);
// // Add boook to UI
// UI.addBookToList(book);

// // Add book to store
// Store.addBook(book);

// // Show success message
// UI.showAlert('Book Added', 'success');

// // clear fields
// UI.clearFields();
// }

// });

// // Event: Remove a book
// document.querySelector('#book-list').addEventListener('click', (e) => {
// UI.deleteBook(e.target);

// // Show success message
// UI.showAlert('Book Removed', 'success');
// });
