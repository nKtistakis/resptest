import { WhatWeDoSection } from "./sections/WhatWeDoSection";
import { HeaderNavItem } from "./components/HeaderNavItem";
import { PricingSection } from "./sections/PricingSection";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";
import HeroSection from "./sections/HeroSection";
import { Header } from "./components/Header";
import { useEffect, useRef, useState } from "react";
const LandingPage = () => {
  const [showDemo, setShowDemo] = useState(false);
  const whatWeDoSectionRef = useRef();
  const pricingSectionRef = useRef();
  const contactSectionRef = useRef();

  useEffect(() => {
    const startDemoTimer = setTimeout(() => {
      setShowDemo(true);
    }, 600);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col pl-4 mobile:pl-0 mobile:px-1">
        {/*Header*/}
        <Header
          navItems={[
            <HeaderNavItem
              key={0}
              text={"What We Do"}
              targetRef={whatWeDoSectionRef}
            />,
            <HeaderNavItem
              key={1}
              text={"Pricing"}
              targetRef={pricingSectionRef}
            />,
            <HeaderNavItem
              key={2}
              text={"Contact Us"}
              targetRef={contactSectionRef}
            />,
          ]}
        />
        {/*Hero Section*/}
        <HeroSection showDemo={showDemo} />

        {/*What We Do section*/}
        <div className="flex w-full mb-[80px]"></div>
        <WhatWeDoSection ref={whatWeDoSectionRef} />

        {/* <div className="flex w-full mb-[80px] justify-center">
          <iframe
            className="flex w-[70%]"
            src="http://localhost:5174"
            title="Embedded Second React App"
            width="100%"
            height="500px"
            style={{ border: "none" }}
          />
        </div> */}

        {/* plans section */}
        <div className="flex w-full mb-[80px]"></div>
        <PricingSection ref={pricingSectionRef} />
        {/* contact us section */}
        <ContactSection ref={contactSectionRef} />
      </div>
      {/*footer section */}
      <FooterSection />
    </div>
  );
};

export default LandingPage;
