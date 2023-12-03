import { useSelector } from 'react-redux';
import { CartBox } from '../components';

export const Cart = () => {
  
const cartProducts = useSelector(state => state.cartState.cartList);
const total = useSelector(state => state.cartState.total);

  return (
    <div>
      <div className='flex justify-center items-center py-4 text-2xl font-bold'>

      <div className='flex'>
        <p>Cart Item: </p>
        <p>{cartProducts.length}</p>
      </div>

      <div className='flex px-4'>
        <p>Total Price: </p>
        <p>${total}</p>
      </div>

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

