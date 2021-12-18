// categories of books
const booksByCategory = [
  {
    category: "Finanças",
    books: [
      {
        title: "The secrets of millionaire mind",
        author: "T. Harv Eker"
      },
      {
        title: "The richest Man in Babylon",
        author: "George S. Clason"
      },
      {
        title: "Rich dad poor dad",
        author: "Robert T. Kiyosaki and Sharon L. Lechter"
      },
    ],
  },
  {
    category: "Emotional inteligence",
    books: [
      {
        title: "Você é insubistituível",
        author: "Augusto Cury"
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury"
      },
      {
        title: "The 7 habits of highly effective people",
        author: "Stephen R. Covey"
      },
      {
        title: "12 Days to Upgrade Your Life",
        author: "Tiago Brunet"
      },
    ],
  },
];

//count gategorys
const totalCategories = booksByCategory.length
console.log(totalCategories)
for(let category of booksByCategory){
  console.log('Total of books of category: ', category.category)
  console.log(category.books.length)
}

//count of authors
function countAuthors() {
  let authors = []

  for(let category of booksByCategory) {
    for(let book of category.books) {
      if(authors.indexOf(book.author) == - 1) {
        authors.push(book.author)
      }
    }
  }
  console.log("Total of authors: ", authors.length)
}

countAuthors()

//books for the a of authors

function booksOfAuthor(author) {
  let books= []
  
    for(let category of booksByCategory) {
      for(let book of category.books) {
        if (book.author === author) {
          books.push(book.title)
      }
    }
    console.log(`Books of author ${author}: ${books.join(", ")}`)
  }
}  

booksOfAuthor('Augusto Cury')