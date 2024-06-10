const MessageBox = ({ text }) => {
    return (
        <div className="animate-custom-slideInUp duration-100 flex flex-col w-full items-start p-6 rounded-3xl shadow-xl border-gray-400 bg-white  bg-opacity-55 backdrop-blur-md">
            <span>{text}</span>
        </div>
    )
}

export default MessageBox