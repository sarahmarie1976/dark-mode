import { useLocalStorage } from '../components/useLocalStorage'
import { useState, useEffect } from 'react'
// import { useEffect } from 'react'

export const useDarkMode = bool => {
    const [darkMode, setDarkMode] = useLocalStorage('dark', bool)
    
    useEffect(() =>{
        let body = document.querySelector('body')

            if (darkMode){
                body.classList.add('dark-mode');
            } else {
                body.classList.remove('dark-mode');
            }
    }, [darkMode])

    return [darkMode, setDarkMode] 
}