// FUTURE ME - Below is the current Projects component which is just a placeholder - DO NOT remove

// const Projects = () => {
//   return ( 
//     <div>
//       Projects
//     </div>
//   )
// }
 
// export default Projects

//=====================================================================

// Below is an adapted version of the Login / Register forms located in pages/Index.jsx - it's here to help only with the design of the Login / Register pages and is not hooked up.


import { useState } from 'react'
import { BiLogoFacebook, BiLogoGoogle } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Projects = () => {
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
    <div className="w-full flex justify-center py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl w-full">
      
        <div>
          <h2 className='form-title'>Login</h2>
          <form>
            <div className='input-wrapper'>
              <label
                className='text-dark'
                htmlFor='email'>Email</label>
              <input
                onChange={inputHandle}
                type='email'
                name='email'
                id='email'
                value={state.email}
                className='px-3 py-2 input-field'
              />
            </div>
            <div className='input-wrapper'>
              <label
                className='text-dark'
                htmlFor='password'>Password</label>
              <input
                onChange={inputHandle}
                type='password'
                name='password'
                id='password'
                value={state.password}
                className='px-3 py-2 input-field'
              />
            </div>
            <div className='py-2'>
              <button
                className='outline-btn py-2 w-full'
              >
                Submit
              </button>
            </div>
            <div className='centre py-2 px-3'>
              <span>or</span>
            </div>
            <div className='py-2'>
              <button
                className='centre outline-btn py-2 w-full'
              >
                <span className='mr-2'>
                  <BiLogoGoogle />
                </span>
                Login with Google
              </button>
            </div>
            <div className='py-2'>
              <button
                className='centre outline-btn py-2 w-full'
              >
                <span className='mr-2'>
                  <BiLogoFacebook />
                </span>
                Login with Facebook
              </button>
            </div>
          </form>
        </div>
      
        <div>
          <h2 className='form-title'>Register</h2>
          <form>
            <div className='input-wrapper'>
              <label
                className='text-dark'
                htmlFor='name'>Name</label>
              <input
                onChange={inputHandle}
                type='text'
                name='name'
                id='name'
                value={state.name}
                className='px-3 py-2 input-field'
              />
            </div>
            <div className='input-wrapper'>
              <label
                className='text-dark'
                htmlFor='email'>Email</label>
              <input
                onChange={inputHandle}
                type='email'
                name='email'
                id='email'
                value={state.email}
                className='px-3 py-2 input-field'
              />
            </div>
            <div className='input-wrapper'>
              <label
                className='text-dark'
                htmlFor='password'>Password</label>
              <input
                onChange={inputHandle}
                type='password'
                name='password'
                id='password'
                value={state.password}
                className='px-3 py-2 input-field'
              />
            </div>
            <div className='py-2'>
              <button
                className='outline-btn py-2 w-full'
              >
                Submit
              </button>
            </div>
            <div className='centre py-2 px-3'>
              <span>or</span>
            </div>
            <div className='py-2'>
              <button
                className='centre outline-btn w-full py-2'
              >
                <span className='mr-2'>
                  <BiLogoGoogle />
                </span>
                Login with Google
              </button>
            </div>
            <div className='py-2'>
              <button
                className='centre outline-btn w-full py-2'
              >
                <span className='mr-2'>
                  <BiLogoFacebook />
                </span>
                Login with Facebook
              </button>
            </div>
          </form>
        </div>

      </div>
      <Link to='/design/64/edit'>Main Edit Page</Link>
    </div>
  )
}
    

export default Projects
