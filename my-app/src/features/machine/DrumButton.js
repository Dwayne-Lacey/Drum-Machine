import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  setSourceText
} from './machineSlice';
import styles from './Machine.module.css';

export function DrumButton() {
const dispatch = useDispatch();
  const ref = useRef(null);

  const handleClick = (source) => {
    dispatch(setSourceText(source));
    ref.current.currentTime = 0;
    ref.current.play();
    };

  return (
    // Props to pass in for buttons, soundOn, buttonName, soundSrc, buttonKey
    <button
        className="drum-pad"
        id="drum-1"
        aria-label="Drum 1"
        onClick={() => {handleClick("Drum 1")}}
    >
        Q
        <audio
        id="Q"
        className="clip"
        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        ref={ref}
        />
    </button>
        )
    }