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
import TemplateDesign from '../components/main/TemplateDesign'
import MyImages from '../components/main/MyImages'
import Projects from '../components/Projects'
import Image from '../components/image'
import CreateComponent from '../components/CreateComponent'

const Main = () => {
  const [state, setState] = useState('')
  const [currentComponent, setCurrentComponent] = useState('')
  const [colour, setColour] = useState('')
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

  const [components, setComponents] = useState([
    {
      name: 'main_frame',
      type: 'rect',
      id: Math.floor((Math.random() * 100) + 1),
      height: 500,
      width: 650,
      z_index: 1,
      colour: '#fff',
      image: '',
      setCurrentComponent: (a) => setCurrentComponent(a)
    }
  ])

  const moveElement = () => {
    console.log('Move Element')
  }

  const resizeElement = () => {
    console.log('Resize Element')
  }

  const rotateElement = () => {
    console.log('Rotate Element')
  }
  
  const removeComponent = () => {
    console.log('Remote Component')
  }

  return (  
    <div className='min-w-screen h-screen bg-black'>
      <Header />
      <div className='flex h-[calc(100%-60px)] w-screen'>
        <div className='w-[80px] bg-main z-50 h-full text-light overflow-y-auto'>
          
          <div
            onClick={() => setElements('design', 'design')}
            className={`
              ${show.name === 'design' ? 'bg-dark' : ''}  
              w-full h-[80px] cursor-pointer centre flex-col gap-1 hover:bg-dark transitioning
            `}
          >
            <span className='text-2xl'>
              <IoColorPaletteOutline />
            </span>
            <span className='text-xs font-medium'>Design</span>
          </div>

          <div
            onClick={() => setElements('shape', 'shape')}
            className={`
              ${show.name === 'shape' ? 'bg-dark' : ''}  
              w-full h-[80px] cursor-pointer centre flex-col gap-1 hover:bg-dark transitioning
            `}
          >
            <span className='text-2xl'>
              <PiShapes />
            </span>
            <span className='text-xs font-medium'>Shapes</span>
          </div>

          <div
            onClick={() => setElements('image', 'uploadImage')}
            className={`
              ${show.name === 'uploadImage' ? 'bg-dark' : ''}  
              w-full h-[80px] cursor-pointer centre flex-col gap-1 hover:bg-dark transitioning
            `}
          >
            <span className='text-2xl'>
              <RiGalleryUploadLine />
            </span>
            <span className='text-xs font-medium'>Upload</span>
          </div>

          <div
            onClick={() => setElements('text', 'text')}
            className={`
              ${show.name === 'text' ? 'bg-dark' : ''}  
              w-full h-[80px] cursor-pointer centre flex-col gap-1 hover:bg-dark transitioning
            `}
          >
            <span className='text-2xl'>
              <RxText />
            </span>
            <span className='text-xs font-medium'>Text</span>
          </div>

          <div
            onClick={() => setElements('project', 'projects')}
            className={`
              ${show.name === 'projects' ? 'bg-dark' : ''}  
              w-full h-[80px] cursor-pointer centre flex-col gap-1 hover:bg-dark transitioning
            `}
          >
            <span className='text-2xl'>
              <LiaProjectDiagramSolid />
            </span>
            <span className='text-xs font-medium'>Project</span>
          </div>

          <div
            onClick={() => setElements('initImage', 'images')}
            className={`
              ${show.name === 'images' ? 'bg-dark' : ''}  
              w-full h-[80px] cursor-pointer centre flex-col gap-1 hover:bg-dark transitioning
            `}
          >
            <span className='text-2xl'>
              <GoImage />
            </span>
            <span className='text-xs font-medium'>Images</span>  
          </div>
          
          <div
            onClick={() => setElements('background', 'background')}
            className={`
              ${show.name === 'background' ? 'bg-dark' : ''}  
              w-full h-[80px] cursor-pointer centre flex-col gap-1 hover:bg-dark transitioning
            `}
          >
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
              } bg-dark h-full fixed transition-all w-[350px] z-30 duration-700'
            `}
          >
            <div
              onClick={() => setShow({name: '', status: true })}
              className='centre absolute bg-dark w-[20px] -right-2 text-light top-[40%] cursor-pointer h-[100px] rounded-full'>
              <FiChevronLeft />
            </div>
            {
              state === 'design' && (
                <div className='text-light grid grid-cols-2 gap-2'>
                  <TemplateDesign type='main' />
                </div>
              )
            }
            {
              state === 'shape' && (
                <div className='text-light grid grid-cols-3 gap-2'>
                  <div className='h-[90px] bg-light cursor-pointer'></div>
                  <div className='h-[90px] bg-light cursor-pointer rounded-full'></div>
                  <div 
                    className='h-[90px] bg-light cursor-pointer'
                    style={{clipPath: 'polygon(50% 0, 100% 100%, 0 100%)'}}
                  ></div>
                </div>
              )
            }
            {
              state === 'image' && (
                <MyImages />
              )
            }
            {
              state === 'text' && (
                <div>
                  <div className='grid grid-cols-1 gap-2'>
                    <div className='bg-light cursor-pointer font-medium p-3 text-dark text-xl rounded-sm'>
                      <h2>Add Text</h2>
                    </div>
                  </div>
                </div>
              )
            }
            {
              state === 'project' && (
                <Projects />
              )
            }
            {
              state === 'initImage' && (
                <div className='text-light h-[88vh] overflow-x-auto flex justify-start items-start scrollbar-hide'>
                  <Image />
                </div>
              )
            }
            {
              state === 'background' && (
                <div className='text-light h-[88vh] overflow-x-auto flex justify-start items-start scrollbar-hide'>
                  <div className='grid grid-cols-2 gap-2'> 
                    {
                      [1, 2, 3, 4, 5, 6].map((img, i) => (
                        <div
                          key={i}
                          className='w-full h-[90px] overflow-hidden rounded-sm cursor-pointer'
                        >
                          <img 
                            src='/dragon.png'
                            alt='Background'
                            className='w-full h-full object-fit bg-light'
                          />
                        </div>
                      ))
                    }
                  </div>
                </div>
              )
            }
          </div>

          <div className='w-full flex h-full'>
            <div className={`
              flex justify-center relative items-center h-full
              ${!currentComponent 
                ? 'w-full'
                : 'w-[calc(100%-250px)] overflow-hidden'
              }
            `}>
              <div className='m-w-[650px] m-h-[500px] flex justify-center items-center overflow-hidden'>
                <div
                  id='mainDesign'
                  className='w-auto relative h-auto'
                >
                  {
                    components.map((c, i) =>
                      <CreateComponent
                        key={i}
                        info={c}
                        currentComponent={currentComponent}
                        removeComponent={removeComponent}
                      />
                    )
                  }
                </div>
              </div>
            </div>

            {
              currentComponent && (
                <div className='h-full w-[250px] text-light bg-main px-3 py-2'>
                  <div className='flex flex-col gap-6 items-start h-full px-3 justify-start'>
                    <div className='flex gap-4 justify-start items-start mt-4'> 
                      <span>Colour:</span>
                      <label
                        className='w-[30px], h-[30px] cursor-pointer rounded' 
                        htmlFor='colour'
                        style={{
                          background: `${currentComponent.colour && currentComponent.colour !== '#fff'
                            ? currentComponent.colour
                            : '#eee'
                          }`
                        }}
                      >
                        <input
                          onChange={(e) => setColour(e.target.value)}
                          type='color'
                          id='colour'
                          className='invisible'
                        />
                      </label>
                    </div>
                  </div>
                </div>
              )
            }
          </div>

        </div>

      </div>
    </div>
  )
}
 
export default Main