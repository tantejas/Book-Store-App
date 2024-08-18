import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // You can handle the form submission here (e.g., sending data to your backend)
  };

  return (
    <div>
      {/* Login Modal */}
      <dialog id="my_modal_2" className="modal">
        <form
          onSubmit={handleSubmit(onSubmit)}
          method="dialog"
          className="modal-box p-8 rounded-md"
        >
          <button
            type="button"
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            onClick={() => document.getElementById('my_modal_2').close()}
          >
            &times;
          </button>
          <h3 className="font-bold text-xl text-center">Login</h3>
          <div className='mt-6 space-y-4'>
            <div>
              <label htmlFor="email" className='block text-sm font-medium'>Email</label>
              <input
                id="email"
                className='w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-500'
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                placeholder='Enter Your Email'
              />
              {errors.email && (
                <span className="text-red-500 mt-2">{errors.email.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="password" className='block text-sm font-medium'>Password</label>
              <input
                id="password"
                className='w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-500'
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
                placeholder='Enter Your Password'
              />
              {errors.password && (
                <span className="text-red-500 mt-2">{errors.password.message}</span>
              )}
            </div>
          </div>
          <div className='flex mt-8 justify-between items-center'>
            <button
              type="submit"
              className='bg-pink-500 w-full rounded-md px-4 py-2 text-white font-medium hover:bg-pink-700'
            >
              Login
            </button>
          </div>
          <div className="text-center mt-4">
            <p>
              Not Registered?{" "}
              <Link className='text-blue-500 underline' to={"/signup"}>
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Login;
