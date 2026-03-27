import React from 'react'
import spinner from '../../public/spinner.gif'

const Spinner = () => {
  return (
    <div className={`flex flex-col w-max p-5 md:p-15 m-10 items-center justify-center text-gray-300`}>
        <img src={spinner} alt="" />
        <h1 className="animate-pulse">Processing...</h1>
    </div>
  )
}

export default Spinner
