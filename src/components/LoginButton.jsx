import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { dashboardUrl } from "../endpoints";

const LoginButton = () => {
  return (
    <a
      href={dashboardUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex space-x-2 items-center w-fit cursor-pointer bg-white bg-opacity-20 backdrop-blur-lg rounded-full p-4 shadow-2xl group "
    >
      <span className="group-hover:-translate-x-1 transition-transform duration-500 ease-in-out text-[21px] mobile:text-[16px] text-gray-600 font-[550] p-2">
        Go to your Dashboard
      </span>
      <ArrowRightIcon className="text-gray-600 w-8 h-8 group-hover:translate-x-1 transition-transform duration-500 ease-in-out" />
    </a>
  );
};

export default LoginButton;
