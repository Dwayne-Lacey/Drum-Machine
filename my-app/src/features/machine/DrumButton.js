import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setSourceText,
        selectSound } from './machineSlice';
import styles from './DrumButton.module.css';

export function DrumButton() {
const dispatch = useDispatch();
  const ref = useRef(null);
  const soundOn = useSelector(selectSound);

  const handleClick = (source) => {
    dispatch(setSourceText(source));
    ref.current.currentTime = 0;
    ref.current.play();
    };

  return (
    // Props to pass in for buttons, buttonName, soundSrc, buttonKey
    <button
        className="drum-pad"
        id={buttonName}
        aria-label={buttonName.replace("-", " ")}
        onClick={() => {handleClick(buttonName.replace("-", " "))}}
    >
        {buttonKey}
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