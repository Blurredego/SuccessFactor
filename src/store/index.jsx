import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeConfigSlice from './themeConfigSlice';

// Combine reducers
const rootReducer = combineReducers({
    themeConfig: themeConfigSlice,
});

// Configure and export the store
const store = configureStore({
    reducer: rootReducer,
});

export default store;
