import { services } from "../data/services";

const PlanBox = ({ index, plan }) => {
  return (
    <div
      style={{ animationDelay: !plan.popular && "300ms" }}
      className={`${
        plan.popular
          ? "animate-custom-fadeIn"
          : "animate-custom-slideInUpDuration1"
      } opacity-0 relative flex flex-col space-y-3 px-4 py-6 rounded-xl border border-gray-300 shadow-lg cursor-pointer text-[14px] w-[300px] h-fit max-h-[460px] ${
        plan.popular
          ? "bg-responsy-green text-white -translate-y-[15px]"
          : "hover:-translate-y-[10px] "
      } duration-300 ease-in`}
    >
      {plan.popular && (
        <img
          className="absolute top-0 right-0 -z-10 w-[300px] h-[460px]"
          src="./plan_lines.svg"
        ></img>
      )}
      <div className="flex w-full justify-end h-[30px]">
        <span className="flex items-center p-2 rounded-xl bg-white text-responsy-green">
          {plan.popular && "MOST POPULAR"}
        </span>
      </div>
      <span
        className={`${plan.popular ? "" : "text-gray-800"} text-[25px] mb-3`}
      >
        €{plan.price}{" "}
        <span
          className={`text-[14px] ${
            plan.popular ? "text-white" : "text-gray-500"
          } `}
        >
          {"/" + plan.frequency}
        </span>
      </span>
      <p
        className={`${
          plan.popular ? "text-white" : "text-gray-800"
        }  text-[24px]`}
      >
        {plan.name}
      </p>
      <p
        className={`${
          plan.popular ? "" : "text-gray-500"
        } font-[600] text-[13px]`}
      >
        {plan.description}
      </p>
      {plan.services.map((service, index) => (
        <div key={index} className="flex items-center space-x-2">
          <img
            src={
              plan.popular ? "./check_icon_selected.svg" : "./check_icon.svg"
            }
            className={`flex rounded-full ${
              plan.popular ? "bg-green-300" : "bg-gray-200"
            }  w-[20px] h-[20px]`}
          />
          <span>{service}</span>
        </div>
      ))}
      {/* <div className="flex w-full justify-center pt-[20px]">
                <button className={`rounded-full py-3 px-6 ${plan.popular ? 'bg-white text-responsy-green':'bg-gray-700 text-white'}`}>Choose plan</button>
            </div> */}
    </div>
  );
};

export const PlanBoxMobile = ({ plan, index }) => {
  return (
    <div
      style={{ animationDelay: `${index * 500}ms` }}
      className={`relative animate-custom-fadeIn opacity-0 flex flex-col space-y-3 px-4 py-2 rounded-xl border border-gray-300 shadow-lg cursor-pointer text-[14px] w-full h-fit max-w-[460px] ${
        plan.popular && "bg-responsy-green text-white"
      } duration-700 ease-in`}
    >
      {plan.popular && (
        <img
          className="absolute top-0 right-0 w-[300px] h-[460px]"
          src="./plan_lines.svg"
        ></img>
      )}
      <div className="flex w-full justify-end h-[30px]">
        <span className="flex items-center p-2 rounded-xl bg-white text-responsy-green">
          {plan.popular && "MOST POPULAR"}
        </span>
      </div>
      <span
        className={`${plan.popular ? "" : "text-gray-800"} text-[25px] mb-3`}
      >
        €{plan.price}{" "}
        <span
          className={`text-[14px] ${
            plan.popular ? "text-white" : "text-gray-500"
          } `}
        >
          {"/" + plan.frequency}
        </span>
      </span>
      <p
        className={`${
          plan.popular ? "text-white" : "text-gray-800"
        }  text-[24px]`}
      >
        {plan.name}
      </p>
      <p
        className={`${
          plan.popular ? "" : "text-gray-500"
        } font-[600] text-[13px]`}
      >
        {plan.description}
      </p>
      {plan.services.map((service, index) => (
        <div key={index} className="flex items-center space-x-2">
          <img
            src={
              plan.popular ? "./check_icon_selected.svg" : "./check_icon.svg"
            }
            className={`flex rounded-full ${
              plan.popular ? "bg-green-300" : "bg-gray-200"
            }  w-[20px] h-[20px]`}
          />
          <span>{service}</span>
        </div>
      ))}
      <div className="flex w-full justify-center pt-[20px]">
        {/* <button
          className={`rounded-full py-3 px-6 mb-3 ${
            plan.popular
              ? "bg-white text-responsy-green"
              : "bg-gray-700 text-white"
          }`}
        >
          Choose plan
        </button> */}
      </div>
    </div>
  );
};

export default PlanBox;
