import CreateTypes from "./create.types";

export const createBusinessRequest = () => {
  return {
    type: CreateTypes.CREATE_BUSINESS_REQUEST,
  };
};

export const createBusinessSuccess = (url) => {
  return {
    type: CreateTypes.CREATE_BUSINESS_SUCCESS,
    url,
  };
};

export const createBusinessError = error => {
  return {
    type: CreateTypes.CREATE_BUSINESS_FAILURE,
    error,
  };
};

export const createBusinessProgress = progress => {
  return {
    type: CreateTypes.CREATE_BUSINESS_PROGRESS,
    progress,
  };
};
