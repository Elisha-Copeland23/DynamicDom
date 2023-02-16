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


class Bookmarks {
    constructor(link, siteName) {
        this.link = link;
        this.siteName = siteName;
    }
}


class List {
    constructor() {
        this.list = []
    }

    addNew(newItem) {
        this.list.push(newItem)
    }
    
}


let list = []
const buttonAdd = document.getElementById("buttonAdd")

buttonAdd.addEventListener("click", function () {

    let newLink = document.getElementsById('LinkBox').value
    let newSite = document.getElementsById('NameBox').value

    let newItem = [newLink.value, newSite.value];
    console.log(newItem)
    
    // let newMark = new Bookmarks(newLink, newSite);
    // let newList = new List.addNew(newItem)
    List.addNew(newItem);
})

    
// let testMark = new Bookmarks('www.newsite.com', 'new site')

// let testList = new List() 

let newMark = new Bookmarks
let newList = new List