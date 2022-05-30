import CreateTypes from "./create.types";

const createBusinessReducers = (state = {}, action) => {
  switch (action.type) {
    case CreateTypes.CREATE_BUSINESS_REQUEST:
      return {
        ...state,
        isCreating: true,
        created: false,
        creatingError: false,
      };
    case CreateTypes.CREATE_BUSINESS_SUCCESS:
      console.log("here");
      return {
        ...state,
        isCreating: false,
        created: true,
        creatingError: false,
        url: action.url,
      };
    case CreateTypes.CREATE_BUSINESS_FAILURE:
      return {
        ...state,
        isCreating: false,
        created: false,
        creatingError: true,
        error: action.error,
      };
    case CreateTypes.CREATE_BUSINESS_PROGRESS:
      return {
        ...state,
        isCreating: true,
        created: false,
        creatingError: false,
        progress: action.progress,
      };
    default:
      return state;
  }
};

export default createBusinessReducers;