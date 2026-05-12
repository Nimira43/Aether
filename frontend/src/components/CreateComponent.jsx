const CreateComponent = ({
  info,
  currentComponent,
  removeComponent
}) => {
  const randValue = Math.floor(Math.random() * 100)
  let html = ''

  if (info.name === 'main_frame') {
    html =
      <div
        onClick={() => info.setCurrentComponent(info)}
        className='hover:border-2 hover:border-main shadow-md'
        style={{
          width: info.width + 'px',
          height: info.height + 'px',
          background: info.colour,
          zIndex: info.z_index
        }}
      >
        {
          info.image && (
            <img
              className='w-full h-full'
              src={info.image}
              alt='image'
            />
          )
        }
      </div> 
  }
  
  if (info.name === 'shape' && info.type === 'rect') {
    html = (
      <div
        id={randValue}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          width: info.width + 'px',
          height: info.height + 'px',
          background: info.colour,
          opacity: info.opacity,
          left: info.left + 'px',
          top: info.top + 'px',
          zIndex: info.z_index,
          transform: info.rotate
            ? `rotate(${info.rotate}deg)`
            : 'rotate(0deg)'
        }}
        className='absolute group hover:border-[2px] hover:border-main'

      >

      </div>
    )
  } 

  return html
}
 
export default CreateComponent