import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategoriesP = () => {
    const [category, setCategory] = useState([]);

    useEffect(()=> {
        fetch('https://dummyjson.com/products/categories')
         .then(res => res.json())
         .then(data => setCategory(data))
    }, []);
    return (
        <div className="">
      {
            category.map(cat => <h1 className="bg-blue-200 capitalize text-center rounded mt-2 p-2" key={cat}><Link to={`/category/${cat}`}>{cat}</Link></h1>)
          }
        
      </div>
    );
};

export default CategoriesP;