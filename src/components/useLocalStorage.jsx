import {useState} from 'react'




export function useLocalStorage(name, initialValue){
    const [StoredValue, setStoredValue] = useState(() =>{
        const item = window.localStorage.getItem(name)
        return item ? JSON.parse(item) : initialValue
    })
    const setValue = (value) =>{
        setStoredValue(value)
        window.localStorage.setItem(name, JSON.stringify(value))
    }

    return [StoredValue, setValue]
}