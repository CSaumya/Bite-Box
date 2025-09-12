import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { removeFromCart, incrementQty, decrementQty } from '../redux/Slice/CartSlice'
import toast, { Toaster } from 'react-hot-toast';


const ItemCard = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();

  return (
    <div className='flex items-center gap-3 shadow-md rounded-lg p-3 mb-2 relative'>
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart(id));
          toast(`${name} removed!👋`)
        }}
        className='hover:text-amber-600 cursor-pointer absolute top-2 right-2'
      />
      <img src={img} alt={name} className='w-[60px] h-[60px] rounded-full object-cover' />
      <div className='flex-1'>
        <h2 className='font-bold text-amber-700'>{name}</h2>
        <div className='flex items-center justify-between mt-1'>
          <span className='text-amber-700 font-bold'>₹{price}</span>
          <div className='flex items-center gap-2'>
            <AiOutlineMinus
              onClick={() => {
                if (qty > 1) dispatch(decrementQty(id))
                else dispatch(removeFromCart(id))
              }}
              className='border-2 hover:bg-amber-600 hover:border-amber-600 rounded-md text-xl cursor-pointer'
            />
            <span>{qty}</span>
            <AiOutlinePlus
              onClick={() => { console.log('increment clicked', id); dispatch(incrementQty(id)) }}
              className='border-2 rounded-md text-xl hover:bg-amber-600 hover:border-amber-600 cursor-pointer'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard;
