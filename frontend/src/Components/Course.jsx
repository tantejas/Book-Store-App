import React from 'react';
import list from "../../public/list.json";
import Cards from "./Cards";
import {Link} from "react-router-dom"

const Course = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-6 py-12'>
      <div className='mt-24 flex flex-col items-center text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl mb-4'>
          We are Delighted to have you <span className='text-pink-500'>here</span>
        </h1>
        <p className='mt-4 mb-8 max-w-3xl text-gray-700'>
          Discover the joy of reading by exploring our vast collection of books. Whether you're into fiction, non-fiction, or self-improvement, there's something for everyone. Buying a book is an investment in knowledge and entertainment, offering endless adventures at your fingertips. Dive into a new story today and experience the magic of words. With every purchase, you're not just getting a book—you're opening the door to new worlds and possibilities.
        </p>
        <Link to={"/"}>
        <button className='bg-pink-500 hover:bg-pink-700 text-white rounded-lg px-6 py-3 mt-4 shadow-lg transition-all duration-300'>
          Back
        </button>
        
        </Link>
        
      </div>
      <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {list.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Course;
