import React from 'react'

const ErrorHandler = () => {
  return (
    <div className='col-start-2 col-span-3 bg-black h-screen'>
      <p className='text-white text-bold text-2xl'>Sorry, those repositories are not available. </p>
      <p className='text-white text-lg'>Please search again. </p>
    </div>
  )
}

export default ErrorHandler