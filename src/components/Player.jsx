import React from 'react';

import { useRef } from 'react';

// Import FontAwesome component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import fontawesome icons
import { faPlay, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong }) => {

    // useRef
    const audioRef = useRef(null);

    // Event Handlers
    const playSongHandler = () => {
        // const playAudio = document.querySelector('audio');
        // playAudio.play();

        console.log(audioRef.current.currentSrc);
    }

    return (
        <div className="player">
            <div className="time-control">
                <p>Start Time</p>
                <input type="range" />
                <p>End Time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x" />
                <FontAwesomeIcon className="play" icon={faPlay} size="2x" onClick={playSongHandler} />
                <FontAwesomeIcon className="skip-forward" icon={faAngleRight} size="2x" />
            </div>
            <audio ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
}

export default Player;