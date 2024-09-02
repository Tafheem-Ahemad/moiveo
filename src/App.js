import './App.css';
import { React, useEffect } from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import MobileNavigation from './components/MobileNavigation';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setBannerData, setImageURL } from './store/moiveoSlice';

function App() {

  const dispatch =useDispatch();

  const fetchTrendingData = async () =>{
    try {
      const res= await axios.get("/trending/all/week");
      dispatch(setBannerData(res.data.results))

      // console.log("response",res.data.results);
    } catch (error) {
      console.log("error",error);
    }
  }

  const fetchConfiguration =async ()=>{
    try {
      const res= await axios.get("/configuration");

      dispatch(setImageURL(res.data.images.secure_base_url+"original"));

      // console.log("res",res.data.images.secure_base_url+"original");
      
    } catch (error) {
      console.log("error",error);
    }
  }

  useEffect(()=>{
    fetchTrendingData();
    fetchConfiguration();
  },[])

  return (
    <main className='pb-14 lg:pb-0'>
      <Header/>
      <div className='min-h-[90vh]'>
        <Outlet/>
      </div>
      <Footer/>
      <MobileNavigation/>
    </main>
  );
}

export default App;
