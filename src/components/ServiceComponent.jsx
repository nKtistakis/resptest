import PropTypes from "prop-types";
import { useState } from "react";

const ServiceComponent = ({ iconUrl, title, description }) => {
  const [focused, setFocused] = useState(false);

  const handleMouseEnter = () => {
    setFocused(true);
  };

  const handleMouseLeave = () => {
    setFocused(false);
  };

  return (
    <div
      className="flex flex-col p-4 max-w-[400px] rounded-xl backdrop-blur-xl bg-white bg-opacity-30 cursor-pointer shadow-lg transition-shadow duration-500 ease-in-out"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex w-full min-h-[130px] mb-5">
        <img
          className={`object-contain ${
            focused ? "blur-sm opacity-100 " : "blur-0 opacity-75"
          } transition-all duration-500 ease-in-out`}
          src={iconUrl}
        />
      </div>
      <div
        className={`flex flex-col w-full text-start transition-all duration-500 ease-in-out ${
          focused && "-translate-y-5"
        }`}
      >
        <p className="font-bold">{title}</p>
        <span className={`pt-4 h-[150px]`}>{description}</span>
      </div>
    </div>
  );
};

ServiceComponent.propTypes = {
  iconUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ServiceComponent;
