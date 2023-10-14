import React from 'react'

const CreateProfie = () => {
    return (

        <div className='absolute top-0 left-0 w-full h-full flex justify-center bg-[#20132EC1] pt-10 z-10'>
            <div className='w-9/12 max-h-[300px] pb-[30px] justify-center gap-10 items-center max-md:flex-col flex bg-gray-100 relative  z-11 '>
                <div>

                <div className='w-[70px] h-[70px] hover:bg-gray-300 border-black  rounded-full border-2  flex justify-center items-center  text-3xl'>
                    <i className="fa-regular fa-plus fa-2xl" ></i>
                </div>



                <p className='text-xl'>Create ID</p>


                </div>
              

                <div className='text-xl'>
                    or
                </div>
                <div className='text-2xl border-2 hover:bg-gray-300 w-[100px] p-2 text-center border-black  rounded-xl'>
                    Login
                </div>

                <div  style={{ cursor: 'pointer' }} className='absolute hover:text-blue-400 bottom-5 left-[45%]'>
                 Skip <i className="fa-solid fa-chevron-right fa-sm" style={{style:"#7a7c7f"}}></i><i className="fa-solid fa-chevron-right fa-sm" style={{style:"#7a7c7f"}}></i>
                </div>



            </div>


        </div>
    )
}

export default CreateProfie
