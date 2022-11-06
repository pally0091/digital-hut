import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex grid items-center grid-cols-2 lg:grid-cols-3">
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <Link
              to="/category/smartphones"
              aria-label="Our product"
              title="Our product"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              to="/home"
              aria-label="Our product"
              title="Our product"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              aria-label="Product pricing"
              title="Product pricing"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              About Us
            </Link>
          </li>
        </ul>
        <Link
          to="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center lg:mx-auto"
        >
          <h1 className="text-4xl text-indigo-900 font-bold">Digital</h1>
          <span className="ml-2 text-2xl font-light tracking-wide text-gray-800 uppercase">
            HUT
          </span>
        </Link>
        <ul className="flex items-center hidden ml-auto space-x-8 lg:flex">
          <li>
            <Link
              to="/login"
              aria-label="LogIn"
              title="Login"
              className="font-medium border-2 border-indigo-900 p-2 hover:bg-indigo-700 hover:text-white tracking-wide text-gray-700 shadow-md transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Sign in
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 shadow-md bg-deep-purple-accent-400 hover:bg-purple-700 "
              aria-label="Register"
              title="Register"
            >
              Sign up
            </Link>
          </li>
        </ul>
        <div className="ml-auto lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg
              className="w-5 text-gray-600"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <svg
                        className="w-8 text-deep-purple-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        stroke="currentColor"
                        fill="none"
                      >
                        <rect
                          x="3"
                          y="1"
                          width="7"
                          height="12"
                        />
                        <rect
                          x="3"
                          y="17"
                          width="7"
                          height="6"
                        />
                        <rect
                          x="14"
                          y="1"
                          width="7"
                          height="6"
                        />
                        <rect
                          x="14"
                          y="11"
                          width="7"
                          height="12"
                        />
                      </svg>
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Company
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg
                        className="w-5 text-gray-600"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav className="text-center">
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="/home"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium text-center  text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/products"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Product
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about"
                        aria-label="Product pricing"
                        title="Product pricing"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/login"
                        aria-label="LogIn"
                        title="Login"
                        className="font-medium w-full border-2 border-indigo-900 p-2 hover:bg-indigo-700 hover:text-white tracking-wide text-gray-700 shadow-md transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Sign in
                      </a>
                    </li>
                    <li>
                      <a
                        href="/register"
                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 shadow-md bg-deep-purple-accent-400 hover:bg-purple-700 "
                        aria-label="Register"
                        title="Register"
                      >
                        Sign up
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
