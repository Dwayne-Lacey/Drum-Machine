import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSourceText,
        selectSound,
        selectVolume,
        selectAltSounds } from './machineSlice';
import styles from './DrumButton.css';

export function DrumButton(props) {
    const dispatch = useDispatch();
    const ref = useRef(null);
    const btnRef = useRef(null);
    const soundOn = useSelector(selectSound);
    const volume = useSelector(selectVolume);
    const altSounds = useSelector(selectAltSounds);

    const handleClick = useCallback(
        (source, keypress) => {
        if (keypress) {
            setTimeout(() => {
            btnRef.current.blur();
            }, 100);
        }
        else {
            btnRef.current.blur();
        }
        if (soundOn) {
            dispatch(setSourceText(source));
            ref.current.currentTime = 0;
            ref.current.volume = volume;
            ref.current.play();
        }
        }, [dispatch, ref, volume, soundOn])
    
    const handleKeyPress = useCallback(
        (e) => {
            if (e.keyCode === props.keyCode) {
                btnRef.current.focus();
                handleClick(altSounds ? props.altName.replace("-", " ") : props.buttonName.replace("-", " "), true);
            }
        }, [handleClick, props.keyCode, props.buttonName, altSounds, props.altName]
    );

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => document.removeEventListener("keydown", handleKeyPress);
    }, [handleKeyPress]);


  return (
    // Props to pass in for buttons, buttonName, soundSrc, buttonKey
    <button
        className="drum-pad"
        id={altSounds ? props.altName : props.buttonName}
        ref={btnRef}
        aria-label={altSounds ? props.altName.replace("-", " ") : props.buttonName.replace("-", " ")}
        onClick={() => {handleClick(altSounds ? props.altName.replace("-", " ") : props.buttonName.replace("-", " "), false)}}
    >
        {props.buttonKey}
        {soundOn && 
            <audio
            id={props.buttonKey}
            className="clip"
            src={altSounds ? props.altSrc : props.soundSrc}
            ref={ref}
            />
        }
    </button>
        )
    }