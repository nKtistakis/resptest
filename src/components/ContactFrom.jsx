import { AiResponseMessageBox } from "./AiResponseMessageBox"
import AiMessageBubble from "./prototype/AiMessageBubble"

const ContactForm = ({ data, setData, dataError, handleSubmit }) => {

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
                    className={`w-full py-3 px-2 ${dataError[id] && ' border-2 border-red-600' } rounded-lg text-gray-700 leading-tight mt-3 focus:outline-none`}>
                </input>}
            {dataError[id] && <div className={'text-red-500 text-sm font-bold mb-6'}>{dataError[id]}</div>}

        </section>)
    }

    const FormRow = ({fields = []}) => {
        return (
            <div className="flex flex-col w-full desktop:flex-row desktop:space-x-4">
                {fields}
            </div>
        );
    }


    return (       
            <form
                className="flex flex-col w-full pad:w-full p-5 space-y-[20px] justify-between items-center shadow-xl rounded-xl bg-gray-200 bg-opacity-40 backdrop-blur-md"
                noValidate
                onSubmit={handleSubmit}>
                    
                <div className="flex w-full space-x-4 mobile:flex-col mobile:space-x-0">
                    {FormField({ id: 'fullName', type: 'text', label: 'Full Name *' })}
                    {FormField({ id: 'email', type: 'email', label: 'Contact Email *' })}
                </div>
                <div className="flex w-full space-x-4 mobile:flex-col mobile:space-x-0">
                    {FormField({ id: 'companyName', type: 'text', label: 'Company\'s Name *' })}
                    {FormField({ id: 'companyAddress', type: 'text', label: 'Company\'s Address *' })}
                </div>
                {FormField({ id: 'companyNumber', type: 'number', label: 'Company\'s Phone Number *' })}
                {FormField({ id: 'message', label: 'Message', isTextArea: true })}
                <button
                    className="flex w-[50%] bg-responsy-green p-3 rounded-3xl text-white font-semibold justify-center"
                    type="submit">Submit
                </button>
            </form>
       
    )
}


export default ContactForm