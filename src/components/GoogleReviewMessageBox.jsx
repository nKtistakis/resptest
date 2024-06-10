export const GoogleReviewMessageBox = ({profilePicUrl, name, rating, comment}) => {
    return (
            <div className="animate-custom-slideInUp duration-100 flex flex-col w-full items-start p-6 rounded-3xl shadow-xl border-gray-400 bg-white  bg-opacity-55 backdrop-blur-md">
                <div className="flex w-full items-center space-x-3">
                    <img 
                    className="rounded-full w-[40px] h-[40px] bg-gray-500 object-cover"
                    src={profilePicUrl}></img>
                    <div className="flex flex-col leading-tight">
                    <p>{name}</p>
                    <p className="text-gray-500 text-[14px]">Αξιολόγηση από Google</p>
                    </div>
                    
                </div>
                <div className="flex w-full text-[12px] mt-3">
                    <p className="font-bold">{rating}/5 <span className="text-gray-500">{' · πριν από έναν μήνα'}</span></p>
                </div>
                <div className="flex w-full text-[14px] mt-2">
                    <span>{comment} …<p className="text-[#12cf8f] font-[500]">Περισσότερα</p></span>
                    
                </div>
            </div>
    );
}