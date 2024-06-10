import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTiktok,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons/faInstagramSquare";
import PropTypes from "prop-types";

export const FooterSection = () => {
  return (
    <section className="flex flex-col space-y-12 w-full py-5 px-6 bg-responsy-green bg-opacity-10 backdrop-blur-lg mt-[50px]">
      <div className="flex flex-row w-full justify-between mobiles:flex-col mobiles:items-center mobiles:space-y-8 mobile:justify-center">
        <div className="flex flex-col items-start mobiles:items-center space-y-4">
          <img
            className="w-[200px] object-cover cursor-pointer"
            src="./logo_v5_transparent.png"
          ></img>
          {/* <div className="flex w-full space-x-4">
                        <button className="flex py-3 px-5 rounded-full bg-responsy-green bg-opacity-40 text-[15px] shadow-lg">Get Responsy</button>
                        <button className="flex py-3 px-5 rounded-full bg-white text-[15px] border border-green-700 shadow-lg">Watch Demo</button>
                    </div> */}
        </div>
        <div className="flex flex-row w-[60%] justify-around mobile:flex-col mobile:items-start mobile:space-y-6 pad:max-w-[700px] pad:w-full mobile:w-fit">
          <div className="flex flex-col space-y-2">
            <FooterHeaderV2 text={"Contact Information"} />
            <FooterItem text={"info@tastebit.ai"} />
            <FooterItem text={"+1 (123) 456-7890"} />
            <FooterItem text={"123 Main Street, City, State, ZIP Code"} />
          </div>
          <div className="flex flex-col space-y-2">
            <FooterHeaderV2 text={"Legal"} />
            <FooterItem text={"Terms of Service"} />
            <FooterItem text={"Privacy Policy"} />
            <FooterItem text={"Cookies Policy"} />
            <FooterItem text={"Data Processing"} />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-5 w-full justify-start items-start border-t-2 border-responsy-green border-opacity-20 pt-4">
        <div className="flex space-x-4 ">
          <FooterSocialMediaIcon icon={faFacebookF} />
          <FooterSocialMediaIcon icon={faInstagramSquare} />
          <FooterSocialMediaIcon icon={faXTwitter} />
          <FooterSocialMediaIcon icon={faTiktok} />
        </div>
        <span className="mobile:text-[10px] text-end w-full text-gray-600">
          2024 Tastebit Inc. All rights reserved
        </span>
      </div>
    </section>
  );
};

FooterSection.propTypes = {
  sections: PropTypes.array,
};

const FooterHeader = ({ text }) => {
  return <p className="font-bold mb-4">{text}</p>;
};

FooterHeader.propTypes = {
  text: PropTypes.string,
};

const FooterHeaderV2 = ({ text }) => {
  return (
    <div className="flex rounded-xl text-green-900 font-semibold text-lg mobile:text-base pad:text-[16px]">
      <p>{text}</p>
    </div>
  );
};

const FooterIconItem = ({ icon, text }) => {
  return (
    <div className="flex items-center space-x-4">
      <FontAwesomeIcon
        icon={icon}
        className="text-green-700 bg-white p-2 rounded-xl w-4 h-4"
      />
      <p className="font-[550] text-green-700 text-[15px]">{text}</p>
    </div>
  );
};

const FooterItem = ({ text }) => {
  return (
    <p className="font-[550] text-green-700 text-[15px] mobile:text-[12px] pad:text-[13px]">
      {text}
    </p>
  );
};

const FooterSocialMediaIcon = ({ icon }) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      className="text-green-700 bg-white p-2 rounded-xl w-4 h-4 cursor-pointer border border-green-700"
    />
  );
};

export default FooterSection;
