import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
// import { ToastContainer, toast } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";

const Home = () => {
  const categories = useLoaderData();

  // const notify = ()=> toast.warning("this is so easy!!!!")

  return (
    <div className="p-5 ">
      {/* <div>
        <button onClick={notify}>Notify</button>
        <ToastContainer></ToastContainer>
      </div> */}
      <div>
        <p className="text-center text-xl text-indigo-800">
          Chose your desired item from{" "}
          <span className="text-red-600">
            <Typewriter
              words={[
                "Smartphones",
                "Laptops",
                "Fragrances",
                "Skincare",
                "Home decoration",
                "Furniture",
                "Lighting",
                "Watches",
                "dresses",
                "automotive",
              ]}
              loop={20}
              cursor
              cursorStyle="->"
              typeSpeed={80}
              delaySpeed={1500}
              deleteSpeed={100}
            ></Typewriter>
          </span>
        </p>
        <h1 className="text-xl font-semibold text-center mt-5 border-2 p-2 shadow-md rounded">
          Here are our categories of products
        </h1>
      </div>
      <div className="lg:flex lg:flex-wrap lg:flex-row lg:justify-center sm:flex sm:flex-col sm:flex-wrap sm:justify-center w-11/12 mx-auto">
        {categories.map((category) => (
          <h1
            className="m-5 bg-indigo-300 shadow-md lg:w-[10%]  p-2 text-center rounded capitalize"
            key={category}
          >
            {category}
          </h1>
        ))}
      </div>
      <div className="lg:w-2/12 sm:w-full border-2 mx-auto rounded shadow-md mt-10 hover:bg-indigo-400 p-2">
        <button className="w-full text-center">
          <Link to="/category/laptops">#- Browse Products -# </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
