import Image from "next/image";

function Emoji() {
  const jokeEmoji = '/images/3d-cartoon-style-sick-vomiting-emoticon-icon-exhausted-yellow-face-showing-disgust-illness-flat-vector-illustration-emotion-expression-fever-nausea-concept_778687-1024.jpg';
  return (
    <>
      <Image
       className='size-20 rounded-full ring-2 ring-yellow-500' 
       src={jokeEmoji} 
       alt="jokeemoji"
       width={80}
       height={80}
       />
    </>
  )
};
export default Emoji;