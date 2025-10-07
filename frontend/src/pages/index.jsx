import { useState } from 'react'

const Index = () => {
  const [show, setShow] = useState(false)

  return (
    <div className='bg-light min-h-screen w-full'>
      <div 
        className={`
          w-screen ${show 
            ? 'visible opacity-30' 
            : 'invisible opacity-30'
          } 
          transition-all duration-500 h-screen fixed bg-light flex justify-center items-center
        `}
      >

      </div>
      <div className='bg-main shadow-md'>
        <div className='w-[93%] m-auto py-3'>
          <div className='flex justify-between items-center'>
            <div className='w-[80px] h-[40px]'>
              <h1 className='logo text-light text-4xl'>Aether</h1>
            </div>
            <div className='flex gap-4'>
              <button className='main-btn'>Login</button>
              <button className='main-btn'>Register</button>
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
