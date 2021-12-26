import { combineReducers } from 'redux';
import app from './app';
import map from './map';
import loan from './loan';
import table from './table';

export default combineReducers({
  app,
  map,
  loan,
  table,
});
