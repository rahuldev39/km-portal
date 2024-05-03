import React from 'react'

export default function HeaderCard({title,children}) {
  return (
    <div className='shadow-md rounded-xl bg-white p-5 h-full'>
        <h4 className='text-base font-medium text-gray-500 mb-4'>{title}</h4>
        {children}
    </div>
  )
}
