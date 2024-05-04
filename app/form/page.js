'use client'
import React, {useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import FilesUploader from '../components/FilesUploader';
import ContributionForm from '../components/ContributionForm';

export default function uploadDocument() {
    const [step,setStep] = useState(1);
    
  return (
    <>
       <Navbar/>
       <main className='min-h-screen'>
            <section className='py-10'>
                <div className='container px-4 mx-auto'>
                    <div className='bg-white rounded-xl shadow-md lg: p-8'>
                        <div className='flex gap-4 mb-8'>
                            <button onClick={()=>setStep(1)} className={`${step===1 ? 'border-blue-800 text-gray-800' : 'border-blue-200 text-gray-600'} px-4 py-3 text-left border-t-4 `}>
                               <span className={`${step===1 ? 'text-blue-gray-800' : 'text-blue-gray-500'} text-xs  font-medium`}>Step 1</span>  
                               <h6 className='text-lg  font-bold'>Upload Document</h6>   
                            </button>
                            <button onClick={()=>setStep(2)} className={`${step===2 ? 'border-blue-800 text-gray-800' : 'border-blue-200 text-gray-600'} px-4 py-3 text-left border-t-4 `}>
                               <span className={`${step===2 ? 'text-blue-gray-800' : 'text-blue-gray-500'} text-xs  font-medium`}>Step 2</span>  
                               <h6 className='text-lg  font-bold'>Contribution Form</h6>   
                            </button>
                        </div>
                        {
                            step===1 &&
                            <div className='tab-pane'>
                                <FilesUploader/>
                                <div className='flex gap-2 justify-end'>
                                    <button onClick={()=>setStep(2)} className='btn px-5 py-3 bg-blue-800 rounded-lg text-white text-sm font-medium active:bg-blue-800 hover:bg-blue-900'>Next Step</button>
                                </div>
                            </div>
                        }
                        {
                            step===2 &&
                            <div className='tab-pane'>
                                <ContributionForm/>
                                <div className='flex gap-2 justify-end'>
                                    <button onClick={()=>setStep(1)} className='btn px-5 py-3 bg-white rounded-lg text-blue-gray-800 text-sm font-medium active:bg-white hover:bg-blue-gray-200'>Previous Step</button>
                                    <button  className='btn px-5 py-3 bg-blue-800 rounded-lg text-white text-sm font-medium active:bg-blue-800 hover:bg-blue-900'>Submit </button>
                                </div>
                            </div>
                        }
                    </div>    
                </div>
            </section>
       </main>
    </>
  )
}
