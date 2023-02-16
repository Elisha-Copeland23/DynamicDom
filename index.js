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


const button = document.getElementById("buttonAdd")
let newLink = document.getElementById("LinkBox");
let newSite = document.getElementById("NameBox");


button.addEventListener("click", function () {

    let linkStored = newLink.value;
    let siteStored = newSite.value;
    console.log(linkStored, "linkStored")

    let newItem = new Bookmarks(linkStored, siteStored);
    console.log(newItem)
    
    // let newMark = new Bookmarks(newLink, newSite);
    // let newList = new List.addNew(newItem)
    // List.addNew(newItem);
})

    
// let testMark = new Bookmarks('www.newsite.com', 'new site')

// let testList = new List() 

// let newMark = new Bookmarks
// let newList = new List