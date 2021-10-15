import React, { useState } from "react";
// import style
import "./style/app.scss";

// Adding Components

import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";

// import data
import data from "./musicData";

function App() {
  // state

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library songs={songs} />
    </div>
  );
}

export default App;
