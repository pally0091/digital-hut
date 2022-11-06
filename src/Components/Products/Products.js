import React from 'react';
import CategoriesP from './CategoriesP';
import {useLoaderData} from 'react-router-dom'
import Product from './Product';

const Products = () => {
    const products = useLoaderData();
    
    console.log(products.products)
    return (
        <div className='flex'>
            <div className='w-2/12'>
            <CategoriesP></CategoriesP>
            </div>
            <div className='flex flex-row flex-wrap mx-auto border-2 justify-around w-9/12'>
                {
                    products.products.map((product)=> <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;