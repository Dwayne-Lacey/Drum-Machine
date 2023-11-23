import React from 'react';
import styles from './Machine.module.css';
import { DrumButton } from './DrumButton';
import { Display } from './Display';

export function Machine() {
  
  return (
    // Props to pass in for buttons, buttonName, soundSrc, buttonKey
    <div id="drum-machine">
      <div id="button-container" className={styles.buttonContainer}>
        <DrumButton 
        soundSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        buttonKey="Q"
        buttonName="Heater-1"
        keyCode={81}
        />
        <DrumButton 
        soundSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
        buttonKey="W"
        buttonName="Heater-2"
        keyCode={87}
        />
        <DrumButton 
        soundSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
        buttonKey="E"
        buttonName="Heater-3"
        keyCode={69}
        />
        <DrumButton 
        soundSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
        buttonKey="A"
        buttonName="Heater-4"
        keyCode={65}
        />
        <DrumButton 
        soundSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
        buttonKey="S"
        buttonName="Clap"
        keyCode={83}
        />
        <DrumButton 
        soundSrc="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
        buttonKey="D"
        buttonName="Open-HH"
        keyCode={68}
        />
        <DrumButton 
        soundSrc="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
        buttonKey="Z"
        buttonName="Kick-n'-Hat"
        keyCode={90}
        />
        <DrumButton 
        soundSrc="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
        buttonKey="X"
        buttonName="Kick"
        keyCode={88}
        />
        <DrumButton 
        soundSrc="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
        buttonKey="C"
        buttonName="Closed-HH"
        keyCode={67}
        />
      </div>
      <Display />
    </div>
  );
  }