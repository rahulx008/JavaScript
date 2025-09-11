let Books = [
    {bookname: "Book1", published: 1999, Price: 200 },
    {bookname: "Book2", published: 2005, Price: 300 },
    {bookname: "Book3", published: 2010, Price: 400},    
    {bookname: "Book4", published: 2020, Price: 500},
    {bookname: "Book5", published: 2023, Price: 600},
    {bookname: "Book6", published: 2024, Price: 700},
    {bookname: "Book7", published: 1995, Price: 800}    
]

let userBook =Books.filter((book)=>(book.published>=2000 && book.Price<=400));

// filter takes a callback function as an argument and returns a new array
// The callback function is called for each element in the array and should return true or false

console.log(userBook);