import { useState } from 'react'
import { LiaTimesSolid } from 'react-icons/lia'

const Index = () => {
  const [show, setShow] = useState(false)
  const [state, setState] = useState({
    name: '',
    email: '',
    password: ''
  })

  return (
    <div className='bg-light min-h-screen w-full'>
      <div 
        className={`
          w-screen ${show 
            ? 'visible opacity-100' 
            : 'invisible opacity-30'
          } 
          transition-all duration-500 h-screen fixed bg-light flex justify-center items-center
        `}
      >
        <div className='w-[350px] bg-light m-auto px-6 py-4 relative border border-main shadow-md'>
          <div 
            onClick={() => setShow(false)}
            className='absolute right-4 top-4 text-xl cursor-pointer text-main'
          >
            <LiaTimesSolid />
          </div>
          <h2 className='text-center pb-4 logo text-main text-3xl'>Login / Register</h2>
          <form>
            <div className='flex flex-col gap-3 mb-3 text-grey-dark'>
              <label htmlFor='email'>Email</label>
              <input 
                type='email' 
                name='email'
                id='email' 
                className='px-3 py-2 outline-none border border-grey-medium focus:border-grey-dark' 
              />
            </div>
          </form>
        </div>
      </div>

      <div className='bg-main shadow-md'>
        <div className='w-[93%] m-auto py-3'>
          <div className='flex justify-between items-center'>
            <div className='w-[80px] h-[40px]'>
              <h1 className='logo text-light text-4xl'>Aether</h1>
            </div>
            <div className='flex gap-4'>
              <button 
                className='main-btn'
                onClick={() => setShow(true)}
              >
                Login
              </button>
              <button 
                className='main-btn'
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-full justify-center items-center p-4'>
        <div className='py-[170px] flex justify-center items-center flex-col gap-6'>
          <h2 className='logo text-main text-6xl font-semibold text-center'>Where ideas awaken and colours speak</h2>
          <span className='text-grey-dark font-medium text-xl text-center'>Aether makes it easy to create and share professional designs.</span>
          <button className='dark-btn'>Register</button>
        </div>
      </div>

    </div>
  )
}

export default Index
