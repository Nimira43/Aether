export default function TemplateDesign() {
  return (
    <>
      {
        [1, 2, 3, 4].map((design, i) => (
          <div className={`group w-full rounded-sm overflow-hidden bg-light cursor-pointer`}> 
            <img
              className='w-full h-full'
              src='/dragon.png'
              alt="Dragon"
            />
          </div>
        ))
      }
    </>
  )
}