import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {useDispatch} from 'react-redux'
import { addToCart } from '../redux/Slice/CartSlice'

const FoodCard = ({id,name,price,desc,img,rating,handleToast}) => {
  const dispatch = useDispatch();

  return (
    <>
    <div className='w-[250px] bg-white p-5 flex flex-col rounded-lg hover:shadow-[0_4px_10px_rgba(249,115,22,0.6)]'>
      <img src={img} alt="" className='w-auto h-[130px] overflow-hidden hover:scale-110 cursor-grab transition-all duration-500 ease-in-out' />
      <div className='flex justify-between font-bold'>
      <h2 className='text-[#ff7b00]'>{name}</h2>
      <span className='text-[#ff8800]' >₹{price}</span>
      </div>
      <p className='text-sm font-normal'>{desc.slice(0,50)}......</p>
      <div className='flex justify-around items-center my-3'>
        <span className='flex items-center gap-2 font-bold'>
          <AiFillStar color='orange' />
          {rating}
        </span>
        <button onClick={()=>{
          dispatch(addToCart({
            id,
            name,
            price,
            rating,
            price,
            img,
            qty:1
          }));
          handleToast(name);
        }} className='bg-[#ffaa00] text-white p-1 rounded-md hover:bg-[#ff8800] cursor-pointer'>Add To Cart</button>
      </div>
    </div>
    </>
  )
}

export default FoodCard
