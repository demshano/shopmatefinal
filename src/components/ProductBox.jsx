import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../store/cartSlice';
import '../styles/productBox.css';
import { useEffect, useState } from 'react';
export const ProductBox = ({product}) => {

  const dispatch = useDispatch();
  const cartProducts = useSelector(state => state.cartState.cartList);
  const [isInCart, setIsInCart] = useState(false);

  const {id,name,price,image} =  product;

  useEffect(()=>{
    const productInCart = cartProducts.find(item => item.id === id);

    if(productInCart)
    {
      setIsInCart(true);
    }
    else
    {
      setIsInCart(false);
    }
  },[cartProducts, id])

  return (
    
    <div className="mainBox rounded w-[350px] flex flex-col justify-center my-[20px] mx-[20px]">

      <div className="imageBox">
          <img className='border-t-4 border-yellow-400' src={image} alt={name} />
      </div>

      <div className="detailBox">

          <p className='text-center'>{name}</p>

          <div className="underDetailBox grid grid-cols-2 gap-8 py-4 px-4 text-center items-center ">
              <p className='bg-red-800  inline-block  text-white font-extrabold w-[50px] p-1   rounded '>${price}</p>
              {isInCart ? (<button onClick={()=> dispatch(remove(product)) } className='bg-red-800 inline-block  p-1 rounded text-white '>Remove</button>) : (<button onClick={()=> dispatch(add(product)) } className='bg-sky-600 inline-block  p-1 rounded text-white '>Add to cart</button>)}
              
          </div>

      </div>
  </div>


  
  )
}
