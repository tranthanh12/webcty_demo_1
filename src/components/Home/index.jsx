import React from 'react'
import Banner from '../Home/Banner'
import Introduce from '../Home/Introduce'
import OurService from '../Home/OurService'

const index = () => {
    return (
        <div className='body'>
            <main>
                    <Banner></Banner>
                    <Introduce></Introduce>
                    <OurService></OurService>
            </main>
        </div>
    )
}

export default index