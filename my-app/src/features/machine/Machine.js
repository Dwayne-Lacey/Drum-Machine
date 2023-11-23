import React from 'react';
import { useSelector } from 'react-redux';
import { selectSourceText } from './machineSlice';
import styles from './Machine.module.css';
import { DrumButton } from './DrumButton';

export function Machine() {
  const sourceText = useSelector(selectSourceText);
  
  return (
    // Props to pass in for buttons, buttonName, soundSrc, buttonKey
    <div id="drum-machine">
      <div id="button-container" className={styles.buttonContainer}>
        <DrumButton 
        soundSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        buttonKey="Q"
        buttonName="Heater-1"
        />
      </div>
      <div className={styles.displayContainer}>
        <h1 className={styles.display} id="display">
          {sourceText}
        </h1>
      </div>
    </div>
  );
  }