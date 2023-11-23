import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: "",
  soundOn: true,
  volume: 0.5
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
    }
  }
});

export const { setSourceText, setSound } = machineSlice.actions;

// Selector for current sound source description - ie: Drum 1, Heater 2, Synth 3, etc.
export const selectSourceText = (state) => state.machine.value;
export const selectSound = (state) => state.machine.soundOn;
export const selectVolume = (state) => state.machine.volume;


export default machineSlice.reducer;
