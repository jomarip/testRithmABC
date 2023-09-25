/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { globalReducer } from '@/containers/global/slice';
import { homeReducer } from '@/containers/home/slice';
import { combineReducers } from '@reduxjs/toolkit';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer() {
  return combineReducers({
    global: globalReducer,
    home: homeReducer,
  });
}
