import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customization/customizationReducer';
import createBusinessReducer from './create_business/create.reducers';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  create: createBusinessReducer,
});

export default reducer;
