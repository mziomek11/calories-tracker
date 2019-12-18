import { useState, useContext, ChangeEvent } from "react";
import axios from "axios";

import useFormErrors from "./useFormErrors";
import useInputFields from "./useInputFields";
import { TokenContext } from "../context/token";
import { GeneralError } from "../models/errors";

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

  const register = async () => {
    setLoading(true);

    try {
      const res = await axios.post(endPoint, fields);
      setToken(res.data.token);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.errors) {
        updateErrors(err.response.data.errors);
        setLoading(false);
      }
    }
  };

  return [fields, errors, isLoading, handleInputChange, register];
}
