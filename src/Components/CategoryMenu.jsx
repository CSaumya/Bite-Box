import React, { useEffect, useState } from 'react'
import Fooddata from '../../src/data/FoodData'
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/Slice/CategroySlice'

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(Fooddata.map((food) => food.category))
    ];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className='mx-6'>
      <h1 className='text-[#ffd000] text-xl font-bold'>Explore the finest flavors</h1>
      <div className='flex gap-3 my-5 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>

        {/* "All" Button */}
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 rounded-lg font-bold cursor-pointer transition 
            ${selectedCategory === "All"
              ? "bg-[#ff7b00] text-black"
              : "bg-[#ffa200] text-white hover:bg-[#ff7b00] hover:text-black"}`}
        >
          All
        </button>

        {/* Category Buttons */}
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => dispatch(setCategory(category))}
            className={`px-4 py-2 rounded-lg font-bold cursor-pointer transition 
              ${selectedCategory === category
                ? "bg-[#ff7b00] text-black"
                : "bg-[#ffa200] text-white hover:bg-[#ff7b00] hover:text-black"}`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryMenu
