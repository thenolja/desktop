import { combineReducers } from '@reduxjs/toolkit';
import auth from './auth';

const reducer = combineReducers({ auth });

export type Reducer = ReturnType<typeof reducer>;
export default reducer;
