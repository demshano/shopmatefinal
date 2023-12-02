import '../styles/header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (

  
      <nav className='bg-slate-800 text-white flex justify-between w-[350px] mx-auto mt-[20px] rounded h-[40px] items-center gap-8 p-0 px-4 
      font-bold 2xl:w-[1200px] xl:w-[1000px] lg:w-[800px] md:w-[600px] sm:w-[450px]'>


        <Link to='/'>Shop Mate</Link>

          <ul className='p-0 m-0 flex gap-4'>

              <li>
              <Link className='link' to='/'>Home</Link>
              </li>


              <li>
              <Link className='link' to='cart'>Cart</Link>
              </li>

              <li>
                <Link to='cart'>cart items: 2</Link>
              </li>
          </ul>

      
      
      </nav>

  
  
  )
}
