import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = () => {
    //utilizing local storage
    const [darkMode, setDarkMode] = useLocalStorage("dark mode"); 
    
    useEffect(() => {


        if (darkMode === true) {
            return window.document.body.classList.add("dark-mode")
        } else {
            return window.document.body.classList.remove("dark-mode")
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];
}
