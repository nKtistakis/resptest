/* eslint-disable react/display-name */
import { forwardRef, useEffect, useRef, useState } from "react";
import "./WhatWeDoSection.css";
import ServiceComponent from "../components/ServiceComponent";

export const WhatWeDoSection = forwardRef((props, ref) => {
  const [startAnimation, setStartAnimation] = useState(false);
  const servicesRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setStartAnimation(true);
      }
    });

    observer.observe(servicesRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={ref}
      className="flex flex-col w-full mobile:mt-[100px] mt-[40px] mb-[100px] items-center justify-center">
     
      <div className="flex flex-col mobile:w-[90%] w-[70%] text-[18px] items-center">
        <h2 className="font-bold text-[40px] text-gray-600 mb-12 text-center">
          What We Do
        </h2>

        <p className="flex font-bold text-gray-500 mobile:text-center text-center">
          Harness the capabilities of AI to revolutionize your online presence
          and reputation. <br />
          {/* Our platform provides a wide range of services specifically designed
          to enhance the impact of reviews for your business */}
        </p>
        <span ref={servicesRef}></span>
      </div>
      <div className="grid grid-cols-1 gap-6 p-6 desktop:grid-cols-3 mt-12">
        {(
          <ServiceComponent
            iconUrl={"./chatBubbles.svg"}
            title={"Automated Review Replies"}
            description={
              "Say goodbye to manual responses! Our AI-powered system crafts personalized replies to customer reviews on Google, saving you time and effort while maintaining a human touch."
            }
          />
        )}

        {(
          <ServiceComponent
            index={1}
            iconUrl={"./analytics_icon.svg"}
            title={"Insightful Analytics"}
            description={
              "Gain valuable insights into customer sentiment and feedback trends with our advanced analytics tools. Understand what your customers love and where there's room for improvement to refine your business strategies"
            }
          />
        )}
        {(
          <ServiceComponent
            index={2}
            iconUrl={"./customization3_icon.png"}
            title={"Customized Solutions"}
            description={
              "Every business is unique, and so are its needs. Our customizable solutions are tailored to suit your specific requirements, whether you're a small local shop or a multinational corporation"
            }
          />
        )}
        {/* <span ref={ref} className=""></span> */}
      </div>
    </section>
  );
});
