export default function Layout() {
  return (
    <div className='bg-light min-h-screen w-full'>
      <div className='bg-main shadow-md'>
        <div className='w-[93%] m-auto py-3'>
          <div className='flex justify-between items-center'>
            <div className='w-[80px] h-[40px]'>
              <h1 className='logo text-light text-4xl'>Aether</h1>
            </div>
            <div className='flex gap-4'>
              <button 
                className='main-btn'
              >
                Login
              </button>
              <button 
                className='main-btn'
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}