import { useState, useContext, ChangeEvent } from "react";
import axios from "axios";

import useFormErrors from "./useFormErrors";
import useInputFields from "./useInputFields";
import { TokenContext } from "../context/token";
import { GeneralError } from "../models/errors";
import { hasValidationErrors } from "../utils/http";

export default function<T>(
  initData: T,
  endPoint: string
): [
  T,
  T & GeneralError,
  boolean,
  (e: ChangeEvent<HTMLInputElement>) => void,
  VoidFunction
] {
  const { setToken } = useContext(TokenContext);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [fields, handleInputChange] = useInputFields<T>(initData);
  const [errors, updateErrors] = useFormErrors<T>(initData);

  const onSubmit = async () => {
    setLoading(true);

    try {
      const res = await axios.post(endPoint, fields);
      setToken(res.data.token);
    } catch (err) {
      if (hasValidationErrors(err)) {
        updateErrors(err.response.data.errors);
        setLoading(false);
      }
    }
  };

  return [fields, errors, isLoading, handleInputChange, onSubmit];
}
