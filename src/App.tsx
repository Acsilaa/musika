import './App.css'
import { createContext } from 'react';
import Home from './components/Home/Home.tsx';
import Player from './components/Player/Player.tsx';
import musicdata from './entries.json';
export type Music = {
  title: string,
  author: string,
  file: string,
  cover: string,
}
export const EntriesContext = createContext<Music[]>([]);
export const PlayerContext = createContext<Music|null>(null);
function App() {
  let musics: Music[] = [];
  for (let i = 0; i < musicdata.entries.length; i++) {
    musics.push({
      title: musicdata.entries[i].title,
      author: musicdata.entries[i].author,
      file: musicdata.entries[i].file,
      cover: musicdata.entries[i].cover
    });
  }
  let currentlyPlaying: Music | null = null;
  return (
    <>
      <EntriesContext.Provider value={musics}>
        <PlayerContext.Provider value={currentlyPlaying}>
          <Home />
          <Player/>
        </PlayerContext.Provider>
      </EntriesContext.Provider>
    </>
  )
}

export default App;
