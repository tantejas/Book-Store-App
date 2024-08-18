import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    // Handle the form submission (e.g., send data to your backend)
  };

  const handleLoginClick = () => {
    document.getElementById('my_modal_2').showModal();
  };

  const handleCloseModal = () => {
    document.getElementById('my_modal_2').close();
  };

  const handleCloseAndRedirect = () => {
    handleCloseModal();
    navigate('/');  // Redirect to the home page
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="modal-box p-8 rounded-md">
        <button
          type="button"
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={handleCloseAndRedirect}
        >
          &times;
        </button>
        <h3 className="font-bold text-xl text-center">Sign Up</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              id="name"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-500"
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Enter Your FullName"
            />
            {errors.name && <span className="text-red-500 mt-2">{errors.name.message}</span>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              id="email"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-500"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="Enter Your Email"
            />
            {errors.email && <span className="text-red-500 mt-2">{errors.email.message}</span>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
              id="password"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-500"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              placeholder="Enter Your Password"
            />
            {errors.password && <span className="text-red-500 mt-2">{errors.password.message}</span>}
          </div>
          <div className="flex mt-8 justify-between items-center">
            <button
              type="submit"
              className="bg-pink-500 w-full rounded-md px-4 py-2 text-white font-medium hover:bg-pink-700"
            >
              Register
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p>
            Have an Account?{" "}
            <button
              className="underline text-blue-500 cursor-pointer"
              onClick={handleLoginClick}
            >
              Login
            </button>
            <Login />
          </p>
        </div>
      </div>

      {/* Modal for Login */}
      <dialog id="my_modal_2" className="modal">
        <Login />
        <div className="modal-action">
          <button className="btn" onClick={handleCloseModal}>Close</button>
        </div>
      </dialog>
    </div>
  );
};

export default Signup;
