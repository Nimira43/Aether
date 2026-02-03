import { useState } from 'react'
import Carousel from 'react-multi-carousel'
import { Link, useNavigate } from 'react-router-dom'
import 'react-multi-carousel/lib/styles.css'
import { GrTrash } from 'react-icons/gr'

const Home = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const [state, setState] = useState({
    width: 0,
    height: 0
  })

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    },
  }

  const create = () => {
    navigate('/design/create', {
      state: {
        type: 'create',
        width: state.width,
        height: state.height
      }
    })
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
            `absolute top-16 right-3 gap-3 w-[250px] bg-light p-4 border-2 border-main transitioning rounded shadow-md ${
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
            type='button'
            onClick={create}
            className='outline-btn px-4 overflow-hidden w-full'
          >
          Create New Design
        </button>
        </form>        
        <div>
          <h2 className='text-3xl pb-10 pt-6 font-medium text-light'>What will you create today?</h2>
        </div>
      </div>
      <div>
        <h2 className='text-xl py-6 font-semibold text-dark'>Recent Designs</h2>
      </div>
      <div>
        <Carousel
          autoplay={true}
          infinite={true}
          responsive={responsive}
          transitionDuration={500}
        >
          {
            [1, 2, 3, 4, 5, 6, 7, 8].map((d, i) => (
              <div
                key={i}
                className='relative group w-full h-[170px] px-2'>
                <Link
                  className='w-full h-full block bg-main-medium p-4 rounded'
                >
                  <img
                    className='w-full h-full rounded overflow-hidden'
                    src='/smiley.png'
                    alt="Smiley"
                  />
                </Link>
                <div className='absolute hidden cursor-pointer top-1 right-2 text-light p-2 transitioning group-hover:block'>
                  <GrTrash />
                </div>
              </div>
            ))
          }
        </Carousel>
      </div>
    </div>
   )
}
 
export default Home