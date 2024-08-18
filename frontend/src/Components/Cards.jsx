import React from 'react';

const Cards = ({ item }) => {
  return (
    <div className="max-w-xs mx-auto">
      <div className="card bg-base-100 shadow-xl hover:scale-105 duration-200">
        <figure className="h-48 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://img.freepik.com/premium-photo/stack-books-with-word-word-top_583952-80797.jpg?ga=GA1.1.253004873.1723917213&semt=ais_hybrid"
            alt="book"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-lg font-semibold">
            {item.title}
            <div className="badge badge-secondary ml-2 text-sm">{item.category}</div>
          </h2>
          
          <div className="card-actions justify-end mt-4">
            <div className="badge badge-outline text-xs">${item.price}</div>
            <div className="badge badge-outline text-xs hover:bg-pink-500">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
