import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='flex w-full min-h-screen justify-center items-center flex-col text-blue-800 '>
      <h1 className='text-6xl font-bold mb-4'>404</h1>
       <h1 className='font-bold text-4xl mb-4'>Página não encontrada</h1>
       <p className='italic text-1xl mb-4 text-black font-medium'>Você caiu em uma página que não existe!</p>
       <Link className='bg-blue-700 py-1 px-4 rounded-md text-white font-bold' to="/">Voltar para Home</Link>
    </div>
  )
}