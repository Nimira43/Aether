import { useState } from 'react'

const Home = () => {
  const [show, setShow] = useState(false)

  return ( 
    <div className='pt-1 pl-3'>
      <div className='w-full centre h-[250px] bg-main-medium relative rounded overflow-hidden'>
        <button className='main-btn px-4 overflow-hidden absolute top-3 right-3'>
          Custom Size
        </button>

        <div
          className={
            `absolute top-[60px] right-0 w-[250px] bg-light p-3 border-2 border-main hover-transition shadow-md ${
              show
                ? 'visible opacity-100'
                : 'invisible opacity-30'
            }`
          }>
          <div className='px-2 py-2 centre-items justify-start gap-5'>
            <img 
              className='w-[40px] h-[40px] rounded-full'
              src='/user.jpg' 
              alt='user'
            />
            <div className='centre-justify flex-col item-start'>
              <span className='text-grey-1 font-medium text-md'>Victoria</span>
              <span className='text-grey-1'>victoria@user.com</span>
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
        <div>
          <h2 className='text-3xl pb-10 pt-6 font-medium text-light'>What will you create today?</h2>
        </div>
      </div>
    </div>
   )
}
 
export default Home