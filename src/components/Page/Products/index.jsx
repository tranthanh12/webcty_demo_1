import React from 'react'
import style from './style.module.css'
import Link from 'next/link'
const index = () => {
    return (
        <>
            <div className='body'>
                <main>
                    <div className={style.contactUs_banner}></div>
                </main>
            </div>

            <div className={style.body_product}>
                <div className={style.content_product}>
                    <p>SF Department was founded in 2022 with a great passion for pursuing new technology creating better solutions. Our talented engineers always strive for new brighter ways to do old things.</p>
                    <p>Just like other incubators, SF desires to nurture new ideas and is constantly seeking a way to turn them into reality. Thats why, we are still looking for partners for JV, in order to develop and launch our present future solutions.</p>
                </div>

                <div className={style.contact_product}>
                    <div className={style.bg_product_contact}>
                        <p>For any partnership proposal, feel free to contact us.</p>
                        <Link className={style.Link} href="/contacts"><div className={style.btn_contact}>
                            Contact us
                        </div></Link>
                    </div>
                </div>

                <div className={style.item}>
                    <div className={style.item_bg}></div>
                    <div className={style.item_content}>
                        <div className={style.item_title}>
                            <img src="./images/product/home rent 1.png" alt="" />
                        </div>

                        <div className={style.item_subject}>
                            <p> Home Rent Project</p>
                            <p>

                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>




                    </div>
                </div>

                <div className={style.item}>
                    <div className={style.item_bg_mobile}></div>
                    <div className={style.item_content}>
                        <div className={style.item_title}>
                            <img src="/images/product/Group 25 (1).png" alt="" />
                        </div>

                        <div className={style.item_subject}>
                            <p>
                                AirData specializes in providing flight booking services from leading airlines in Vietnam and the world, bringing the best travel experiences to customers.

                                AirData is an online flight booking platform that makes the flight booking process easier, always providing detailed information about flights, fares, cancellation policies, schedule changes and requirements. Other special requirements to help customers book tickets quickly and conveniently

                                AirData provides fare and flight comparison tools to help customers find the best fares and flights to suit their needs.
                                AirData supports payment by many different methods, secure, safe and 24/7 support
                            </p>
                        </div>




                    </div>
                    <div className={style.item_bg_pc}></div>
                </div>

                <div className={style.item}>
                    <div className={style.item_bg_1}></div>
                    <div className={style.item_content}>
                        <div className={style.item_title}>
                            <img src="/images/product/ai 3.png" alt="" />
                        </div>

                        <div className={style.item_subject}>
                            <p>Solution AI project</p>

                            <p>
                            Dự án Solution AI
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>






                    </div>
                </div>
            </div>
        </>
    )
}

export default index