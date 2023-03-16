import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLevels = createAsyncThunk('levels/fetchLevels', async () => {
  const res = await axios.get('https://back-chitayka2.vercel.app/pict');
  return res.data;
});

const initialState = {
  allItems: [],
  status: 'loading',
  error: false,
  level: null,
};

export const levelSlice = createSlice({
  name: 'levels',
  initialState,
  reducers: {
    changeLevel: (state, action) => {
      state.level = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchLevels.fulfilled, (state, action) => {
      state.allItems = action.payload;
      state.loading = null;
      state.status = 'fulfilled';
    });
    builder.addCase(fetchLevels.pending, state => {
      state.status = 'pending';
    });
    builder.addCase(fetchLevels.rejected, state => {
      state.error = true;
      state.status = 'rejected';
    });
  },
});

export const {changeLevel} = levelSlice.actions;

export default levelSlice.reducer;
