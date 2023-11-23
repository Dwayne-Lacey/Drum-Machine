import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSourceText, 
        selectVolume,
        setVolume,
        setSound,
        selectSound,
        setAltSounds } from './machineSlice';
import styles from './Display.module.css';
    
export function Display() {
    const sourceText = useSelector(selectSourceText);
    const volume = useSelector(selectVolume);
    const soundOn = useSelector(selectSound);
    const dispatch = useDispatch();

    const changeVolume = useCallback(
        (e) => {
            dispatch(setVolume(e.target.value));
        }, [dispatch]);
    
    const powerSwitch = () => {
        dispatch(setSound());
    }

    const altSoundSwitch = () => {
        dispatch(setAltSounds())
    };
    
    
    return (
    <div className={styles.displayContainer}>
        <div className={styles.buttonContainer}>
            <button className={styles.Button} onClick={powerSwitch}>
                power
            </button>
        </div>
        <h1 className={styles.display} id="display">
            {soundOn && sourceText}
        </h1>
        <h2 className={styles.volumeTitle}>
            {"Volume: " + Math.round(volume * 100) + "%"}
        </h2>
        <input 
        max="1"
        min="0"
        onChange={changeVolume}
        step="0.01"
        type="range"
        value={volume}
        />
        <div className={styles.buttonContainer}>
            <button className={styles.Button} onClick={altSoundSwitch}>
                alt sounds
            </button>
        </div>

    </div>
    )
    }