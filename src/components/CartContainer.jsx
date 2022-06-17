import React from 'react'
import {MdOutlineKeyboardBackspace} from 'react-icons/md';
import {RiRefreshFill} from 'react-icons/ri';

import { motion } from 'framer-motion';

const CartContainer = () => {
  return (
    <div className='fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex
        flex-col z-[101]'>
        <div className='w-full flex items-center justify-between p-4 cursor-pointer'>
           <motion.div
           whileTap={{scale : 0.75}}
           >
                <MdOutlineKeyboardBackspace 
                    className='text-textColor text-3xl'/>
            </motion.div> 

                <motion.p whileTap={{scale : 0.75}}
                 className='text-textColor text-lg font-semibold'>cart</motion.p>

                <motion.p whileTap={{scale : 0.75}}
                 className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-sm
                    hover:shadow-sm cursor-pointer 
                    text-textColor text-base'
                >Clear <RiRefreshFill />{" "}</motion.p>
            
        </div>
{/* bottom section */}
        <div className='w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col'>
            <div className='w-full h-340 md:h-420 px-6 py-10 flex flex-col gap-3 overflow-y-scroll
                scrollbar-none'>
                    {/* cartItems */}
                    <div className='w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2'>
                        <img src="" alt="" />
                    {/* name section */}
                    </div>
            </div>
        </div>
    </div>
  )
}

export default CartContainer