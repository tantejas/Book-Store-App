import React from 'react';

const Banner = () => {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 flex flex-col md:flex-row items-center md:items-start gap-8 py-12'>
        <div className='w-full md:w-1/2'>
          <div className='space-y-8'>
            <h1 className='mt-20 text-4xl md:text-5xl font-bold leading-tight'>
              Hello, welcome here to learn something <span className='text-pink-500'>new everyday!!!</span>
            </h1>
            <p className='text-lg md:text-xl leading-relaxed'>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit" is a common placeholder text used in design, typesetting, and printing. Known as "Lorem Ipsum," this text is a scrambled version of a passage from "De finibus bonorum et malorum," a work by the Roman philosopher Cicero written in 45 BC. 
            </p>
          </div>
          <div className="mt-8">
            <label className="input input-bordered flex items-center gap-2">
              Email
              <input type="text" className="grow p-2 border rounded-md" placeholder="daisy@site.com" />
            </label>
            <button className="btn mt-5 btn-secondary">Subscribe</button>
          </div>
        </div>
        
        <div className='w-full md:w-1/2 flex justify-center'>
          <img src="/Banner.png" alt="Banner" className=' mt-20 w-3/4 h-auto object-cover rounded-md shadow-lg' />
        </div>
      </div>
    </>
  );
}

export default Banner;
