import PropTypes from "prop-types";
import { useEffect } from "react";
const SelectField = ({
  id,
  data,
  setData,
  values,
  displayValues,
  label,
  isRequired = false,
}) => {
  useEffect(() => {
    setData(values[0]);
  }, []);
  return (
    <section className="flex flex-col w-full items-start">
      <label className="text-gray-600 font-semibold">
        {label + (isRequired && " *")}
      </label>
      <select
        className="w-full max-w-[350px] py-3 px-2 mobile:w-full mobile:max-w-full rounded-2xl border border-slate-400 border-opacity-70 text-gray-700 leading-tight mt-3 focus:outline-none"
        // onChange={(event) => setData({ ...data, [event.target.id]: values[0] })}
        onChange={(event) => setData(values[event.target.value])}
      >
        {displayValues.map((val, index) => (
          <option key={index} value={index}>
            {val}
          </option>
        ))}
      </select>
    </section>
  );
};

SelectField.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
  values: PropTypes.array.isRequired,
  displayValues: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
};

export default SelectField;
