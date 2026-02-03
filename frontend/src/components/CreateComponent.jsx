const CreateComponent = ({ info, current_component}) => {
  let html = ''

  if (info.name === 'main_frame') {
    html =
      <div
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
  
  return html
}
 
export default CreateComponent