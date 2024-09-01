import axios from "axios"
import { useEffect, useState } from "react"

const useFetchDetails = (link)=>{
    const [data,setData] = useState()

    const fetchData = async()=>{
        try {
            const response = await axios.get(link)
            setData(response.data)
        } catch (error) {
            console.log('error',error)
       }
    }

    useEffect(()=>{
        fetchData()
    },[link])

    return {data}
}

export default useFetchDetails