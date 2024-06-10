import { forwardRef, useEffect, useRef, useState } from "react";
import { SectionHeader } from "../components/SectionHeader";
import ContactForm from "../components/ContactFrom";
import AiMessageBubble, {
  AiMessageBubbleAnswer,
} from "../components/prototype/AiMessageBubble";
import Form from "../components/forms/Form";
import FormField from "../components/forms/FormField";
import Row from "../components/forms/Row";
import {
  validateEmail,
  validateFullName,
  validatePhoneNumber,
  validateRequired,
  validateText,
} from "../utils/validators";
import { backendUrl } from "../endpoints";

const initialContactData = {
  fullName: "",
  email: "",
  companyName: "",
  companyAddress: "",
  companyNumber: "",
  message: "",
};

const ContactSection = forwardRef((props, ref) => {
  const [data, setData] = useState(initialContactData);
  const [contactDataError, setContactDataError] = useState(initialContactData);
  const [showAlert, setShowAlert] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const [responseStatus, setResponseStatus] = useState(0);
  const handleSubmit = () => {
    fetch(backendUrl + "/emailer/getInfo", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setStartAnimation(true);
      }
    });

    observer.observe(ref.current);

    let showTypingTimer, showResponseTime;

    if (startAnimation) {
      const showTypingTimer = setTimeout(() => {
        setResponseStatus(1); //typing
      }, 0);

      const showResponseTime = setTimeout(() => {
        setResponseStatus(2); // shown
      }, 2000);
    }

    return () => {
      clearTimeout(showTypingTimer);
      clearTimeout(showResponseTime);
      observer.disconnect();
    };
  }, [startAnimation]);

  return (
    <section ref={ref} className="flex flex-col items-center">
      <SectionHeader title={"Contact Us"} />
      {/* <img src="bean_icon_v1.svg" className="absolute -z-10 -translate-x-[600px] -translate-y-[100px] w-[800px] h-[800px]"></img> */}
      {/* <img className="absolute -z-20 w-[800px] h-[800px] left-0" src="./blob2.svg"></img> */}

      <span className="mb-[50px]"></span>
      <div className="flex flex-col desktop:w-[60%] items-center space-y-7 w-full pad:w-[80%]">
        <div className="flex w-full justify-end">
          <div className="flex w-[600px] h-[150px] justify-end">
            {responseStatus === 1 ? (
              <AiMessageBubble />
            ) : (
              responseStatus === 2 && (
                <AiMessageBubbleAnswer
                  message={
                    <p>
                      Interested in Responsy? <br />
                      Leave us your information and get in contact with us
                    </p>
                  }
                />
              )
            )}
          </div>
        </div>

        <Form isCancelable={false} handleSubmit={handleSubmit}>
          <Row>
            <FormField
              id="fullName"
              type="text"
              label="Full Name"
              isRequired
              data={data}
              setData={setData}
              dataError={contactDataError}
              setDataError={setContactDataError}
              validateFunc={validateFullName}
            />
            <FormField
              id="email"
              type="email"
              label="Email"
              isRequired
              data={data}
              setData={setData}
              dataError={contactDataError}
              setDataError={setContactDataError}
              validateFunc={validateEmail}
            />
          </Row>
          <Row>
            <FormField
              id="companyName"
              type="text"
              label="Company Name"
              isRequired
              data={data}
              setData={setData}
              dataError={contactDataError}
              setDataError={setContactDataError}
              validateFunc={validateRequired}
            />
            <FormField
              id="companyAddress"
              type="text"
              label="Company Address"
              isRequired
              data={data}
              setData={setData}
              dataError={contactDataError}
              setDataError={setContactDataError}
              validateFunc={validateRequired}
            />
            <FormField
              id="companyNumber"
              type="text"
              label="Company Phone Number"
              isRequired
              data={data}
              setData={setData}
              dataError={contactDataError}
              setDataError={setContactDataError}
              validateFunc={validatePhoneNumber}
            />
          </Row>
          <Row>
            <FormField
              id="message"
              type="text"
              label="Your Message"
              isRequired
              isTextArea
              data={data}
              setData={setData}
              dataError={contactDataError}
              setDataError={setContactDataError}
              validateFunc={validateRequired}
            />
          </Row>
        </Form>

        {/* <ContactForm data={data} setData={setData} dataError={contactDataError} handleSubmit={handleSubmit} /> */}
      </div>
    </section>
  );
});

export default ContactSection;
