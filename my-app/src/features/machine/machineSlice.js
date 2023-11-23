import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: "",
  soundOn: true,
  volume: 0.5,
  altSounds: false
};



export const machineSlice = createSlice({
  name: 'machine',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
     // Set state equal to current button's sound description 
    setSourceText: (state, action) => {
      state.value = action.payload;
    },
    setSound: (state) => {
      state.soundOn = !state.soundOn;
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
    setAltSounds: (state) => {
      state.altSounds = !state.altSounds;
    }
  }
});

export const { setSourceText, setSound, setVolume, setAltSounds } = machineSlice.actions;

// Selector for current sound source description - ie: Drum 1, Heater 2, Synth 3, etc.
export const selectSourceText = (state) => state.machine.value;
export const selectSound = (state) => state.machine.soundOn;
export const selectVolume = (state) => state.machine.volume;
export const selectAltSounds = (state) => state.machine.altSounds;


export default machineSlice.reducer;
