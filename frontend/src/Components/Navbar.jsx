import React, { useState, useEffect } from 'react';
import Login from './Login';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = (
        <>
            <li><a href="/" className="hover:text-primary">Home</a></li>
            <li><a href="/course" className="hover:text-primary">Course</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            <li><a href="#about" className="hover:text-primary">About</a></li>
        </>
    );

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-base-200 shadow-lg' : 'bg-base-100 shadow-md'}`}>
            <div className='max-w-screen-2xl mx-auto'>
                <div className="navbar h-16"> {/* Adjust height here if needed */}
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-16 6h16"
                                    />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
                            >
                                {navItems}
                            </ul>
                        </div>
                        <a className="text-2xl font-bold text-primary">BookStore</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItems}
                        </ul>
                    </div>
                    <div className="navbar-end flex items-center">
                        <div className="hidden md:block">
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" className="grow" placeholder="Search" />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-5 w-5 opacity-70"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </label>
                        </div>
                        <a className="btn ml-4 bg-pink-500 hover:bg-pink-700"onClick={()=>document.getElementById("my_modal_2").showModal() } on>Login</a>
                        <Login />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
