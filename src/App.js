import { useState } from 'react';
import Player from './components/Player';

function App() {
  const [songs, setSongs] = useState([
    {
      title: "A View From The Top Of The World",
      artist: "Dream Theater",
      img_src: "./images/dt-avfttotw.jpg",
      src: "./music/07 A View From The Top Of The World.mp3"
    },
    {
      title: "Hypersonic",
      artist: "Liquid Tension Experiment",
      img_src: "./images/lte-lte3.jpg",
      src: "./music/01 - Hypersonic.mp3"
    },
    {
      title: "The Alien",
      artist: "Dream Theater",
      img_src: "./images/dt-avfttotw.jpg",
      src: "./music/01 - The Alien.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);


  return (
    <div className="App">
      <Player
        song={songs[currentSongIndex]}
        nextSong={songs[nextSongIndex]}
      />
    </div>
  );
}

export default App;
