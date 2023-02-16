// create Library instance
let library = new Library();

// Load in book data
for (const bookInfo of bookData) {
  const book = new Book(
    bookInfo.author,
    bookInfo.language,
    bookInfo.subject,
    bookInfo.title
  );
  library.addNewBook(book);
}

// this sends entire library to render
let bookshelf = library.renderLibrary(library);


let list = new List();

for (let item in boxes) {
    const bookmarks = new Bookmarks(
        item.link = link;
        item.siteName = siteName;
    )
}

let boxes = ['fdsfds', 'fdsfds']