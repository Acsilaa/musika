import './App.css'
import { createContext, useEffect, useState } from 'react';
import Home from './components/Home/Home.tsx';
import Player from './components/Player/Player.tsx';
import musicdata from './entries.json';
export type Music = {
  title: string,
  author: string,
  file: string,
  cover: string,
}

type EntriesContextType = {
  val:Music[],
  setter:(musics: Music[]) => void
}
type PlayingContextType = {
  val:Music | null,
  setter:(musics: Music) => void
}

export const EntriesContext = createContext<EntriesContextType>({val: [], setter: ()=>{}});
export const PlayerContext = createContext<PlayingContextType>({val: null, setter: ()=>{}});
function App() {
  let [musics, setMusics] = useState<Music[]>([]);
  let [playing, setPlaying] = useState<Music | null>(null);
  const esetter = (musics: Music[]) => {setMusics(musics)}
  const psetter = (music: Music) => {setPlaying(music)}

  useEffect(()=>{
    let temp:Music[] = [];
    for (let i = 0; i < musicdata.entries.length; i++) {
      temp.push({
        title: musicdata.entries[i].title,
        author: musicdata.entries[i].author,
        file: musicdata.entries[i].file,
        cover: musicdata.entries[i].cover
      });
    }
    esetter([...musics, ...temp]);
  }, [])
  return (
    <>
      <EntriesContext.Provider value={{val: musics, setter: esetter}}>
        <PlayerContext.Provider value={{val: playing, setter: psetter}}>
          <Home />
          <Player/>
        </PlayerContext.Provider>
      </EntriesContext.Provider>
    </>
  )
}

export default App;
