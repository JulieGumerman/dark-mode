import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    //setting state, snagging any items from storage
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    //setting state if there isn't already something in storage; this will be saved to local storage. (setter function)
    const setValue = value => {
        setStoredValue(value); //setting state of stored value with value
        window.localStorage.setItem(key, JSON.stringify(value)); //and now it's being stashed in local storage
    }

    return [storedValue, setValue];

}

export default useLocalStorage;