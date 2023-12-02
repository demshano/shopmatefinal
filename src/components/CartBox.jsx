export const CartBox = ({cartProduct}) => {

     const {image , name , price} = cartProduct;

     console.log('hello')

  return (

    <div className='w-full py-[50px] px-20'>

            

            <div className='grid grid-cols-4 bg-slate-300 px-4 py-2 rounded-lg items-center'>

            
                        
                    <div className='flex flex-col justify-between'>
                        <img className='w-40' src={image} alt="/" />
                    </div>

                    <div className='flex flex-col justify-between'>
                        <p>{name}</p>
                    </div>

                    <div className='flex flex-col justify-between'>
                        <p>${price}</p>
                    </div>

                    <div className='flex flex-col justify-between '>
                        <button className='w-28 bg-red-600 rounded-md py-2 text-white font-semibold'>Remove</button>
                    </div>

            </div>
    </div>
    
  )
}
