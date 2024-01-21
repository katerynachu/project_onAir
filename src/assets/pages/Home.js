import React from 'react'
import FistScreen from '../components/fist-screen/FistScreen';
import PopularMovie from '../components/movie/popular/PopularMovie';
import TopMovie from '../components/movie/top/TopMovie';
import Upcoming from '../components/movie/coming/Upcoming';



export default function Home() {

    return (
        <div >
            <FistScreen/>
            <div className='movies'>
                <TopMovie />
                <PopularMovie />
                <Upcoming />
            </div>
        </div>
    )
}
