import React from 'react'
import { saveAs } from 'file-saver';

const DownloadResumeButton = () => {

  const handleDownload = () => {
    const url = `/CV.pdf`;
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        saveAs(blob, 'CV.pdf');
      })
      .catch(error => {
        console.error('Error downloading the file:', error);
      });
  };
  // const handleDownload = async () => {
  //   const url = '/Resume.pdf';

  //   try {
  //     const response = await fetch(url);

  //     // Check if the response is successful
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     const blob = await response.blob();
  //     const file = new Blob([blob], { type: 'application/pdf' });

  //     // Use saveAs from file-saver
  //     saveAs(file, 'Resume.pdf');
  //   } catch (error) {
  //     console.error('Error downloading the file:', error);
  //     alert('Failed to download the file. Please try again later.'); // Notify the user
  //   }
  // };


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
