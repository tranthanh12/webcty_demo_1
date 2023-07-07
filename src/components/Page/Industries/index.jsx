import React from 'react'
import style from './style.module.css'

const index = () => {
    return (
        <div className='body'>
            <main>
                <div className={style.background_banner}></div>

                <div className={style.box_industrie}>
                    <div className={style.banner_industrie}>
                        <div className={style.img_banner}>
                            <div className={style.title_banner}></div>
                        </div>
                    </div>
                </div>
                <div className={style.box}>
                    <div className={style.box_support}>
                        <div className={style.box_item}>
                            <div className={style.item}>
                                
                                <div className={style.item_icon}>
                                    <img src="./images/industrie/Frame 42993 (1).png" alt="" />
                                </div>
                            </div>

                            <div className={style.item} id={'item_active'}>
                                
                                <div className={style.item_icon}>
                                    <img src="./images/industrie/Frame 42994.png" alt="" />
                                </div>
                            </div>

                            <div className={style.item}>
                                
                                <div className={style.item_icon}>
                                    <img src="./images/industrie/Frame 42995.png" alt="" />
                                </div>
                            </div>

                            <div className={style.item} id={'item_active'}>
                                
                                <div className={style.item_icon}>
                                    <img src="./images/industrie/Frame 42996.png" alt="" />
                                </div>
                            </div>

                            <div className={style.item}>
                               
                                <div className={style.item_icon}>
                                    <img src="./images/industrie/Frame 42997.png" alt="" />
                                </div>
                            </div>

                            <div className={style.item} id={'item_active'}>
                                
                                <div className={style.item_icon}>
                                    <img src="./images/industrie/Frame 42998.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default index