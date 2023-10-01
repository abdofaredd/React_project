
import { createSlice } from '@reduxjs/toolkit';
const initialstate = {log_flag:false};

const logFlage = createSlice({

    name: 'Log',
    
    initialState: initialstate,
  
  reducers: {
    logToggle: (state) => {
     state.log_flag = !state.log_flag;
    },
    F_flag:(state)=> {
       state.log_flag = false;

    }
 
  },
});


 export const { logToggle,F_flag } = logFlage.actions;

export default logFlage.reducer;