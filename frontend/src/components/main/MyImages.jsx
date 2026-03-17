import Image from "../image"

const MyImages = () => {
  return (  
    <div>
      <div className='w-full h-[40px] centre  uppercase border-2 border-light text-light bg-main hover:text-main hover:bg-light rounded mb-3 transitioning'>
        <label 
          className='font-medium cursor-pointer'
          htmlFor='image'
        >
          Upload Image
        </label>
        <input 
          type='file' 
          id='image'
          className='hidden'
        />
      </div>
      <div className='h-[80vh] overflow-x-auto flex justify-start items-start scrollbar-hide'>
        <Image />
      </div>
    </div>
  )
}
 
export default MyImages