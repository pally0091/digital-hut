import React from 'react';

const Product = ({product}) => {
    const {brand, description, price, thumbnail, title} =product;
    return (
        <div className='border-2 mx-5 w-1/4 h-96'>
            <div className='p-1 w-full h-2/5'>
                <img className='w-full h-full' src={thumbnail}></img>
            </div>
            <h1>{title}</h1>
            <h3>{brand}</h3>
            <p>{description}</p>
            <button>Buy Now : {price}</button>
        </div>
    );
};

export default Product;