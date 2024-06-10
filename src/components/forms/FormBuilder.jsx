import PropTypes from "prop-types";

import useValidateForm from "../../hooks/useValidateForm";
import { useEffect } from "react";

const FormBuilder = ({ children, handleSubmit, isCancelable = true }) => {
  const { validate, setValidate, isValid, setIsValid } = useValidateForm();

  const _handleSubmit = (e) => {
    e.preventDefault();
    setIsValid(true);
    setValidate(true);
  };

  useEffect(() => {
    if (isValid && !validate) handleSubmit();
  }, [isValid, validate]);

  return (
    <form
      noValidate
      onSubmit={_handleSubmit}
      className="flex flex-col space-y-6 w-full mobiles:w-fit mobiles:min-w-[340px] h-full rounded-xl bg-white p-5  shadow-lg"
    >
      {children}
      <div className="flex w-full items-center mt-8 space-x-4 pb-5 justify-center">
        <button
          type="submit"
          className="flex w-1/4 p-2 bg-responsy-green text-white rounded-2xl justify-center mobiles:w-2/4"
        >
          Submit
        </button>
        {isCancelable && (
          <div className="flex w-full justify-center">
            <button
              type="reset"
              className="flex desktop:w-1/2 p-2 bg-white rounded-2xl justify-center mobiles:w-full border border-gray-400"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

FormBuilder.propTypes = {
  // data: PropTypes.object.isRequired,
  // setData: PropTypes.func.isRequired,
  // dataError: PropTypes.object.isRequired,
  // setDataError: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isCancelable: PropTypes.bool,
};

export default FormBuilder;
