import axios from 'axios';
import { useEffect, useState } from 'react'

function useFetch(endpoint) {
  
	const [data,setData] =useState();

	const fetchingData = async ()=>{
		try {
			const res= await axios.get(endpoint);
			// console.log(res.data.results);
			setData(res.data.results)
		} catch (error) {
			console.log("error",error);
		}
	}

	useEffect(()=>{
		fetchingData();
	},[endpoint])

	return {data};
}

export default useFetch
