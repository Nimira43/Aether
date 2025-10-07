import { useState } from 'react'
import { LiaTimesSolid } from 'react-icons/lia'

const Index = () => {
  const [show, setShow] = useState(false)
  const [state, setState] = useState({
    name: '',
    email: '',
    password: ''
  })

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

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
        <div className='w-[350px] bg-light m-auto px-6 py-4 relative border border-grey-medium shadow-md'>
          <div 
            onClick={() => setShow(false)}
            className='absolute right-4 top-4 text-xl cursor-pointer text-grey-dark'
          >
            <LiaTimesSolid />
          </div>
          <h2 className='text-center pb-4 logo text-main text-4xl'>Login / Register</h2>
          <form>
            <div className='input-wrapper'>
              <label htmlFor='email'>Email</label>
              <input 
                onChange={inputHandle}
                type='email' 
                name='email'
                id='email' 
                value={state.email}
                className='input-field' 
              />
            </div>
            <div className='input-wrapper'>
              <label htmlFor='password'>Password</label>
              <input 
                onChange={inputHandle}
                type='password' 
                name='password'
                id='password' 
                value={state.password}
                className='input-field' 
              />
            </div>
            <div className='py-4'>
              <button
                className='dark-btn w-full'
              >
                Submit
              </button>
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
          <button className='dark-btn w-48'>Register</button>
        </div>
      </div>

    </div>
  )
}

export default Index
