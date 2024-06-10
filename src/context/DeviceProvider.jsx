import { createContext, useEffect, useState } from "react";
import DeviceTypes from "../DeviceTypes";

const DeviceContext = createContext({}); 

export const DeviceProvider = ({children}) => {
    const [deviceType, setDeviceType] = useState(window.innerWidth <= 650 ? DeviceTypes.MOB : window.innerWidth <= 1279 ? DeviceTypes.PAD : DeviceTypes.DES)
    
    useEffect(() => {
        const handleResize = () => {
          setDeviceType(
            window.innerWidth <= 650 ? DeviceTypes.MOB : window.innerWidth <= 1279 ? DeviceTypes.PAD : DeviceTypes.DES);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <DeviceContext.Provider value={{deviceType}}>
           {children}
        </DeviceContext.Provider>
    );
}

export default DeviceContext