import React from 'react'
import BannerHome from '../components/BannerHome'
import { useSelector } from 'react-redux'
import Card from '../components/Card';

function HomePage() {
	const trandingData = useSelector((state) => state.moiveoData.bannerData);
	const imageURL=useSelector((state) => state.moiveoData.imageURL)

	// console.log(trandingData);
	// console.log(imageURL);
	
  return (
	<div>
		<BannerHome/>

	  {
		trandingData.map((ele,index)=>{
			
			return (
				<Card key={ele.id+"headind"+index} data={ele} index={index+1} trending={true} />
			)
		})
	  }
	</div>
  )
}

export default HomePage
