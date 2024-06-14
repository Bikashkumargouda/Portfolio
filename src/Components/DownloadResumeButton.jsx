import React from 'react'
import { saveAs } from 'file-saver';

const DownloadResumeButton = () => {

  const handleDownload = () => {
    const url = `/Resume.pdf`;
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        saveAs(blob, 'Resume.pdf');
      })
      .catch(error => {
        console.error('Error downloading the file:', error);
      });
  };

  return (
    <div>
      <button onClick={handleDownload} className='transform transition-transform hover:scale-105 hover:shadow-lg
           z-10 cursor-pointer font-bold text-gray-200   p-2 bg-gradient-to-r from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4] rounded-xl'>
        Download Resume
      </button>
    </div>
  )
}

export default DownloadResumeButton
