import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const BestSellerBooks = () => {
    const[books,setBooks]=useState([]);

    useEffect(()=>{
        fetch('https://book-store-s-front.vercel.app').then(res=>res.json().then(data=>setBooks(data)))
    },[])
  return (
    <div>
        <BookCards books={books} headline="Best Seller Books"/>
    </div>
  )
}

export default BestSellerBooks
