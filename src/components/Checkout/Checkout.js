import React from 'react'
import "./Checkout.css"
import {BsFillTrashFill} from "react-icons/bs"
import {v4 as uuidv4} from "uuid"

export default function Checkout() {
  const[cartGoods, setCartGoods] = React.useState(null)
  const[quantity, setQuantity] = React.useState("")
  // const[array, setArray] = React.useState(true)

  const getCartItems = () =>{
    const allCartItems = JSON.parse(localStorage.getItem("added"))
    setCartGoods(allCartItems)
  }

  React.useEffect(() => {
    getCartItems()
  }, [])

  function handleChange(event){
    setQuantity(event.target.value)
    console.log(quantity)
  }


  return (
    <div className="cart-container">
      {/* <div className="cart-header">
        <h6>Product</h6>
        <h6>Price</h6>
        <h6>Quantity</h6>
        <h6>Total</h6>
      </div> */}
      {cartGoods && cartGoods.map((add)=>{
         return(
          <div className="single-cart">
            <img className="cart-img" src={add.img}/>
            <p>{add.title}</p>
            <p>{add.price}</p>
            <div className="cart-qty">
              <input className="cart-qty-input"
              type="text" 
              onChange={handleChange}
              />
              <button>+</button>
              <button>-</button>
            </div>
            <BsFillTrashFill />
          </div>
      
         )
      })}
  

     {/* <div className="single-cart">
      <img className="cart-img" src="https://www.chimamanda.com/wp-content/uploads/2021/09/Half-of-a-Yellow-Sun-fx.jpg"/>
      <p>Half of a yellow sun</p>
      <p>4500</p>
      <input 
       className="cart-qty" 
       type="number" />
      <BsFillTrashFill />
     </div>


     <div className="single-cart">
      <img className="cart-img" src="https://www.chimamanda.com/wp-content/uploads/2021/09/Half-of-a-Yellow-Sun-fx.jpg"/>
      <p>Half of a yellow sun</p>
      <p>4500</p>
      <input 
       className="cart-qty" 
       type="number" />
      <BsFillTrashFill />
     </div> */}
    </div>
  )
}

