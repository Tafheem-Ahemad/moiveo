import React from 'react'
import BannerHome from '../components/BannerHome'
import { useSelector } from 'react-redux'
import HorizontalScollCard from '../components/HorizontalScollCard';
import useFetch from '../hooks/useFetch';

function HomePage() {
	const trandingData = useSelector((state) => state.moiveoData.bannerData);
	const {data : nowPlayingData} = useFetch("/movie/now_playing")
	const {data : topRatedData} = useFetch("/movie/top_rated")
	const {data : poputarTvData} = useFetch("/tv/popular")
	const {data : onTheAirData} = useFetch("/tv/on_the_air")
	
	
	// console.log(nowPlayingData);
	// console.log(trandingData);
	
  return (
	<div>
		<BannerHome/>
		<HorizontalScollCard data={trandingData} heading={"Trending"} trending={true} />
		<HorizontalScollCard data={nowPlayingData} heading={"Now Playing"} media_type={"movie"}  />
		<HorizontalScollCard data={topRatedData} heading={"Top Rated"} media_type={"movie"}  />
		<HorizontalScollCard data={poputarTvData} heading={"Popular TV Show"} media_type={"tv"}  />
		<HorizontalScollCard data={onTheAirData} heading={"On The Air"}  media_type={"tv"} />
	</div>
  )
}

export default HomePage
