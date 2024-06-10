import { useContext } from "react"
import DeviceContext from "../context/DeviceProvider"

export const useDeviceType = () => {
    return useContext(DeviceContext)
}