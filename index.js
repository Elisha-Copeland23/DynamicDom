// Phase 2: JS
// Create index.js and link to it in your HTML file.

// Your code should do the following:
// - Maintain an array of objects representing all of the user's added bookmarks.
// - Re-render the entire list of bookmarks any time a bookmark is added or removed.
// - Use map to map the bookmark array to DOM elements.

// Here are some guiding questions:
//     1. What event listeners do you need to start off with?
//     2. Can you correctly add bookmarks?
//     3. What UI element allows a user to remove a previously added bookmark?
//     4. How can you make sure that the correct bookmark is removed?


// const buttonAdd = document.querySelector("buttonAdd")
// buttonAdd.addEventListener("click", function () {
    


// })

// need array for list and add each new as object{}
// let listArray = []
 // > key : LinkBox
 // value : NameBox

class Bookmarks {
    constructor(link, siteName) {
        this.link = link;
        this.siteName = siteName;
    }
}






class List{
    constructor() {
        this.list = []
    }
    addNew = (newBookmark) => this.list.push(newBookmark)

}

let testMark = new Bookmarks('www.newsite.com', 'new site')
let testList = new List()
