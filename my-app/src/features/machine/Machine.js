import React from 'react';
import styles from './Machine.module.css';
import { DrumButton } from './DrumButton';
import { Display } from './Display';

export function Machine() {
  
  return (
    // Props to pass in for buttons, buttonName, soundSrc, buttonKey
    <div id="drum-machine" className={styles.drumMachine}>
      <div id="button-container" className={styles.buttonContainer}>
        <DrumButton 
        soundSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        altSrc="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
        buttonKey="Q"
        buttonName="Heater-1"
        altName="Chord-1"
        keyCode={81}
        />
        <DrumButton 
        soundSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
        altSrc="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
        buttonKey="W"
        buttonName="Heater-2"
        altName="Chord-2"
        keyCode={87}
        />
        <DrumButton 
        soundSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
        altSrc="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
        buttonKey="E"
        buttonName="Heater-3"
        altName="Chord-3"
        keyCode={69}
        />
        <DrumButton 
        soundSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
        altSrc="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
        buttonKey="A"
        buttonName="Heater-4"
        altName="Shaker"
        keyCode={65}
        />
        <DrumButton 
        soundSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
        altSrc="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
        buttonKey="S"
        buttonName="Clap"
        altName="Open-HH"
        keyCode={83}
        />
        <DrumButton 
        soundSrc="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
        altSrc="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
        buttonKey="D"
        buttonName="Open-HH"
        altName="Closed-HH"
        keyCode={68}
        />
        <DrumButton 
        soundSrc="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
        altSrc="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
        buttonKey="Z"
        buttonName="Kick-n'-Hat"
        altName="Punchy-Kick"
        keyCode={90}
        />
        <DrumButton 
        soundSrc="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
        altSrc="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
        buttonKey="X"
        buttonName="Kick"
        altName="Side-Stick"
        keyCode={88}
        />
        <DrumButton 
        soundSrc="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
        altSrc="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
        buttonKey="C"
        buttonName="Closed-HH"
        altName="Snare"
        keyCode={67}
        />
      </div>
      <Display />
    </div>
  );
  }