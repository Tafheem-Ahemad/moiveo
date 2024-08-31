import React from 'react'
import logo from '../assets/logo.png'
import userLogo from '../assets/user.png'
import { BiSolidMoviePlay } from "react-icons/bi";
import { PiTelevisionFill } from "react-icons/pi";
import { GoSearch } from "react-icons/go";
import { Link, NavLink } from 'react-router-dom';


export const navigation = [
    {
        label : "TV Shows",
        href : 'tv',
        icon : <PiTelevisionFill/>
    },
    {
        label : "Movies",
        href : "movie",
        icon : <BiSolidMoviePlay/>
    }
]

function Header() {

  return (
	<header className='fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40'>
		<div className='container mx-auto px-3 flex items-center h-full'>
			<Link to={"/"}>
				<img
                    src={logo}
                    alt='logo'
                    width={120} 
                />
			</Link>

			<nav className='flex items-center gap-1 ml-5'>
				{
					navigation.map((nav,index) => {
						return (
							<div >
                                <NavLink key={nav.label+"header"+index} to={nav.href} className={({isActive})=>`px-2 hover:text-neutral-100 ${isActive && "text-neutral-100"}`}>
                                    {nav.label}
                                </NavLink>
                            </div>
						)
					})
				}
			</nav>

			<div className='ml-auto flex items-center gap-5'>
				<form className='flex items-center gap-2' onSubmit={(e) => {e.preventDefault()}}>
                    <input
                        type='text'
                        placeholder='Search here...'
                        className='bg-transparent px-4 py-1 outline-none border-none hidden lg:block'
                        // onChange={(e)=>setSearchInput(e.target.value)}
                        // value={searchInput}
                    />
                    <button className='text-2xl text-white'>
                            <GoSearch/>
                    </button>
                </form>
				<div className='w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all'>
					<img 
						src={userLogo}
						className='w-ful h-full' 
					/>
				</div>
			</div>
		</div>
	</header>
  )
}

export default Header
