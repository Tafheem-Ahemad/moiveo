import React from 'react'
import { BiSolidMoviePlay } from "react-icons/bi";
import { MdLiveTv } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { AiFillHome } from "react-icons/ai";

export const navigation = [
    {
        label : "TV Shows",
        href : 'tv',
        icon : <MdLiveTv/>
    },
    {
        label : "Movies",
        href : "movie",
        icon : <BiSolidMoviePlay/>
    }
]


export const mobileNavigationBar = [
    {
        label : "Home",
        href : "/",
        icon : <AiFillHome/>
    },
    ...navigation,
    {
        label : "search",
        href : "/search",
        icon : <GoSearch/>
    }
]