import PropTypes from "prop-types";
import { useEffect } from "react";
import useValidateForm from "../../hooks/useValidateForm";

const FormField = ({
  id,
  type,
  label,
  isRequired = false,
  isTextArea = false,
  data,
  setData,
  dataError,
  setDataError,
  validateFunc = () => {},
}) => {
  const { validate, setValidate, setIsValid } = useValidateForm();

  const handleValidate = () => {
    const err = validateFunc(data[id]);
    setDataError((prevDataError) => ({ ...prevDataError, [id]: err || "" }));
    if (err !== null) setIsValid(false);
    setValidate(false);
  };

  useEffect(() => {
    if (validate) handleValidate();
  }, [validate]);

  return (
    <section className="flex flex-col w-full items-start">
      {!isTextArea && (
        <label className="text-gray-600 font-semibold">
          {label + (isRequired && " *")}
        </label>
      )}

      {isTextArea ? (
        <textarea
          placeholder={label + (isRequired && " *")}
          id={id}
          value={data[id]}
          onChange={(event) =>
            setData({ ...data, [event.target.id]: event.target.value })
          }
          className={`w-full py-3 px-2 resize-none min-h-[100px] rounded-2xl ${
            dataError[id]
              ? "border-2 border-red-600"
              : " border border-slate-400 border-opacity-70"
          } rounded-lg text-gray-700 leading-tight mt-3 focus:outline-none`}
        />
      ) : (
        <input
          type={type}
          id={id}
          value={data[id]}
          onChange={(event) =>
            setData({ ...data, [event.target.id]: event.target.value })
          }
          className={`w-full max-w-[350px] py-3 px-2 mobile:w-full mobile:max-w-full rounded-2xl ${
            dataError[id]
              ? "border-2 border-red-600"
              : " border border-slate-400 border-opacity-70"
          }  text-gray-700 leading-tight mt-3 focus:outline-none`}
        />
      )}
      {dataError[id] && (
        <div className={"text-red-500 text-sm font-bold mb-6"}>
          {dataError[id]}
        </div>
      )}
    </section>
  );
};

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  isTextArea: PropTypes.bool,
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
  dataError: PropTypes.object.isRequired,
  setDataError: PropTypes.func.isRequired,
  validateFunc: PropTypes.func,
};
export default FormField;
