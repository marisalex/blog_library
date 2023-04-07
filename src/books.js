const books = [
  {
    id: 1,
    title: 'Half of a Yellow Sun',
    author: 'Harper Lee',
    price: 4500,
    imageURL: 'https://www.chimamanda.com/wp-content/uploads/2021/09/Half-of-a-Yellow-Sun-fx.jpg'
  },
  {
    id: 2,
    title: 'Purple Hibiscus',
    author: 'George Orwell',
    price: 5500,
    imageURL: 'https://farafinabooks.files.wordpress.com/2011/04/purple-hibiscus2.jpg'
  },
  {
    id: 3,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    price: 3200,
    imageURL: 'https://masobebooks.com/wp-content/uploads/2019/09/MOY.png'
  },
  {
    id: 4,
    title: 'Secret Lives of Baba segis wives',
    author: 'F. Scott Fitzgerald',
    price: 3800,
    imageURL: 'https://kbimages1-a.akamaihd.net/f6fa62c6-f1bf-4e16-977f-dfd03b703c8f/1200/1200/False/the-secret-lives-of-baba-segi-s-wives.jpg'
  },
  {
    id: 5,
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez',
    price: 5000,
    imageURL: 'https://images.penguinrandomhouse.com/cover/9780060883287'
  },
  {
    id: 6,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    price: 2700,
    imageURL: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1626114970i/58544281.jpg'
  }
];

// // Write the array to a JSON file
// fs.writeFile('books.json', JSON.stringify(books), (err) => {
//   if (err) throw err;
//   console.log('Books saved to file!');
// });

export default books
