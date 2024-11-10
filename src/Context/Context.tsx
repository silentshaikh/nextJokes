"use client";
import { ContextChild, ContextType,Joke } from '@/utils/type';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { jokeApi } from '@/utils/Api';
const JokeContext = createContext<ContextType|null>(null);
function Context({children}:ContextChild) {
  const [jokes,setJokes] = useState<string>("");
  const [load,setLoad] = useState<boolean>(false);
  const jokeGenerte = async () => {
    setLoad(true);
   try {
    const fetchJokeApi = await fetch(jokeApi);
    const fetchJoke:Joke = await fetchJokeApi.json();
    setJokes(fetchJoke.joke)
    setLoad(false)
   } catch (error) {
    setLoad(true)
    console.log(error);
   }
  };
  useEffect(() => {
    jokeGenerte();
  },[]);
  return (
    <>
      <JokeContext.Provider value={{jokeGenerte,jokes,load}}>{children}</JokeContext.Provider>
    </>
  )
}

export default Context;

//create a custom hook
const useCustomHook = () => {
  const jokeContext = useContext(JokeContext);
  if(!jokeContext){
    throw new Error("useCustomHook must be used within a JokeContext.Provider");
  };
  return jokeContext;
};
export {useCustomHook};