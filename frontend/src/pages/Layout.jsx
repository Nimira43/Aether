import { useState } from 'react'
import { Link } from 'react-router-dom'

const Layout = () => {
  const [show, setShow ] = useState(false)

  return (
    <div className='bg-light min-h-screen w-full'>
      <div className='bg-main shadow-md fixed left-0 top-0 w-full z-20'>
        <div className='w-[93%] m-auto py-3'>
          <div className='just-between'>
            <div className='w-[80px] h-[40px]'>
              <h1 className='logo text-light text-4xl'>Aether</h1>
            </div>
            <div className='relative centre gap-4'>
              <button 
                className='main-btn overflow-hidden'
              >
                Create
              </button>
              <div 
                onClick={() => setShow(!show)}              
                className='cursor-pointer'
              >
                <img 
                  className='w-[45px] h-[45px] rounded-full'
                  src='/user.jpg' 
                  alt='user'
                />
              </div>
              <div className={`absolute top-[60px] right-0 w-[250px] bg-light p-3 border-2 border-main hover-transition shadow-md ${
                show
                  ? 'visible opacity-100'
                  : 'invisible opacity-30'
              }`}>
                <div className='px-2 py-2 centre-items justify-start gap-5'>
                  <img 
                    className='w-[40px] h-[40px] rounded-full'
                    src='/user.jpg' 
                    alt='user'
                  />
                  <div className='centre-justify flex-col item-start'>
                    <span className='text-grey-dark font-medium text-md'>Victoria</span>
                    <span className='text-grey-dark'>victoria@user.com</span>
                  </div>
                </div>
                <ul className='text-grey'>
                  <li>
                    <Link className='p-2 cursor-pointer'>
                      <span>Settings</span>
                    </Link>
                  </li>
                  <li>
                    <Link className='p-2 cursor-pointer'>
                      <span>Logout</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex mt-16'>
        <div className='sidebar w-[300px] p-5 h-[calc(100vh-70px)] fixed bg-main'>
          <div className='px-2 py-2 centre-items justify-start gap-5 mb-3'>
            <img 
              className='w-[40px] h-[40px] rounded-full'
              src='/user.jpg' 
              alt='user'
            />
            <div className='centre-justify flex-col items-start'>
              <span className='text-light text-md font-medium'>Victoria</span>
              <span className='text-light text-sm uppercase'>Admin</span>
            </div>
            <ul className='p-4 flex flex-col gap-2'>
              <li>
                <Link />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout