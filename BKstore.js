const bookContainer = document.getElementById("bookContainer");

function Book(title, author, coverImage) {
  this.title = title;
  this.author = author;
  this.coverImage = coverImage;
}

const books = [
  new Book("The Catcher in the Rye", "J.D. Salinger", "https://th.bing.com/th?id=OIP.ysUvu--oOBJ3T2gdv4dBYwHaL8&w=196&h=317&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"),
  new Book("To Kill a Mockingbird", "Harper Lee", "https://example.com/book-covers/to-kill-a-mockingbird.jpg"),
  new Book("Pride and Prejudice", "Jane Austen", "https://example.com/book-covers/pride-and-prejudice.jpg"),
  new Book("The Great Gatsby", "F. Scott Fitzgerald", "https://example.com/book-covers/the-great-gatsby.jpg"),
];

function createBookCard(book) {
  const card = document.createElement("div");
  card.classList.add("book-card");

  const img = document.createElement("img");
  img.src = book.coverImage;
  img.alt = book.title;
  card.appendChild(img);

  const title = document.createElement("h2");
  title.textContent = book.title;
  card.appendChild(title);

  const author = document.createElement("p");
  author.textContent = `Author: ${book.author}`;
  card.appendChild(author);

  return card;
}

function addBook() {
  
  const bookTitle = document.getElementById("bookTitle").value;
  const bookAuthor = document.getElementById("bookAuthor").value;
  const bookDescription = document.getElementById("bookDescription").value;
  
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");

  
  const bookCover = document.createElement("img");
  bookCover.src = "https://via.placeholder.com/300x400.png?text=Book+Cover";
  bookCover.alt = bookTitle;
  bookCard.appendChild(bookCover);

  
  const bookTitleElement = document.createElement("h2");
  bookTitleElement.textContent = bookTitle;
  bookCard.appendChild(bookTitleElement);

  
  const bookAuthorElement = document.createElement("p");
  bookAuthorElement.textContent = `Author: ${bookAuthor}`;
  bookCard.appendChild(bookAuthorElement);
  
  
const bookDescriptionElement = document.createElement("p");
bookDescriptionElement.textContent = `Description: ${bookDescription}`;
bookCard.appendChild(bookDescriptionElement);


  bookContainer.appendChild(bookCard);

 
  document.getElementById("bookTitle").value = "";
  document.getElementById("bookAuthor").value = "";
}


