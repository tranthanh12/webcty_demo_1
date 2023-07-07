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
                    <p>Established in September 2022, SF-Technologies Technology Joint Stock Company was born with the goal of becoming a leading technology company, providing diverse services to meet the needs of customers. With Gen Z breakthrough thinking and vision, we are always looking for innovative ideas to build a solid foundation for our customers.</p>

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
                            
                            <p>

                            Home Rent - A rental management system that helps landlords and tenants connect quickly and conveniently. With Home Rent, finding the right apartment or hostel for your needs and desires is easy and fast.

With the help of Home Rent, the process of finding and reaching out between landlords and tenants has never been more convenient. With a simple and easy to use interface, you can easily search for apartments and hostels that match your requirements in just a few clicks.

Home Rent provides detailed information about apartments and hostels, including descriptions, photos, and amenities. You can view the amenities, area, location and rent of each apartment to evaluate and compare before deciding. In addition, you can also view comments and reviews from previous tenants or landlords to get a more comprehensive view of the apartment or hostel you are interested in.
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
                            <p>Solution AI is a system that applies Artificial Intelligence (AI) technology in consulting, supporting and answering peoples questions. Built on OpenAIs GPT-3.5 platform, Solution AI has the ability to understand and respond to users in a natural and flexible way. Solution AI can help users in many different areas, including:
                                Product and service consulting
                                Technical support
                                Inquiries Answering
                                Career advice Education support
                                Solution AI not only provides information but also Ability to absorb and learn from user experience. This improves thinking ability and gives better and better feedback over time.</p>
                        </div>






                    </div>
                </div>
            </div>
        </>
    )
}

export default index