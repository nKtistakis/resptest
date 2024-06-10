const LoginForm = ({ data, setData, dataError, handleSubmit }) => {

    const FormField = ({ id, type, label, isTextArea = false }) => {
        return (<section className="flex flex-col w-full items-start">
            {!isTextArea && <label className="text-gray-600 font-semibold">{label}</label>}
            {isTextArea ?
                <textarea
                    placeholder={label}
                    id={id}
                    value={data[id]}
                    onChange={(event) => setData({ ...data, [event.target.id]: event.target.value })}
                    className={`w-full py-3 px-2 resize-none min-h-[100px] ${dataError[id] && 'border-2 border-red-600'} rounded-lg text-gray-700 leading-tight mt-3 focus:outline-none`}></textarea> :
                <input
                    type={type}
                    id={id}
                    value={data[id]}
                    onChange={(event) => setData({ ...data, [event.target.id]: event.target.value })}
                    className={`w-full py-3 px-2 ${dataError[id] ? ' border-2 border-red-600' : 'border-2 border-responsy-green'} rounded-2xl text-gray-700 leading-tight mt-3 focus:outline-none`}>
                </input>}
            {dataError[id] && <div className={'text-red-500 text-sm font-bold mb-6'}>{dataError[id]}</div>}

        </section>)
    }
    return (
        <form
            className="flex flex-col w-full space-y-6 px-3 py-6 items-center"
            noValidate
            onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-6 w-full max-w-[300px]">
                    <div className="flex w-full  items-center space-x-4">
                        <img className="w-[40px] h-[40px] object-contain" src="./logo_v5_icon_transparent.png" />
                        <h2 className="text-[25px]">Login</h2>
                    </div>
                    <p className="text-[16px] flex w-full">Sign-In to enter your Responsy Dashboard</p>
                </div>
            
            <div className="flex flex-col max-w-[300px] w-full items-center space-y-6">
            {FormField({ id: 'email', type: 'email', label: 'Email Address *' })}
            {FormField({ id: 'password', type: 'password', label: 'Password *' })}
            <p className="flex w-full justify-end font-semibold -translate-y-[20px] text-gray-700 text-[14px]">Forgot Password?</p>
            <div className="pt-12 flex w-full">
            <button className="w-full p-2 rounded-2xl bg-responsy-green text-white font-semibold">Sign In</button>

            </div>

            </div>

           
        </form>
    )
}

export default LoginForm