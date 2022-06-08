import { useContext } from "react";
import { ThemeContext } from "../context/Themecontext";

export const useTheme = ()=>{
    const context = useContext(ThemeContext)
    return context
}