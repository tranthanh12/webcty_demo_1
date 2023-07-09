import React from 'react'
import style from './style.module.css'

const index = () => {
    return (
        <div>
            <div className={style.content_company}>
                <div className={style.content_company_title}>
                    <p>ABOUT US</p>
                    <div className={style.content_company_line}></div>
                </div>
                <div className={style.content_company_text}>
                    <p>SF-Technologists is a leading technology company specializing in providing software, web and mobile technology service solutions. Planning, technology strategy, custom software development in line with business vision.</p>

                </div>
                <div className={style.content_company_img}>
                    <img src="./images/banner/Frame 42962 (1).png" alt="" />
                </div>

                <div className={style.content_company_text2}>

                    <span>We care, we share, we innovate</span>
                    <span>Supportive environment encouraging friendliness and openness</span>

                </div>
                <div className={style.content_company_imgbottom}>
                    
                    <div className={style.item_img}>
                        <img src="./images/banner/Rectangle 1 (2).png" alt="" />
                        <p className={style.title_img}> Charity </p>
                    </div>

                    <div className={style.item_img}>
                        <img src="./images/banner/Rectangle 2 (2).png" alt="" />
                        <p className={style.title_img}> Charity </p>
                    </div>

                    <div className={style.item_img}>
                        <img src="./images/banner/Rectangle 3 (2).png" alt="" />
                        <p className={style.title_img}> Charity </p>
                    </div>

                    <div className={style.item_img}>
                        <img src="./images/banner/Rectangle 4 (2).png" alt="" />
                        <p className={style.title_img}> Charity </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default index
