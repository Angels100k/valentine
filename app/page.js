"use client"

import React, { useState, useEffect } from 'react';
export default function Home() {
  const image1 = '/img/milk-and-mocha-hugs.gif';
  const image2 = '/img/excited-milk-and-mocha.gif';
  const image3 = '/img/without.gif';

  const [currentImage, setCurrentImage] = useState(image1);
  const [hide, setHide] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0})

  const setImage = (img) => {
    setCurrentImage(img);
  };

  function happy() {
    setImage(image2)
    setHide("hidden")
  }

  const updateButtonPosition = () => {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    setPosition({ x, y });
    setImage(image3)
  };

  return (
    <main className="bg-second flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl text-primary font-bold">Will you be my valentine?</h1>
      <img src={currentImage} alt="Togglable Image" style={{ maxHeight: '400px' }} />
      <div className='Flex flex-row mt-6'>
        <button
        className={'bg-primary px-8 py-3 rounded-xl ' + hide}
        style={{
          position: position.x !== 0 ? 'absolute' : 'none',
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        onMouseEnter={updateButtonPosition}
      >
        No
      </button>
        <button 
        className='bg-primary px-8 py-3 rounded-xl ml-6'
        onClick={happy}>yes</button>
      </div>
      
    </main>
  );
}
