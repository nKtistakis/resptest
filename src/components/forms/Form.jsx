import PropTypes from "prop-types";

import { ValidateFormProvider } from "../../context/ValidateFormContext";
import FormBuilder from "./FormBuilder";

const Form = ({ children, handleSubmit, isCancelable = true }) => {
  return (
    <ValidateFormProvider>
      <FormBuilder handleSubmit={handleSubmit} isCancelable={isCancelable}>
        {children}
      </FormBuilder>
    </ValidateFormProvider>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isCancelable: PropTypes.bool,
};

export default Form;
