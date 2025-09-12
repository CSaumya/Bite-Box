import React, { useState } from 'react'
import {IoMdClose} from 'react-icons/io'
import {FaShoppingCart} from 'react-icons/fa'
import ItemCard from './ItemCard'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const Cart = () => {
  const [activecart, setActiveCart] = useState(false);
  const cartItems = useSelector((state)=> state.cart.cart);
  const totalQty = cartItems.reduce((totalQty,item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0);

  const navigate = useNavigate();

  return (
    <>
     <div className={`fixed right-0 top-0 w-full lg:w-[25vw] h-full bg-gradient-to-b from-[#ffd000] to-[#ff8800] p-5 text-white mb-3 ${activecart ? 'translate-x-0' : 'translate-x-full'} transition-all duration-500 z-50`}>
        <div className='flex justify-between item my-3'>
            <span className='text-xl font-bold text-amber-800 '>My Order</span>
            <IoMdClose onClick={()=> setActiveCart(!activecart)} className='border-2 border-amber-800 text-amber-800 font-bold text-xl rouded-ms hover:border-amber-200 hover:text-white hover:cursor-pointer' />
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((food) => (
            <ItemCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              img={food.img}
              qty={food.qty}
            />
          ))
        ) : (
          <h2 className="text-amber-900 font-semibold mt-5 text-center text-2xl">
            Your Cart is Empty!
          </h2>
        )}
        <div className='absolute bottom-0'>
        <h3 className='font-semibold'>Items : {totalQty} </h3>
        <h3 className='font-semibold' >Total Amount : {totalPrice} </h3>
        <hr className='w-[90vw] lg:w-[22vw] my-2 ' />
        <button onClick={() => navigate("/success")} className='bg-amber-900 font-bold py-2 px-3 rounded-lg w-[90vw] lg:w-[22vw] mb-5'>Order Now</button>
        </div>
    </div>
      <FaShoppingCart
        onClick={() => setActiveCart(!activecart)}
        className={`rounded-full bg-amber-500 shadow-md text-white text-5xl p-3 fixed bottom-10 right-2 cursor-pointer ${
          totalQty > 0 && 'animate-bounce'
        }`} />
   </>
  )
}

export default Cart
