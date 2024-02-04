import React, { useState } from 'react'
import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Textarea,
  Select,
} from "flowbite-react";
import { useLoaderData, useParams } from 'react-router-dom';


const EditBooks = () => {
  const {id}=useParams()
  const {title, authorname, image_url, book_pdf_url, book_description}=useLoaderData()
  
  const bookCategory = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
  ];

  const [selectedCategory, setSelectedCategory] = useState(bookCategory[0]);

  const handleCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const title = form.title.value;
    const authorname = form.authorname.value;
    const image_url = form.image_url.value;
    const category = form.category.value;
    const book_description = form.book_description.value;

    const bookObj = { title, authorname, image_url, category, book_description };

    fetch(`https://book-store-s.vercel.app/book/${id}`,{
      method:"PATCH",
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify(bookObj)
    }).then(res => res.json()).then(data=>{
      alert('Book Data is Updated Successfully!!');
    })
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update A book</h2>

      <form
        onSubmit={handleUpdate}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        {/* 1 */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="title" value="Book Title" />
            </div>
            <TextInput
              id="title"
              name="title"
              placeholder="Book Name"
              defaultValue={title}
              required
              type="text"
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorname" value="Author Name" />
            </div>
            <TextInput
              id="authorname"
              name="authorname"
              placeholder="Author Name"
              defaultValue={authorname}
              required
              type="text"
            />
          </div>
        </div>

        {/* 2 */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="image_url" value="Book Image URL" />
            </div>
            <TextInput
              id="image_url"
              name="image_url"
              placeholder="Book Image URL"
              defaultValue={image_url}
              required
              type="text"
            />
          </div>

          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>

            <Select
              name="category"
              id="inputState"
              className="w-full rounded"
              value={selectedCategory}
              onChange={handleCategory}
            >
              {bookCategory.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>

        <div>
          <div className="mb-2 bloack">
            <Label htmlFor="book_description" value="Book Description" />
          </div>
          <Textarea
            id="book_description"
            name="book_description"
            placeholder="Enter Book Description"
            defaultValue={book_description}
            className="w-full"
            rows={6}
            required
            type="text"
          />
        </div>

        <div>
          <div className="mb-2 bloack">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>

          <TextInput
            id="bookPDFURL"
            placeholder="book pdf url"
            defaultValue={book_pdf_url}
            name="bookPDFURL"
            required
            type="text"
          />
        </div>

        <Button type="submit">Update Book</Button>
      </form>
    </div>
  );
}

export default EditBooks
