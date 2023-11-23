import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSourceText,
        selectSound } from './machineSlice';
import styles from './DrumButton.module.css';

export function DrumButton(props) {
const dispatch = useDispatch();
    const ref = useRef(null);
    const soundOn = useSelector(selectSound);

    const handleClick = useCallback(
        (source) => {
        dispatch(setSourceText(source));
        ref.current.currentTime = 0;
        ref.current.play();
        }, [dispatch, ref])
    
    const handleKeyPress = useCallback(
        (e) => {
            if (e.keyCode === props.keyCode) {
                handleClick(props.buttonName.replace("-", " "));
            }
        }, [handleClick, props.keyCode, props.buttonName]
    );

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => document.removeEventListener("keydown", handleKeyPress);
    }, [handleKeyPress]);


  return (
    // Props to pass in for buttons, buttonName, soundSrc, buttonKey
    <button
        className="drum-pad"
        id={props.buttonName}
        aria-label={props.buttonName.replace("-", " ")}
        onClick={() => {handleClick(props.buttonName.replace("-", " "))}}
    >
        {props.buttonKey}
        {soundOn && 
            <audio
            id={props.buttonKey}
            className="clip"
            src={props.soundSrc}
            ref={ref}
            />
        }
    </button>
        )
    }