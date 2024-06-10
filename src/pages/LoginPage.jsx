import { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm"
import AiMessageBubble, { AiMessageBubbleAnswer } from "../components/prototype/AiMessageBubble";
import { useDeviceType } from "../hooks/useDeviceType";
import DeviceTypes from "../DeviceTypes";

const initialContactData = {

    email: "",
    password: "",
};

const LoginPage = () => {

    const [data, setData] = useState(initialContactData)
    const [dataError, setDataError] = useState(initialContactData);

    const [showMessage, setShowMessage] = useState(false)


    const {deviceType} = useDeviceType();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        const showMessageTimer = setTimeout(() => {
            setShowMessage(true);
        }, 2400);
    }, []);


    return (
        <div className="flex flex-col w-full desktop:flex-row desktop:justify-center desktop:items-center desktop:w-screen desktop:h-screen desktop:pr-6">
            {deviceType !== DeviceTypes.DES &&
                <div className="flex w-full justify-end"> 
                    <section className="flex max-w-[500px] justify-end pr-6 pt-6 mobile:h-[200px] h-[150px]">
                        {showMessage ? <AiMessageBubbleAnswer message={'Welcome to Responsy! Please enter your credentials to go to your DashBoard!'} /> : <AiMessageBubble />}
                    </section>
                </div>
            }
            <section className="flex desktop:rounded-xl desktop:shadow-xl desktop:p-6">
                <LoginForm
                    data={data}
                    setData={setData}
                    dataError={dataError}
                    handleSubmit={handleSubmit} />
            </section>

            {deviceType === DeviceTypes.DES && <section className="flex w-[500px] justify-end">
            {showMessage ? <AiMessageBubbleAnswer message={'Welcome to Responsy! Please enter your credentials to go to your DashBoard!'}/> : <AiMessageBubble/>}

            </section>}

        </div>
    )
}

export default LoginPage