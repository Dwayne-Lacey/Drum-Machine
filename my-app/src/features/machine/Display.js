import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSourceText, 
        selectVolume,
        setVolume,
        setSound,
        selectSound } from './machineSlice';
import styles from './Display.module.css';
    
export function Display() {
    const sourceText = useSelector(selectSourceText);
    const volume = useSelector(selectVolume);
    const soundOn = useSelector(selectSound);
    const dispatch = useDispatch();

    const changeVolume = useCallback(
        (e) => {
            dispatch(setVolume(e.target.value));
        }, [setVolume, dispatch]);
    
    const handleClick = () => {
        dispatch(setSound());
    }
    
    
    return (
    <div className={styles.displayContainer}>
        <div className={styles.powerContainer}>
            <button className={styles.powerBtn} onClick={handleClick}>
                power
            </button>
        </div>
        <h1 className={styles.display} id="display">
          {soundOn && sourceText}
        </h1>
        <input 
        max="1"
        min="0"
        onChange={changeVolume}
        step="0.01"
        type="range"
        value={volume}
        />
    </div>
    )
    }