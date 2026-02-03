import { useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import CreateComponent from './CreateComponent'

const CreateDesign = () => {
  const ref = useRef()
  const location = useLocation()
  const navigate = useNavigate()
  const navState = location.state
  const params = new URLSearchParams(location.search)
  const width = navState?.width || params.get('width')
  const height = navState?.height || params.get('height')

  if (!width || !height) {
    navigate('/')
    return null
  }

  const obj = {
    name: 'main_frame',
    type: 'rect',
    id: Math.floor((Math.random() * 100) + 1),
    height: Number(height),
    width: Number(width),
    z_index: 1,
    colour: '#2965dc',
    image: ''
  }

  return (
    <div className='w-screen h-screen centre relative'>
      <div ref={ref} className='relative w-auto h-auto overflow-auto'>
        <CreateComponent info={obj} current_component={{}} />
      </div>
    </div>
  )
}

export default CreateDesign
