import React from "react";
import { useState, useEffect } from "react";
import * as Dialog from '@radix-ui/react-dialog'

import './styles/main.css';

import logoImg from './assets/logo-nlw-esports.svg';
import { GameBanner } from "./components/GameBanner";
import CreatedAdBanner  from "./components/CreatedAdBanner"




function App() {

  interface Game {
    id: string;
    title: string;
    bannerUrl: string;
    _count: {
      ads: number;
    }
  }

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => {
        setGames(data)
      })
  }, [])

  const [open, setOpen] = React.useState(false);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">Seu
        <span className="bg-nlw-gradient bg-clip-text text-transparent"> duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">

        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads} />
          )
        })}


      </div>

      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
            <span className="text-zinc-400">Publique um anúncio para encontrar novos players!</span>
          </div>

          <Dialog.Root>
            <CreatedAdBanner />

            <Dialog.Portal>
              <Dialog.Overlay className="bg-black/60 inset-0 fixed ">

                <Dialog.Content>

                  <Dialog.Title>Publique seu Anúncio</Dialog.Title>

                  <Dialog.Content>
                    sahiashiuas
                  </Dialog.Content>

                </Dialog.Content>


              </Dialog.Overlay>
            </Dialog.Portal>
          </Dialog.Root>


        </div>
      </div>

    </div>
  )
}

export default App
