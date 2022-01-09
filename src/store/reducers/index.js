import { combineReducers } from 'redux';
import app from './app';
import map from './map';
import loan from './loan';
import table from './table';
import node from './node';

export default combineReducers({
  app,
  map,
  loan,
  table,
  node,
});
