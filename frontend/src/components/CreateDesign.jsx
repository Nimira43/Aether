import { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import CreateComponent from './CreateComponent'

const CreateDeign = () => {
  const ref = useRef()
  const { state } = useLocation()
  
  return ( 
    <div className='w-screen h-screen centre relative'>
      <div
        ref={ref}  
        className='relative w-auto h-auto overflow-auto'
      >
        <CreateComponent />
      </div>
    </div>
  )
}
 
export default CreateDeign