import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from '../ReduxFunctions/userReducer';
/**
 * Could combine all reducers in one const for the application.
 **/
const rootReducer = combineReducers({
    authentification: authReducer
});

/**
 * Configures the Redux store.
 * @module Store
 * @returns {object} The Redux store.
 */
const store = configureStore({
  reducer: rootReducer
});

export default store;
