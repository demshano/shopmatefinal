import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    // <div className='w-full bg-slate-900 h-[200px] flex justify-center items-center '>

    //   <div className=' text-fuchsia-500 text-5xl '>
    //     footer
    //   </div>
      
    // </div>

  <div className=" ">

  <div className='w-full bg-slate-900 h-[200px]  mt-[500px]'>

    

  <div className="font-bold flex justify-center">

    <div className="text-white mt-10">
      <Link to='/'>Home</Link>
    </div>

    <div className="text-white px-4  mt-10">
      <Link to='/cart'>Cart</Link>
    </div>

  </div>

  <div className="text-gray-300 text-4xl flex justify-center mt-16 font-bold">
    <p>Shop Mate</p>
  </div>


  </div>


</div>

  )
}
