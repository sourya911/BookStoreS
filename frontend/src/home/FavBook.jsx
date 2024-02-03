import React from 'react'
import FavBookImg from '../assets/images/favBooks.jpg'
import { Link } from 'react-router-dom'
function FavBook() {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
      <div className='md:w-1/2'>
        
        <img src={FavBookImg} alt="" className='rounded md:w-10/12'/>
      </div>

      <div className='md:w-1/2 space-y-6'>
        <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favourite <span className='text-green-600'>Book Here!</span></h2>
        <p className='mb-10 text-lg md:w-5/6'>Welcome to our curated list of favorite books! Here, we've compiled a selection of literary gems that have left a lasting impact on us.</p>
      {/* Stats */}
        <div className='flex flex-col sm:flex-row gap-6 justify-between md:w:3/4 my-14'>
          <div>
            <h3 className='text-3xl font-bold'>800+</h3>
            <p className='text-ba
            '>Book Listing</p>
          </div>
          <div>
            <h3 className='text-3xl font-bold'>550+</h3>
            <p className='text-ba
            '>Register Users</p>
          </div>
          <div>
            <h3 className='text-3xl font-bold'>1200</h3>
            <p className='text-ba
            '>PDF Downloads</p>
          </div>
        </div>

        <Link to="/shop" className='mt-8 block'>
          <button className='bg-green-600 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300 '>Explore More</button>
        </Link>
      </div>
    </div>
  )
}

export default FavBook