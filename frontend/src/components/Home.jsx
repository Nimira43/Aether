import { useState } from 'react'

const Home = () => {
  const [show, setShow] = useState(false)
  const [state, saveState] = useState({
    width: 0,
    height: 0
  })

  const inputHandle = (e) => {
    
  }

  return ( 
    <div className='pt-1 pl-3'>
      <div className='w-full centre h-[250px] bg-main-medium relative rounded overflow-hidden'>
        <button
          onClick={() => setShow(!show)}  
          className='main-btn px-4 overflow-hidden absolute top-3 right-3'
        >
          Custom Size
        </button>

        <form
          className={
            `absolute top-16 right-3 gap-3 w-[250px] bg-light p-4 border-2 border-main transitioning shadow-md ${
              show
                ? 'visible opacity-100'
                : 'invisible opacity-0'
            }`
          }>
          <div className='grid grid-cols-2 pb-4 gap-3'>
            <div className='centre-justify gap-2 flex-col item-start'>
              <label
                htmlFor='width'
                className='text-grey-1 font-medium text-md'
              >
                Width
              </label>
              <input
                onChange={inputHandle}
                type='number'
                name='width'
                id='width'
                className='w-full px-2 py-[4px] input-field text-center'
              />
            </div>
            <div className='centre-justify gap-2 flex-col item-start '>
              <label
                htmlFor='height'
                className='text-grey-1 font-medium text-md'
              >
                Height
              </label>
              <input
                onChange={inputHandle}
                type='number'
                name='height'
                id='height'
                className='w-full px-2 py-[4px] input-field text-center'
              />  
            </div>  
          </div>
          <button 
            className='outline-btn px-4 overflow-hidden w-full'
          >
          Create New Design
        </button>
        </form>        
        <div>
          <h2 className='text-3xl pb-10 pt-6 font-medium text-light'>What will you create today?</h2>
        </div>
      </div>
    </div>
   )
}
 
export default Home