const Home = () => {
  return ( 
    <div className='pt-1 pl-3'>
      <div className='w-full centre h-[250px] bg-main-medium relative rounded overflow-hidden'>
        <button 
          className='main-btn px-4 overflow-hidden absolute top-3 right-3'
        >
          Custom Size
        </button>
        
        <div>
          <h2 className='text-3xl pb-10 pt-6 font-medium text-light'>What will you create today?</h2>
        </div>
      </div>
    </div>
   )
}
 
export default Home