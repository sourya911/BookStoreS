import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa6';
import { Avatar } from 'flowbite-react';
import propic from '../assets/images/profile.jpg'

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
    <div>
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl py-8 px-4 md:m-5 rounded-lg border bg-white'>
            <div className='space-y-6'>
                <div className=' text-amber-500 flex gap-3'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>I love this book store app! It's incredibly user-friendly and has a vast selection of books. The search feature is excellent, making it easy to find exactly what I'm looking for. </p>
                    <Avatar
        alt="avatar of Jese"
        img={propic}
        rounded className='w-10 mb-4'
      />
      <h5 className='text-lg font-medium'>Joe King</h5>
      <p className='text-base'>CEO of ABB company</p>
                </div>
            </div>
        </SwiperSlide>
       
        <SwiperSlide className='shadow-2xl py-8 px-4 md:m-5 rounded-lg border bg-green-400'>
            <div className='space-y-6'>
                <div className=' text-amber-500 flex gap-3'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>I love this book store app! It's incredibly user-friendly and has a vast selection of books. The search feature is excellent, making it easy to find exactly what I'm looking for. </p>
                    <Avatar
        alt="avatar of Jese"
        img={propic}
        rounded className='w-10 mb-4'
      />
      <h5 className='text-lg font-medium'>Joe King</h5>
      <p className='text-base'>CEO of ABB company</p>
                </div>
            </div>
        </SwiperSlide>
       
        <SwiperSlide className='shadow-2xl py-8 px-4 md:m-5 rounded-lg border bg-white'>
            <div className='space-y-6'>
                <div className=' text-amber-500 flex gap-3'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>I love this book store app! It's incredibly user-friendly and has a vast selection of books. The search feature is excellent, making it easy to find exactly what I'm looking for. </p>
                    <Avatar
        alt="avatar of Jese"
        img={propic}
        rounded className='w-10 mb-4'
      />
      <h5 className='text-lg font-medium'>Joe King</h5>
      <p className='text-base'>CEO of ABB company</p>
                </div>
            </div>
        </SwiperSlide>
       
        <SwiperSlide className='shadow-2xl py-8 px-4 md:m-5 rounded-lg border bg-green-400'>
            <div className='space-y-6'>
                <div className=' text-amber-500 flex gap-3'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>I love this book store app! It's incredibly user-friendly and has a vast selection of books. The search feature is excellent, making it easy to find exactly what I'm looking for. </p>
                    <Avatar
        alt="avatar of Jese"
        img={propic}
        rounded className='w-10 mb-4'
      />
      <h5 className='text-lg font-medium'>Joe King</h5>
      <p className='text-base'>CEO of ABB company</p>
                </div>
            </div>
        </SwiperSlide>
       
        <SwiperSlide className='shadow-2xl py-8 px-4 md:m-5 rounded-lg border bg-white'>
            <div className='space-y-6'>
                <div className=' text-amber-500 flex gap-3'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>I love this book store app! It's incredibly user-friendly and has a vast selection of books. The search feature is excellent, making it easy to find exactly what I'm looking for. </p>
                    <Avatar
        alt="avatar of Jese"
        img={propic}
        rounded className='w-10 mb-4'
      />
      <h5 className='text-lg font-medium'>Joe King</h5>
      <p className='text-base'>CEO of ABB company</p>
                </div>
            </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
    </div>
  )
}

export default Review