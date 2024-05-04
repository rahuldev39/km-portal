import React from 'react'

export default function ContributionForm() {
  return (
    <div className='grid grid-cols-12 gap-x-4 gap-y-4 mb-8'>
        <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
            <label className='text-xs font-bold text-blue-gray-800 mb-1'>Name of the document</label>
            <input type="text" className='rounded-md border border-gray-200 text-sm placeholder:text-gray-600 py-3 px-4 w-full' placeholder='Enter Name of the document' />
        </div> 

        <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
            <label className='text-xs font-bold text-blue-gray-800 mb-1'>Type of document</label>
            <select className='rounded-md border border-gray-200 text-sm py-3 px-4 w-full'>
                <option value="">Select Type of document</option>
            </select>
        </div>

        <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
            <label className='text-xs font-bold text-blue-gray-800 mb-1'>Sub-type of document</label>
            <select className='rounded-md border border-gray-200 text-sm py-3 px-4 w-full'>
                <option value="">Select Sub-type of document</option>
            </select>
        </div>

        <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
            <label className='text-xs font-bold text-blue-gray-800 mb-1'>Practice Area</label>
            <select className='rounded-md border border-gray-200 text-sm py-3 px-4 w-full'>
                <option value="">Select Practice Area</option>
            </select>
        </div>

        <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
            <label className='text-xs font-bold text-blue-gray-800 mb-1'>Sub-Practice Area</label>
            <select className='rounded-md border border-gray-200 text-sm py-3 px-4 w-full'>
                <option value="">Select Sub-Practice Area</option>
            </select>
        </div>

        <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
            <label className='text-xs font-bold text-blue-gray-800 mb-1'>Sector</label>
            <select className='rounded-md border border-gray-200 text-sm py-3 px-4 w-full'>
                <option value="">Select Sector</option>
            </select>
        </div>

        <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
            <label className='text-xs font-bold text-blue-gray-800 mb-1'>Sub-sector</label>
            <select className='rounded-md border border-gray-200 text-sm py-3 px-4 w-full'>
                <option value="">Select Sub-sector</option>
            </select>
        </div>

        <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
            <label className='text-xs font-bold text-blue-gray-800 mb-1'>Parameters</label>
            <select className='rounded-md border border-gray-200 text-sm py-3 px-4 w-full'>
                <option value="">Select Parameters</option>
            </select>
        </div>

        <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
            <label className='text-xs font-bold text-blue-gray-800 mb-1'>Matter Name/Number</label>
            <input type="text" className='rounded-md border border-gray-200 text-sm placeholder:text-gray-600 py-3 px-4 w-full' placeholder='Matter Name/Number' />
        </div> 

        <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
            <label className='text-xs font-bold text-blue-gray-800 mb-1'>Date of Contribution</label>
            <input type="text" className='rounded-md border border-gray-200 text-sm placeholder:text-gray-600 py-3 px-4 w-full' placeholder='Date of Contribution' />
        </div> 

        <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
            <label className='text-xs font-bold text-blue-gray-800 mb-1'>Date of Transaction / Issuance</label>
            <input type="text" className='rounded-md border border-gray-200 text-sm placeholder:text-gray-600 py-3 px-4 w-full' placeholder='Select date ' />
        </div>

        <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
            <label className='text-xs font-bold text-blue-gray-800 mb-1'>Contributor/s</label>
            <input type="text" className='rounded-md border border-gray-200 text-sm placeholder:text-gray-600 py-3 px-4 w-full' placeholder='Select Contributor/s ' />
        </div>

        <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
            <label className='text-xs font-bold text-blue-gray-800 mb-1'>Co-contributor/s</label>
            <select className='rounded-md border border-gray-200 text-sm py-3 px-4 w-full'>
                <option value="">Select Co-contributor/s</option>
            </select>
        </div>

        <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
            <label className='text-xs font-bold text-blue-gray-800 mb-1'>Partner/s</label>
            <select className='rounded-md border border-gray-200 text-sm py-3 px-4 w-full'>
                <option value="">Select Partner/s</option>
            </select>
        </div>

        <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
            <label className='text-xs font-bold text-blue-gray-800 mb-1'>Subject</label>
            <select className='rounded-md border border-gray-200 text-sm py-3 px-4 w-full'>
                <option value="">Select Subject</option>
            </select>
        </div>

        <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
            <label className='text-xs font-bold text-blue-gray-800 mb-1'>Project Name</label>
            <input type="text" className='rounded-md border border-gray-200 text-sm placeholder:text-gray-600 py-3 px-4 w-full' placeholder='Enter Project Name' />
        </div>

        <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
            <label className='text-xs font-bold text-blue-gray-800 mb-1'>Client Name</label>
            <input type="text" className='rounded-md border border-gray-200 text-sm placeholder:text-gray-600 py-3 px-4 w-full' placeholder='Enter Client Name' />
        </div>

        <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
            <label className='text-xs font-bold text-blue-gray-800 mb-1'>Specific Law</label>
            <input type="text" className='rounded-md border border-gray-200 text-sm placeholder:text-gray-600 py-3 px-4 w-full' placeholder='Enter Specific Law' />
        </div>

        <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
            <label className='text-xs font-bold text-blue-gray-800 mb-1'>Section and Sub-section</label>
            <input type="text" className='rounded-md border border-gray-200 text-sm placeholder:text-gray-600 py-3 px-4 w-full' placeholder='Enter Section and Sub-section' />
        </div>

        <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
            <label className='text-xs font-bold text-blue-gray-800 mb-1'>Type of Opinion</label>
            <input type="text" className='rounded-md border border-gray-200 text-sm placeholder:text-gray-600 py-3 px-4 w-full' placeholder='Enter Type of Opinion' />
        </div>
    </div>
  )
}
