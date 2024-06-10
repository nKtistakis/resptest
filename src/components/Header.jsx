import DeviceTypes from "../DeviceTypes";
import { useDeviceType } from "../hooks/useDeviceType";

export const Header = ({navItems}) => {
    const {deviceType} = useDeviceType()
    return (
        <div className="flex mobile:items-start items-center pad:w-full mobile:w-full w-[60%] px-4 pt-2 pb-4">
            <img className="w-[170px] h-[100px] object-contain cursor-pointer" src="./logo_v5_transparent.png"></img>
            {deviceType !== DeviceTypes.MOB ? <div className="flex flex-1 justify-end space-x-8">
                {navItems && navItems.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div> :
            <div className="flex flex-1 flex-col items-end space-y-8 pt-8 pr-3">
            {navItems && navItems.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>}
      </div>
    );
}