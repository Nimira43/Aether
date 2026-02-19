import { Link } from 'react-router-dom'

const Header = () => {
  return (  
    <div className='h-[60px] bg-main w-full shadow-md'>
        <div className='just-between px-10 text-light h-full'>
          <Link to='/'>
            <span className='logo text-3xl'>Aether</span>
          </Link>

          <div className='centre gap-2'>
            <button className='main-btn px-3 py-[6px] outline-none'>
              Save
            </button>
            <button className='main-btn px-3 py-[6px] outline-none'>
              Download
          </button>
          </div>
        
        </div>
      </div>
  )
}
 
export default Header