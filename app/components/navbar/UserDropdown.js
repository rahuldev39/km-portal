'use client'
import React, { useEffect, useRef, useState } from 'react'

export default function UserDropdown() {
    const [open,setOpen] = useState(false);
    const dropdownRef = useRef(null)

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

  return (
    <div ref={dropdownRef} className="dropdown relative">
        <div onClick={()=>setOpen(!open)}  className="flex gap-4 items-center cursor-pointer">
            <div className="text-end hidden md:block">
                <h6 className="text-sm text-white">Thomas Anree</h6>
            </div>
            <div className="flex items-center gap-2">
                <div className="user">
                    <img src="./avatar.png" className="rounded-full" width="32" alt=""/>
                </div>
            </div>
        </div>
        { open &&
            <div  className="dropdown-menu absolute bg-white shadow-lg p-2 top-full right-0 w-40 rounded-lg mt-3 border border-gray-100 z-30">
            <ul className="flex flex-col gap-1 text-xs text-blue-gray-600">
                <li>
                    <a className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-blue-50/80" href="">
                        <div className="icon">
                            <img src="./profile.svg" width="16" alt=""/>
                        </div>
                        <span>Profile</span>
                    </a>
                </li>

                <li>
                    <a className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-blue-50/80" href="">
                        <div className="icon">
                            <img src="./settings.svg" width="16" alt=""/>
                        </div>
                        <span>Settings</span>
                    </a>
                </li>
                <li className="separator border-t border-blue-gray-200 my-1"></li>
                <li>
                    <a className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-blue-50/80" href="">
                        <div className="icon">
                            <img src="./logout.svg" width="16" alt=""/>
                        </div>
                        <span>logout</span>
                    </a>
                </li>
            </ul>
        </div>
        }
        
    </div>
  )
}
