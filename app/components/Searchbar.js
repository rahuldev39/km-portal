'use client'
import React, { useEffect, useRef, useState } from 'react'

export default function Searchbar() {
    const[open,setOpen] = useState(false);
    const[type,setType] = useState('Select Type');
    const dropdownRef = useRef(null);

    useEffect(()=>{
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
              setOpen(false);
            }
          };

          document.addEventListener('mousedown', handleClickOutside);

          return () => {
            document.removeEventListener('mousedown', handleClickOutside);
          };

    },[])

    const manageType = function(e){
       e.preventDefault();
       setType(e.target.innerText);
       setOpen(false)
    }

  return (
    <div className='bg-white rounded-full flex'>
       <div className='relative flex-1'>
            <img src="./search-bold.svg" className='absolute start-4 top-1/2 -translate-y-1/2 w-5 sm:w-6' width={24} alt="" />
            <input type="text" className='w-full rounded-l-full placeholder:text-gray-400 py-3 border-0 pl-12 sm:pl-14 sm:text-base text-sm' placeholder='Enter the search keywords to search documents' />
       </div> 
       <div ref={dropdownRef} className='relative'>
          <button onClick={()=>setOpen(!open)} className='text-blue-gray-800 text-sm font-medium flex items-center gap-2 h-full px-4 border-l border-gray-200 hover:bg-blue-gray-50 rounded-r-full'>
            {type}
            <img src="./down-arrow.svg" width={12} alt="" />
          </button>  
          {
            open && 
            <div className="dropdown-menu absolute bg-white shadow-lg p-2 top-full right-0 w-40 rounded-lg mt-2 border border-gray-100 z-30">
                <ul className='text-xs'>
                    <li>
                        <a onClick={manageType} className='block text-blue-gray-700 px-3 py-2 rounded-md hover:bg-blue-50/80' href="">PowerMentis</a>
                    </li>
                    <li>
                        <a onClick={manageType} className='block text-blue-gray-700 px-3 py-2 rounded-md hover:bg-blue-50/80' href="">PowerDocs</a>
                    </li>
                    <li>
                        <a onClick={manageType} className='block text-blue-gray-700 px-3 py-2 rounded-md hover:bg-blue-50/80' href="">OneDrive</a>
                    </li>
                    <li>
                        <a onClick={manageType} className='block text-blue-gray-700 px-3 py-2 rounded-md hover:bg-blue-50/80' href="">Library</a>
                    </li>
                    <li>
                        <a onClick={manageType} className='block text-blue-gray-700 px-3 py-2 rounded-md hover:bg-blue-50/80' href="">Strategy</a>
                    </li>
                    <li>
                        <a onClick={manageType} className='block text-blue-gray-700 px-3 py-2 rounded-md hover:bg-blue-50/80' href="">BD</a>
                    </li>
                    <li>
                        <a onClick={manageType} className='block text-blue-gray-700 px-3 py-2 rounded-md hover:bg-blue-50/80' href="">Experts</a>
                    </li>
                </ul>
            </div>
          }
       </div>
    </div>
  )
}
