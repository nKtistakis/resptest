import PropTypes from "prop-types"
import { DemoReviewInteractionBox } from "../components/DemoReviewInteractionBox"
import { useDeviceType } from "../hooks/useDeviceType"
import LoginButton from "../components/LoginButton"

const HeroSection = ({ showDemo }) => {

    const deviceType = useDeviceType()

    return (
        <div className="flex justify-between mobile:flex-col mobile:items-center mobile:justify-start pad:flex-col pad:items-center pad:justify-start">

            <div className="flex flex-col mt-12 font-manrop px-4 mobile:px-2">

                <h1 className="heroh text-[78px] mobile:text-[60px]">Reviews,</h1>
                <h1 className="heroh d2 text-[78px] mobile:text-[60px]">Reimagined</h1>
                <h1 className="heroh d3 text-[78px] mobile:text-[60px]">With <span className="desktop:text-white">Ai</span></h1>




                {/* <h2 className="mt-2 text-[18px] text-gray-600 tracking-tight leading-tight">Make the most out of your reviews with our AI review assistant</h2> */}
                {/* <MessageBox text={'Make the most out of your reviews with our AI review assistant'}/>                 */}
                <div className="flex mt-16 desktop:mt-16 mobile:mb-28">
                    <LoginButton />
                </div>
                {/* <span className="flex w-fit bg-[#12cf8f] rounded-2xl py-3 px-5 text-white font-[500] mt-6 cursor-pointer">Get Responsy</span> */}
            </div>
            <img className="absolute top-0 mobile:-top-[70px] right-0 overflow-hidden w-[800px] h-[800px] -z-30" src="./header_accent_v1.svg"></img>
            <img className="absolute top-0 left-0 overflow-hidden w-[800px] h-[800px] -z-10" src="./header_accent2_v2.svg"></img>
            {/* <img className="absolute -top-3 -z-20 opacity-50" src="./bg_grid.svg"/> */}
            <div className="h-[500px]">
                {showDemo && <DemoReviewInteractionBox />}
            </div>





        </div>

    )
}

HeroSection.propTypes = {
    showDemo: PropTypes.bool,
}

export default HeroSection