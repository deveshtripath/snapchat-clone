// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {createSlice } from '@reduxjs/toolkit';




export const cameraSlice = createSlice({
  name: 'app',
  initialState:{
      cameraImage:null,
  },
  reducers: {
    setCameraImage: (state, action) => {
      state.cameraImage = action.payload;
    },
    resetCameraImage:(state)=>{
        state.cameraImage=null;
    }
  },
  
});

export const { setCameraImage ,resetCameraImage } = cameraSlice.actions;


export const selectCameraImage = (state) => state.camera.cameraImage;

export default cameraSlice.reducer;



// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount) => {
//     const response = await fetchCount(amount);
//     return response.data;
//   }
// );



// extraReducers: (builder) => {
  //   builder
  //     .addCase(incrementAsync.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(incrementAsync.fulfilled, (state, action) => {
  //       state.status = 'idle';
  //       state.value += action.payload;
  //     });
  // },



  // import { fetchCount } from './counterAPI';

// const initialState = {
//   value: 0,
//   status: 'idle',
// };
