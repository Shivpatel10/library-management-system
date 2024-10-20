// Task 1: Create a Book Class
class Book {
    constructor(title, author, ISBN, _isAvailable) {
        this.title = title; //string
        this.author = author; //string
        this.ISBN = ISBN; //string
        this._isAvailable = true; //boolean (true/false)
    }
        // getter for isAvailable
        get isAvailable() {
            return this._isAvailable;
        }
        // setter for isAvailable
        set isAvailable(availability) {
            this._isAvailable = availability
        }

            getDetails() { //using getDetails to return a string with book's title, author, and ISBN
                return (`${this.title} was written by ${this.author}. Its ISBN number is ${this.ISBN}.`);
            };
}


// Task 2: Create a Section Class
class Section {
    constructor(sectionName, books) {
        this.sectionName = sectionName; //string
        this.books = []; //array of books
    }
        //addBook
        addBook(book) {
            this.books.push(book) ////this statement to adds a book to the books array created in the section class
        };
        //getAvailableBooks
        getAvailableBooks() {
            const booksAvailable = this.books.filter(book => book.isAvailable); //using the arrow function to filter the books
            return booksAvailable.length; // this will take the above filter then return the length
        };
        //listBooks
        listBooks() {
            console.log("Availability = true means Available, if false its not.") 
            this.books.forEach(book => {
                console.log(`    ${book.title}: Availablity = ${book.isAvailable}`)}) // will go through each book and list the title and availability 
        };

}


// Task 3: Create a Patron Class
class Patron {
    constructor(patronName, borrowedBooks) {
        this.patronName = patronName; //string
        this.borrowedBooks = []; //array of book objects to store borrowed books
    };
        // borrowBook
        borrowBook(book) {
            if (book.isAvailable) { 
                this.borrowedBooks.push(book); // pushes book into the borrowedBooks Array
                book.isAvailable = false; // this would then update the books status to false
                    console.log(`${this.patronName} is currently borrowing ${book.title}.`); // would output if the book push goes through
            };
        //returnBook
        //returnBook(book) {
    
           // };
        }
}


// Task 4: Create a VIPPatron Class
class VIPPatron extends Patron {
    constructor(patronName, priority = true) {
            super(patronName);
            this.priority = priority; //boolean
    };
    borrowBook(book) {
        if (this.priority || book.isAvailable) {
            this.borrowedBooks.push(book); // pushes book into the borrowedBooks Array
                book.isAvailable = false; // this would then update the books status to false
                    console.log(`${this.patronName} has VIP status and is currently borrowing ${book.title}.`); // would output if the book push goes through
        };
    } 
}






// Create sections
    const fiction = new Section("Fiction");
    const science = new Section("Science"); 

// Create books
    const book1 = new Book("1984", "George Orwell", "1234567890");
    const book2 = new Book("Brave New World", "Aldous Huxley", "0987654321");
    const book3 = new Book("The Selfish Gene", "Richard Dawkins", "1122334455");

// Add books to sections
    fiction.addBook(book1);
    fiction.addBook(book2);
    science.addBook(book3);

// Create patrons
    const regularPatron = new Patron("John Doe");
    const vipPatron = new VIPPatron("Jane Smith", true);

// Regular patron tries to borrow a book
    regularPatron.borrowBook(book1);

// VIP patron tries to borrow a book (has priority)
    vipPatron.borrowBook(book1);

// Return the book
    //regularPatron.returnBook(book1);

// List books and availability
    fiction.listBooks();

// Calculate total available books in each section
    console.log(`Total available books in Fiction: ${fiction.getAvailableBooks()}`);
    console.log(`Total available books in Science: ${science.getAvailableBooks()}`);
