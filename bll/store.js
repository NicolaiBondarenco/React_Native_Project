import {configureStore} from '@reduxjs/toolkit';
import levels from '../bll/levelSlice';

export const store = configureStore({
  reducer: {
    levels,
  },
});
