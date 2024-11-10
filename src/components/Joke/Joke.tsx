'use client';
import { useCustomHook } from '@/Context/Context'
import Loading from '../Loading/Loading';


function Joke() {
  const {jokes,load} = useCustomHook();
  return (
    <>
      
      {load ? <Loading/> : <p className='w-[500px] text-center py-4 px-3 max-[523px]:w-[400px] max-[446px]:w-[350px] max-[398px]:w-[320px] max-[370px]:w-[250px]'>{jokes}</p>}
    </>
  )
};
export default Joke;
