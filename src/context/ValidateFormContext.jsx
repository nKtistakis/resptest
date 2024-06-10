import { createContext, useState } from "react";

const ValidateFormContext = createContext({});

export const ValidateFormProvider = ({ children }) => {
  const [validate, setValidate] = useState(false);
  const [isValid, setIsValid] = useState(false);

  return (
    <ValidateFormContext.Provider
      value={{ validate, setValidate, isValid, setIsValid }}
    >
      {children}
    </ValidateFormContext.Provider>
  );
};

export default ValidateFormContext;
