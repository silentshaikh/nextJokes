'use client';
import { useCustomHook } from '@/Context/Context'

function Button() {
  const {jokeGenerte} = useCustomHook();
  return (
    <>
      <button className='bg-black text-yellow-400 px-8 py-4 rounded-md' onClick={jokeGenerte}>Jokes</button>
    </>
  )
}

export default Button;
