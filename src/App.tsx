import './styles/main.css'
import { MagnifyingGlassPlus } from 'phosphor-react'

import logoImg from './assets/logo.svg';
import gameImg1 from './assets/game-1.png'
import gameImg2 from './assets/game-2.png'
import gameImg3 from './assets/game-3.png'
import gameImg4 from './assets/game-4.png'
import gameImg5 from './assets/game-5.png'
import gameImg6 from './assets/game-6.png'

function GameImageRender(imgs: string[]) {
  return (
    <>
      {imgs && imgs.map((imageSrc, index: number) => (
        <a href="" key={index} className="relative rounded-lg overflow-hidden">
          <img src={imageSrc} alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
      ))}
    </>
  )
}

function App() {
  return (
    <div className='max-w-[1334px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>dou</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {GameImageRender([gameImg1, gameImg2, gameImg3, gameImg4, gameImg5, gameImg6])}
      </div>

      <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
