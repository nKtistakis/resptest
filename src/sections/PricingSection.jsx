/* eslint-disable react/display-name */
import { forwardRef, useEffect, useRef, useState } from "react";
import { SectionHeader } from "../components/SectionHeader";
import SectionSubHeader from "../components/SectionSubHeader";
import PlanBox, { PlanBoxMobile } from "../components/PlanBox";
import { plans } from "../data/plans";
import { useDeviceType } from "../hooks/useDeviceType";
import DeviceTypes from "../DeviceTypes";
import LoginButton from "../components/LoginButton";

export const PricingSection = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="flex flex-col w-full">
      <SectionHeader title={"Pricing"} />
      <SectionSubHeader text={"Choose a plan that best suits your needs"} />
      <PlansContainer />
    </section>
  );
});

const PlansContainer = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  const ref = useRef();

  const { deviceType } = useDeviceType();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setStartAnimation(true);
      }
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col w-full mt-6 desktop:mt-0 px-2">
      {/* <div className={`${deviceType === DeviceTypes.DES ? 'h-[500px]' : 'h-[1500px]'} flex flex-col space-y-6 w-full items-center desktop:flex-row desktop:items-start desktop:justify-center desktop:space-x-4 desktop:mt-12 desktop:space-y-0`}> */}
      <div
        ref={ref}
        className={`h-[1400px] desktop:h-[500px] flex flex-col space-y-6 w-full items-center desktop:flex-row desktop:items-start desktop:justify-center desktop:space-x-4 desktop:mt-12 desktop:space-y-0`}
      >
        {startAnimation &&
          plans.map((plan, index) => {
            return deviceType === DeviceTypes.DES ? (
              <PlanBox
                key={index}
                index={index}
                plan={plan}
                startAnimation={startAnimation}
              />
            ) : (
              <PlanBoxMobile
                key={index}
                plan={plan}
                startAnimation={startAnimation}
                index={index}
              />
            );
          })}
        {deviceType !== DeviceTypes.DES && (
          <>
            <span className="flex w-full justify-center mb-6">
              <h3 className="text-xl">
                Login to your Dashboard to see more details
              </h3>
            </span>
            <div className="flex w-full justify-center mb-6">
              <LoginButton />
            </div>
          </>
        )}
      </div>
      {deviceType === DeviceTypes.DES && (
        <>
          <span className="flex w-full justify-center mb-6">
            <h3 className="text-xl">
              Login to your Dashboard to see more details
            </h3>
          </span>
          <div className="flex w-full justify-center mb-6">
            <LoginButton />
          </div>
        </>
      )}
      <span className="flex w-full h-[160px]"></span>
    </div>
  );
};
