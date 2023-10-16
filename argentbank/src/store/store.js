import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from '../ReduxFunctions/userReducer';

const rootReducer = combineReducers({
    authentification: authReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
