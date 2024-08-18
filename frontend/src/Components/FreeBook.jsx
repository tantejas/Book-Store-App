import React from 'react';
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

const FreeBook = () => {
    const filterData = list.filter((data) => data.category === "Free");
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1280, // Large screens
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024, // Medium screens
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // Small screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <h1 className='font-bold text-2xl pb-4 text-center'>Free Offered Courses</h1>
                <p className='pb-6 text-center text-gray-600'>Explore our range of free courses that cover various topics. Start learning today!</p>
            </div>
            <div className='slider-container mx-auto px-4 md:px-20'>
                <Slider {...settings}>
                    {filterData.map((item) => (
                        <div key={item.id} className='p-4'>
                            <div className='h-full bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300'>
                                <Cards item={item} />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default FreeBook;
