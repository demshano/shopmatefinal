import React from 'react';
import { CartBox } from '../components';

export const Cart = () => {
  const cartProducts = [
    { id: 1, name: 'Sony Wh-Ch510 Bluetooth Wireless', price: 149, image: '/assets/images/1001.png' },
    { id: 2, name: 'boAt Rockerz 450', price: 49, image: '/assets/images/1002.png' },
  ];

  return (
    <div>
      <div className='flex justify-center items-center py-4 text-2xl font-bold'>
        <p>Cart Item:</p>
        <p>2</p>
      </div>

      <div>
        {cartProducts.map((cartProduct) => (
          <CartBox key={cartProduct.id} cartProduct={cartProduct} />
        ))}
      </div>
    </div>
  );
};
        



              
            

          

              





{/* <div className='flex flex-col justify-between'>
            <img className='w-40' src={products[0].image} alt="/" />
          </div>

          <div className='flex flex-col justify-between'>
            <p>{products[0].name}</p>
          </div>

          <div className='flex flex-col justify-between'>
            <p>${products[0].price}</p>
          </div>

          <div className='flex flex-col justify-between '>
            <button className='w-28 bg-red-600 rounded-md py-2 text-white font-semibold'>Remove</button>
          </div> */}

