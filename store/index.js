import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';
// ==============================|| REDUX - MAIN STORE ||============================== //

const initialState = {};
const store = createStore(reducer, initialState, applyMiddleware(thunk));
const persister = 'Free';

export { store, persister };
