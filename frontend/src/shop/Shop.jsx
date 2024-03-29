import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://book-store-s.vercel.app/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  });
  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">All Books are here</h2>

      <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 my-12 gap-8">
        {books.map((book) => (
          <Card key={book._id}>
            <img src={book.image_url} alt="" className="h-96" />

            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{book.title}</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>Here are the Biggest enterprice technology aquisitions of 2022 so far, in reverse chronological order.</p>
            </p>

            <button className="bg-green-600 font-semibold text-white py-2 rounded">Buy Now</button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
