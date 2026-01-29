import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const FoodItems = () => {
    const category = useSelector((state) => state.category.category);
    const search = useSelector((state) => state.search.search);
    const handleToast = (name) =>
    toast.success(`${name} added to cart`);
    
    const filteredItems = FoodData.filter((food) => {
    if (category === "All") {
      return food.name.toLowerCase().includes(search.toLowerCase());
    } else {
      return (
        category === food.category &&
        food.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  });

    //no food matches
  if (filteredItems.length === 0 && search.trim() !== "") {
    return (
      <p className="text-center mt-10 text-gray-500 text-lg">
        Oops! No dishes match your search
      </p>
    );
  }

  return (
    <div className='flex flex-wrap gap-10 justify-center lg:justify-start mx-10 my-10'>
      {FoodData.filter((food) =>{
        if (category == "All")
        {
          return food.name.toLowerCase().includes(search.toLowerCase());
        }
        else {
         return( category == food.category && food.name.toLowerCase().includes(search.toLowerCase()) );
        }
      }).map((food) => (
      <FoodCard 
          key={food.id}
          id={food.id}
          name={food.name}
          price={food.price}
          desc={food.desc}
          rating={food.rating}
          img={food.img}
          handleToast ={handleToast}
           />))
      }
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  )
}

export default FoodItems
