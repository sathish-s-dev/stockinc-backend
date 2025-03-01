import { ErrorResponse, SuccessResponse } from "../types";

export const successResponse = <T>(
  message: string,
  data: T
): SuccessResponse<T> => {
  return {
    success: true,
    message,
    data,
  };
};

export const errorResponse = (
  message: string,
  errorCode?: string,
  errors?: any
): ErrorResponse => {
  return {
    success: false,
    message,
    errorCode,
    errors,
  };
};
