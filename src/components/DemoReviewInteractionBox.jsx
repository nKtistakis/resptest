import { useEffect, useRef } from "react";
import { useState } from "react";
import { GoogleReviewMessageBox } from "./GoogleReviewMessageBox";
import { AiResponseMessageBox, AiResponseMessageBoxAnswer } from "./AiResponseMessageBox";
import { useDeviceType } from "../hooks/useDeviceType";
import DeviceTypes from "../DeviceTypes";

export const DemoReviewInteractionBox = () => {

    const [start, setStart] = useState(false)
    const [responseStatus, setResponseStatus] = useState(0)
    const ref = useRef();

    const {deviceType} = useDeviceType()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setStart(true)
            }
        });

        observer.observe(ref.current);

        let showTypingTimer, showResponseTime;

        if (start) {
            const showTypingTimer = setTimeout(() => {
                setResponseStatus(1) //typing
            }, 1000)

            const showResponseTime = setTimeout(() => {
                setResponseStatus(2) // shown
            }, 3600)
        }


        return () => {
            clearTimeout(showTypingTimer);
            clearTimeout(showResponseTime);
            observer.disconnect();
        };

    }, [start])

    return (
        <div className="flex flex-col h-[500px] justify-start items-end pad:mt-[60px]">
            {deviceType === DeviceTypes.MOB && <img src="./bubbles_v1.svg" className="absolute right-12 -z-20 translate-y-6"/>}
            <div className="flex flex-col space-y-10 items-end right-2 max-w-[600px] border-gray-500 p-4">

                {!start && <div className="h-[200px]"></div>}
                {start && <GoogleReviewMessageBox
                    profilePicUrl={'./sample_profile_pic.webp'}
                    name={'Natalia Jenkins'}
                    rating={4}
                    comment={'Nice shop. Different areas for smoking and non-smoking. The first time we went, it was noon and we got a few things for a snack. Mushrooms'} />
                }
                {responseStatus === 1 ?
                    <AiResponseMessageBox /> : responseStatus === 2 &&
                    <AiResponseMessageBoxAnswer
                        answer={'Thank you for your kind words! We’re delighted to hear that you enjoyed our shop as our team strives to create a welcoming environment for all our guests. As for the mention of mushrooms, we’re glad it piqued your curiosity! Feel free to explore further during your next visit—we have more surprises in store! 🍄✨'} />}

            </div>
            <div ref={ref} className="w-full h-[20px]"></div>
        </div>
    );
}