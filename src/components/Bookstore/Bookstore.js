import React from 'react'
import "./Bookstore.css"


export default function Bookstore(props)
{
    // fetch("https://discountedtrade.herokuapp.com/jwtaddbook")
    // .then(response => response.json())
    // .then(json => console.log(json))

const [cart, setCart] = React.useState(
  {
    img: props.book.imageURL,
    title: props.book.title,
    price: props.book.price
  }
)

function addToCart(){
  const cartItems = localStorage.getItem("added") ? JSON.parse(localStorage.getItem("added")) : []
  console.log("this one entered")

  cartItems.push({...cart})

  localStorage.setItem("added", JSON.stringify(cartItems))
}





  return (
    <div className="book-display">
      <div key={props.book.id} className="book">
        <img src={props.book.imageURL} /> 
        <h4>{props.book.title}</h4>
        <p>{props.book.price}</p>
        <p></p>
        <button onClick={()=>{
          addToCart(props.book.id)
        }}>Add to cart</button>
      </div>
     
      {/* <div className="book">
        <img src="https://farafinabooks.files.wordpress.com/2011/04/purple-hibiscus2.jpg" /> 
        <h4>Half of a yellow Sun</h4>
        <p>4500</p>
        <p></p>
        <button>Add to cart</button>
      </div>

      <div className="book">
        <img src="https://masobebooks.com/wp-content/uploads/2019/09/MOY.png" /> 
        <h4>Half of a yellow Sun</h4>
        <p>4500</p>
        <p></p>
        <button>Add to cart</button>
      </div>

      <div className="book">
        <img src="https://kbimages1-a.akamaihd.net/f6fa62c6-f1bf-4e16-977f-dfd03b703c8f/1200/1200/False/the-secret-lives-of-baba-segi-s-wives.jpg" /> 
        <h4>Half of a yellow Sun</h4>
        <p>4500</p>
        <p></p>
        <button>Add to cart</button>
      </div>

      <div className="book">
        <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1626114970i/58544281.jpg" /> 
        <h4>Half of a yellow Sun</h4>
        <p>4500</p>
        <p></p>
        <button>Add to cart</button>
      </div> */}
    </div>
  )
}
