const Element = ({ id, info, exId }) => {
  return (
    <>
      {
        exId ? (
          <>
            <div
              onMouseDown={(info.resizeElement(exId, info))}  
              className='hidden absolute group-hover:block -bottom-[3px] -right-[3px] w-[10px] h-[10px] cursor-nesw-resize bg-main z-[99999]'
            >
            </div>  
            <div
              onMouseDown={(info.resizeElement(exId, info))}
              className='hidden absolute group-hover:block -top-[3px] -right-[3px] w-[10px] h-[10px] cursor-nesw-resize bg-main z-[99999]'
            >
            </div>
            <div
              onMouseDown={(info.resizeElement(exId, info))}  
              className='hidden absolute group-hover:block -bottom-[3px] -left-[3px] w-[10px] h-[10px] cursor-nesw-resize bg-main z-[99999]'
            >

            </div>
          </>
        ): (
          <>
            <div
              onMouseDown={(info.resizeElement(id, info))}
              className='hidden absolute group-hover:block -bottom-[3px] -right-[3px] w-[10px] h-[10px] cursor-nesw-resize bg-main z-[99999]'>
            </div>
            <div
              onMouseDown={(info.resizeElement(id, info))}
              className='hidden absolute group-hover:block -top-[3px] -right-[3px] w-[10px] h-[10px] cursor-nesw-resize bg-main z-[99999]'
            >
            </div>
            <div
              onMouseDown={(info.resizeElement(id, info))}
              className='hidden absolute group-hover:block -bottom-[3px] -left-[3px] w-[10px] h-[10px] cursor-nesw-resize bg-main z-[99999]'>
            </div>
          </>   
        )
      }
      <div
        onMouseDown={(info.rotateElement(id, info))}
        className='hidden absolute group-hover:block -top-[3px] -left-[3px] w-[10px] h-[10px] cursor-nesw-resize bg-support z-[99999]'>
      </div>
    </>
  )
}

export default Element
