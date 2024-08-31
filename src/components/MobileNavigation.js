import React from 'react'
import { mobileNavigationBar } from '../contents/navigation'
import { NavLink } from 'react-router-dom'

function MobileNavigation() {
  return (
	<section className='lg:hidden h-14 bg-black bg-opacity-70 backdrop-blur-2xl fixed bottom-0 w-full z-40'>
        <div className='flex items-center justify-between h-full text-neutral-400'>
            {
                mobileNavigationBar.map((nav,index)=>{
                    return(
                        <NavLink
                            key={nav.label+"mobilenavigation"} 
                            to={nav.href}
                            className={({isActive})=>`px-3 flex h-full items-center flex-col justify-center ${isActive ? "text-orange-400" : ""}`}
                        >
                            <div className='text-2xl'>
                                {nav.icon}
                            </div>
                            <p className='text-sm'>{nav.label}</p>
                        </NavLink>
                    )
                })
            }
        </div>
    </section>
  )
}

export default MobileNavigation
