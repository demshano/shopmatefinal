import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
export const CartBox = ({cartProduct}) => {

    const dispatch = useDispatch();
     const {image , name , price} = cartProduct;

    

  return (

    <div className='w-full py-[50px] px-20'>

            

            <div className='grid md:grid-cols-4 sm:grid-row-4 bg-slate-300 px-4 py-2 rounded-lg items-center'>

            
                        
                    <div className='flex md:flex-col md:justify-between sm:flex-row sm:justify-center justify-center'>
                        <img className='w-40' src={image} alt="/" />
                    </div>

                    <div className='flex md:flex-col md:justify-between sm:flex-row sm:justify-center justify-center text-center'>
                        <p>{name}</p>
                    </div>

                    <div className='flex md:flex-col md:justify-between sm:flex-row sm:justify-center justify-center'>
                        <p>${price}</p>
                    </div>

                    <div className='flex md:flex-col md:justify-between sm:flex-row sm:justify-center justify-center'>
                        <button onClick={()=>dispatch(remove(cartProduct))} className='w-28 bg-red-600 rounded-md py-2 text-white font-semibold'>Remove</button>
                    </div>

            </div>
    </div>
    
  )
}
