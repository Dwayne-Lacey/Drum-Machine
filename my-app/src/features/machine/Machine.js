import React from 'react';
import { useSelector } from 'react-redux';
import { selectSourceText } from './machineSlice';
import styles from './Machine.module.css';
import { DrumButton } from './DrumButton';

export function Machine() {
  const sourceText = useSelector(selectSourceText);
  
  return (
    // Props to pass in for buttons, soundOn, buttonName, soundSrc, buttonKey
    <div id="drum-machine">
      <div id="button-container" className={styles.buttonContainer}>
        <DrumButton />
      </div>
      <div className={styles.displayContainer}>
        <h1 className={styles.display} id="display">
          {sourceText}
        </h1>
      </div>
    </div>
  );
  }