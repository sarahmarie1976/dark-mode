import { useState, useEffect } from 'react'
// import { useEffect } from 'react'
import Axios from 'axios'

export const useAxios = (initialUrl, cbCatch) =>{
    const [url, setUrl] = useState(initialUrl)
    const [data, setData] = useState([])
    
    useEffect(() =>{
        Axios.get(url)
            .then(apiData =>{
                console.log(apiData)
                setData(apiData.data)
            })
            .catch(cbCatch)
    }, [url])

    const update  = newUrl =>{
        setUrl(newUrl)
    }
    return [data, update]
}