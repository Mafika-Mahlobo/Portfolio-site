import React from 'react'

const Contact = () => {
  return (
    <section className='bg-linear-to-br from-gray-800 to-gray-700 p-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 border border-gray-500 rounded-2xl shadow-2xl shadow-gray-900 p-10'>
            <div className='p-2 sm:p-10'>
                <p className='text-center text-gray-400'>
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
                    labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
                    animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
                    aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
                    pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
                    commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
                    proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
                    eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
                    Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
                    culpa duis.
                </p>
            </div>
            <div className='rounded-tr-2xl rounded-br-2xl shadow-2xl shadow-gray-900 flex justify-center align-middle p-0 md:p-10'>
                <form className='text-gray-300 flex flex-col p-2 md:p-0 gap-4 w-full'>
                    <div className='w-full'>
                        <label htmlFor="title" className='block text-sm font-medium text-gray-200 mb-1'>Title</label>
                        <input className='w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600' type="text" id='title' placeholder='Message title...'/>
                    </div>
                    <div className='w-full'>
                        <label htmlFor="body" className='block text-sm font-medium text-gray-200 mb-1'>Message</label>
                        <textarea className='w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 min-h-40 resize-vertical focus:outline-none focus:ring-2 focus:ring-green-600' name="body" id="body" placeholder='Write your message here...'></textarea>
                    </div>
                    <div className='w-full flex justify-center md:justify-start'>
                      <button className='bg-green-700 text-white px-6 py-2 rounded-2xl m-0 w-full hover:bg-green-800 transition-colors cursor-pointer'>Leave a message</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact
