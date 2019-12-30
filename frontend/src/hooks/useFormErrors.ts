import { useState, useContext } from "react";

import { TokenContext } from "../context/token";
import { ValidationError, GeneralError } from "../models/errors";

export default function<T>(
  emptyErrors: T
): [T & GeneralError, (v: ValidationError[]) => void, VoidFunction] {
  const initErrors = { ...emptyErrors, general: "" };
  const { setToken } = useContext(TokenContext);
  const [errors, setErrors] = useState<T & GeneralError>(initErrors);

  const updateErrors = (validationErrors: ValidationError[]) => {
    let authError: boolean = false;
    const errors: any = {};

    validationErrors.forEach((err: ValidationError) => {
      if (err.param === "authorization") authError = true;
      if (!errors[err.param]) {
        errors[err.param] = err.msg;
      }
    });

    if (authError) setToken(null);
    else setErrors({ ...initErrors, ...errors });
  };

  const clearErrors = () => setErrors({ ...initErrors });

  return [errors, updateErrors, clearErrors];
}
