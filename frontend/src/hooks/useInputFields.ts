import { useState, ChangeEvent } from "react";

export default function<T>(
  initialFields: T
): [T, (e: ChangeEvent<HTMLInputElement>) => void] {
  const [fields, setFields] = useState<T>(initialFields);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFields(prevData => ({ ...prevData, [name]: value }));
  };

  return [fields, handleInputChange];
}
