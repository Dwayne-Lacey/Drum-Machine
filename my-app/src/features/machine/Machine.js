import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setSourceText,
  selectSourceText
} from './machineSlice';
import styles from './Machine.module.css';

export function Machine() {
  const sourceText = useSelector(selectSourceText);
  const dispatch = useDispatch();
  const btn1Ref = useRef(null);

  const handleClick = (source) => {
    dispatch(setSourceText(source));
    btn1Ref.current.currentTime = 0;
    btn1Ref.current.play();
    };

  return (
    <div id="drum-machine">
      <div id="button-container" className={styles.buttonContainer}>
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
          ref={btn1Ref}
          />
        </button>
       
      </div>
      <div className={styles.displayContainer}>
        <h1 className={styles.display} id="display">
          {sourceText}
        </h1>
      </div>
    </div>
  );
  }