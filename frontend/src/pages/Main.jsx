import Header from '../components/Header'
import { IoColorPaletteOutline } from 'react-icons/io5'
import { PiShapes } from 'react-icons/pi'
import { RiGalleryUploadLine } from 'react-icons/ri'
import { RxText } from 'react-icons/rx'
import { LiaProjectDiagramSolid } from 'react-icons/lia'
import { GoImage } from 'react-icons/go'
import { TbBackground } from 'react-icons/tb'
import { FiChevronLeft } from 'react-icons/fi'
import { useState } from 'react'

const Main = () => {
  const [state, setState] = useState('')
  const [show, setShow] = useState({
    status: true,
    name: ''
  })

  const setElements = (type, name) => {
    setState(type)
    setShow({
      state: false,
      name
    })
  } 

  return (  
    <div className='mni-w-screen h-screen bg-black'>
      <Header />
      <div className='flex h-[calc(100%-60px)] w-screen'>
        <div className='w-[80px] bg-main z-50 h-full text-light overflow-y-auto'>
          
          <div
            onClick={() => setElements('design', 'design')}
            className={`w-full h-[80px] cursor-pointer centre flex-col gap-1 hover:text-main hover:bg-light transitioning`}
          >
            <span className='text-2xl'>
              <IoColorPaletteOutline />
            </span>
            <span className='text-xs font-medium'>Design</span>
          </div>

          <div
            onClick={() => setElements('shape', 'shape')}
            className={`w-full h-[80px] cursor-pointer centre flex-col gap-1 hover:text-main hover:bg-light transitioning`}
          >
            <span className='text-2xl'>
              <PiShapes />
            </span>
            <span className='text-xs font-medium'>Shapes</span>
          </div>

          <div
            onClick={() => setElements('image', 'uploadImage')}
            className={`w-full h-[80px] cursor-pointer centre flex-col gap-1 hover:text-main hover:bg-light transitioning`}
          >
            <span className='text-2xl'>
              <RiGalleryUploadLine />
            </span>
            <span className='text-xs font-medium'>Upload</span>
          </div>

          <div
            onClick={() => setElements('text', 'text')}
            className={`w-full h-[80px] cursor-pointer centre flex-col gap-1 hover:text-main hover:bg-light transitioning`}
          >
            <span className='text-2xl'>
              <RxText />
            </span>
            <span className='text-xs font-medium'>Text</span>
          </div>

          <div
            onClick={() => setElements('project', 'projects')}
            className={`w-full h-[80px] cursor-pointer centre flex-col gap-1 hover:text-main hover:bg-light transitioning`}
          >
            <span className='text-2xl'>
              <LiaProjectDiagramSolid />
            </span>
            <span className='text-xs font-medium'>Project</span>
          </div>

          <div
            onClick={() => setElements('initImage', 'images')}
            className={`w-full h-[80px] cursor-pointer centre flex-col gap-1 hover:text-main hover:bg-light transitioning`}
          >
            <span className='text-2xl'>
              <GoImage />
            </span>
            <span className='text-xs font-medium'>Images</span>  
          </div>
          
          <div
            onClick={() => setElements('background', 'background')}
            className={`w-full h-[80px] cursor-pointer centre flex-col gap-1 hover:text-main hover:bg-light transitioning`}>
            <span className='text-2xl'>
              <TbBackground />
            </span>
            <span className='text-xs font-medium'>Background</span>
          </div>
        </div>

        <div className='h-full w-[calc(100%-75px)]'>
          <div
            className={`
              ${show.status
                ? 'p-0 -left-[350px]'
                : 'px-8 left-[75px] p-5'
              } bg-light h-full fixed transition-all w-[350px] z-30 duration-700'
            `}
          >
            <div
              onClick={() => setShow({name: '', status: true })}
              className='centre absolute bg-main w-[20px] -right-2 text-light top-[40%] cursor-pointer h-[100px] rounded-full'>
              <FiChevronLeft />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
 
export default Main