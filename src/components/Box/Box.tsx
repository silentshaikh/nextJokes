"use client";
import React from 'react';

import { Poppins } from '@next/font/google';
import Emoji from '../Emoji/Emoji';
import Joke from '../Joke/Joke';
import Button from '../Button/Button';
const poppin = Poppins({
  weight: ['400', '700'], 
  subsets: ['latin'], 
  display: 'swap', 
});

function Box() {
  return (
    <>
      <div className= {`${poppin.className} flex justify-center items-center flex-col bg-yellow-300 p-12 rounded-md max-[625px]:w-[500px] max-[523px]:w-[420px] max-[446px]:w-[400px] max-[417px]:w-[380px] max-[398px]:w-[350px] max-[370px]:w-[300px] max-[314px]:w-[270px]`}>
      <Emoji/>
      <Joke/>
      <Button/>
      </div>
    </>
  )
}

export default Box
