import React from 'react'
import { MdAttachEmail } from "react-icons/md";
import { FcCellPhone } from "react-icons/fc";

function Contact() {
  return (
    <div id='contact' className='pt-16 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-5'>
                <h2 className='text-5xl'>Lets Connect</h2>
                <p className='text-black text-[18px] pt-2'>
                Connect with me through your preferred communication channel - contact form, phone, or email. I welcome your correspondence
                </p>
                <div className='flex gap-1 items-center '>
                <MdAttachEmail size={30} /> farhansiddiquiai@gmail.com

                </div>
                <div className='flex gap-0 items-center '>
                <FcCellPhone size={30} /> +923102625218

            </div>
        </div>
        <div className='space-y-8'>
            <div className='flex flex-col gap-1'>
                <label htmlFor='name'>Name</label>
                <input type="text"
                className='h-[40px] bg-transparent border border-black'
                id='name'/>
            </div>

            <div className='space-y-8'>
            <div className='flex flex-col gap-1'>
                <label htmlFor='email'>Email</label>
                <input type="text"
                className='h-[40px] bg-transparent border border-black'
                id='email'/>
            </div>

            <div className='space-y-8'>
            <div className='flex flex-col gap-1'>
                <label htmlFor='msg'>Message</label>
                <textarea
                className='h-[40px] bg-transparent border border-black'
                id='msg' rows={16} >
                </textarea>
            </div>
            <button className='bg-accent p-2 px-6'>Submit</button>

</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
