import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customization/customizationReducer';
import createBusinessReducer from './create_business/create.reducers';
import authReducers from "./auth/auth.reducers";

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  auth: authReducers,
  customization: customizationReducer,
  create: createBusinessReducer,
});

export default reducer;
