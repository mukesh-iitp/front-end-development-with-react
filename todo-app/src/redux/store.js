//const redux = require("redux"); //either way to import reudx

import redux from 'redux';
import { todoReducer } from './reducers/todoReducer';

export const store = redux.createStore(todoReducer);