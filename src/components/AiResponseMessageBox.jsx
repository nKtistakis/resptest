import './AiResponseMessageBox.css'
export const AiResponseMessageBox = ({ answer }) => {
    return (
        <div className={`animate-custom-slideInUp flex flex-col shadow-xl ${!answer ? 'w-fit p-4' : 'w-[90%] p-6'} rounded-3xl bg-gray-800 bg-opacity-65 backdrop-blur-md items-center`}>
            {!answer ?
                <div className='wave flex space-x-[4px]'>
                    <span className="dot one"></span>
                    <span className="dot two"></span>
                    <span className="dot three"></span>
                </div> :
                <div className='flex flex-col w-full'>
                    <div className="flex w-full items-center space-x-3 text-white">
                        <img
                            className="rounded-full w-[40px] h-[40px] bg-gray-500 object-cover"
                            src='./demo_store_profile_pic.jpg'></img>
                        <div className="flex flex-col leading-tight">
                            <p>Responsy Ai</p>
                            <p className="text-gray-400 text-[14px]">Επιχείρηση</p>
                        </div>
                    </div>
                    <div className="flex w-full text-[14px] mt-2">
                        <span className='text-white text-[14px]'>{answer}</span>

                    </div>

                </div>
            }


        </div>

    );
}

export const AiResponseMessageBoxAnswer = ({ answer }) => {
    return (
        <div className={`animate-custom-slideInUp flex flex-col shadow-xl ${!answer ? 'w-fit p-4' : 'w-[90%] p-6'} rounded-3xl bg-gray-800 bg-opacity-65 backdrop-blur-md items-center`}>
            {!answer ?
                <div className='wave flex space-x-[4px]'>
                    <span className="dot one"></span>
                    <span className="dot two"></span>
                    <span className="dot three"></span>
                </div> :
                <div className='flex flex-col w-full'>
                    <div className="flex w-full items-center space-x-3 text-white">
                        <img
                            className="rounded-full w-[40px] h-[40px] bg-gray-500 object-cover"
                            src='./demo_store_profile_pic.jpg'></img>
                        <div className="flex flex-col leading-tight">
                            <p>Responsy Ai</p>
                            <p className="text-gray-400 text-[14px]">Επιχείρηση</p>
                        </div>
                    </div>
                    <div className="flex w-full text-[14px] mt-2">
                        <span className='text-white text-[14px]'>{answer}</span>

                    </div>

                </div>
            }


        </div>

    );
}