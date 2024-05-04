import React, { useRef, useState } from 'react'

export default function FilesUploader() {
    const [dragging, setDragging] = useState(false);
    const [files, setFiles] = useState([]);
    const fileInputRef = useRef(null);

    const handleDragEnter = (e) => {
        e.preventDefault();
        setDragging(true);
      };
    
    const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragging(true);
      };
    
    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);
        const files = Array.from(e.dataTransfer.files);
        setFiles(files)
        handleFiles(files);
    };

    const handleFileInputChange = (e) => {
        const files = Array.from(e.target.files);
        setFiles(files)
        handleFiles(files);
      };
    
      const handleFiles = (files) => {
        files.forEach(file => {
            console.log(file.name);
        });
      };

      const handleRemoveFile = (index) => {
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);
      };

      const openFileDialog = () => {
        fileInputRef.current.click();
      };
  return (
    <>
        <div
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={openFileDialog}
            className={`${dragging ? 'opacity-50' : 'opacity-100' } cursor-pointer border-2 border-dashed border-blue-300 rounded-xl p-8 flex flex-col items-center justify-center bg-blue-50 text-center h-64 mb-8`}>
            <input onChange={handleFileInputChange} ref={fileInputRef} className='hidden' type="file" name="" id="" />
            <div className='icon mb-4'>
                <img src="./cloud-upload.svg" width={60} alt="" />
            </div>
            <p className='text-blue-gray-800 font-medium'>Drop files here or <a className='text-blue-800' href="">Click to Upload</a> </p>
        </div>

        {
            files.length ?
            <div className='bg-white rounded-lg border border-gray-200 divide-y divide-gray-200 mb-4'>
                {
                    files.map((el,index)=>{
                        return(
                            <div key={index} className='py-3 flex items-center justify-between gap-4 px-4'>
                                <span className='text-sm font-medium text-gray-900'>{el.name}</span>  

                                <button onClick={()=>handleRemoveFile(index)}>
                                <img src="./delete.svg" width={20} alt="" />
                                </button> 
                            </div>
                        )
                    })
                }
            </div>
            : null
        }
    </>
  )
}
