import PropTypes from "prop-types"

export const HeaderNavItem = ({text, targetRef}) => {

    const scrollToTarget = (targetRef) => {
        if (targetRef.current) {
          targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <span 
            className="flex text-gray-500 font-semibold cursor-pointer mobile:text-white pad:text-white mobile:hover:translate-x-4 transition-transform ease-in-out duration-300"
            onClick={() => scrollToTarget(targetRef)}>{text}</span>
    )
}

HeaderNavItem.propTypes = {
    text: PropTypes.string,
    targetRef: PropTypes.object,
}