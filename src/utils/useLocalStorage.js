import { useEffect, useState } from "react"

const useLocalStorage = (key,value)=>{
    const[ localStorageValue,setLocalStorageValue] = useState(()=>{
        const jsonValue = localStorage.getItem(key);
        if (jsonValue != null) return JSON.parse(jsonValue)
    
        if (typeof value === 'function') {
          return value()
        } else {
          return value
        }});
    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(localStorageValue));
    },[key,localStorageValue])
return [localStorageValue, setLocalStorageValue];
}
export default useLocalStorage;