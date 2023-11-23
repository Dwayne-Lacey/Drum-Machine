import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSourceText,
        selectSound } from './machineSlice';
import styles from './DrumButton.module.css';

export function DrumButton(props) {
const dispatch = useDispatch();
  const ref = useRef(null);
  const soundOn = useSelector(selectSound);

  const handleClick = (source) => {
    dispatch(setSourceText(source));
    ref.current.currentTime = 0;
    ref.current.play();
    };
    console.log(props);

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