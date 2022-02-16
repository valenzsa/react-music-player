import React, { useState } from 'react';

// Import Util - Data
import data from './util'; // data is a function which needs to be executed like so data()

// Add styles
import './styles/app.scss';

// Adding Components
import Player from './components/Player';
import Song from './components/Song';

function App() {
    // State
    const [songs, setsongs] = useState(data()); // returns a whole array of objects
    console.log(songs); // prints out all of songs in the data function
    console.log('App Component');

    const [currentSong, setCurrentSong] = useState(songs[0]); // Set initial state to the first song
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="App">
            <Song currentSong={currentSong} /> {/*Pass in currentSong state as props down to the Song component */}
            <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        </div>
    );
}

export default App;
