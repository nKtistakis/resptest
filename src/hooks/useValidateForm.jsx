import { useContext } from "react";
import ValidateFormContext from "../context/ValidateFormContext";

const useValidateForm = () => {
  return useContext(ValidateFormContext);
};

export default useValidateForm;
