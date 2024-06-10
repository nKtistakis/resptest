export const FooterNavItem = ({text, onClick}) => {
    return (
        <span 
            className="text-green-700 font-[550] cursor-pointer text-[15px] mobile:text-[12px]"
            onClick={onClick}>{text}</span>
    )
}