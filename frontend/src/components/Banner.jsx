import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-blue-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
        <div><BannerCard/></div>
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className="text-5xl font-bold leading-snug text-black">Buy and Sell Books <span className='text-green-500'>for the best Prices</span></h2>
                <p className='md:w-4/5'>Discover a world of wonder between the pages at BookWanderlust where every book is a new adventure waiting to be embarked upon. As passionate purveyors of the written word, we are dedicated to providing you with a curated selection of books that will ignite your imagination, broaden your horizons, and touch your heart.</p>
                <div>
                    <input type="search" name='search' id='search' placeholder='Search A Book' className='py-2 px-2 rounded-s-sm outline-none'/>
                    <button className='bg-green-400 px-6 py-2 text-white font-medium hover:bg-black'>Search</button>
                </div>
            </div>
               
        </div>
    </div>
  )
}

export default Banner