import React from 'react'
import style from './style.module.css'
const index = () => {
    return (
        <div className={style.contentServices}>
            <div className={style.contentServices_detail}>
                <div className={style.img_content}>
                    <img src="./images/banner/it-oursourcing-690x450-1 1 (1).png" alt="" />
                </div>
                <div className={style.contentServices_detail_text}>
                    <div className={style.contentServices_detail_text_title}>
                        <p>OUR SOLUTIONS</p>
                        <div className={style.line}></div>
                    </div>
                    <div className={style.img_content_mobile}>
                    <img src="./images/banner/it-oursourcing-690x450-1 1 (1).png" alt="" />
                </div>
                    <div className={style.contentServices_detail_text_des}>
                        <p>
                            SF-Technologies offers end-to-end IT and digital solutions,
                            including software development, digital transformation,
                            and IT consulting. With a focus on innovation, quality, and customer satisfaction,
                            SF-Technologies delivers customized and scalable services to help businesses achieve their digital goals.
                            Our expertise, experience,
                            and commitment to delivering results make us a trusted partner for organizations worldwide.
                        </p>
                    </div>
                </div>
            </div>

            <div className={style.contentServices_detail}>
                <div className={style.contentServices_detail_text}>
                    <div className={style.contentServices_detail_text_title_right}>
                        <p>World-class IT Outsourcing</p>
                        <div className={style.line_right}></div>
                    </div>
                    <div className={style.img_content_mobile}>
                    <img src="./images/banner/it-oursourcing-690x450-1 1 (1).png" alt="" />
                </div>
                    <div className={style.contentServices_detail_text_des_right}>
                        <p>
                        Our world-class engineering services are here to help your business in adapting to today’s ever-changing technology era while boosting software portfolio variety in the shortest period. SF-Technologies supplies enterprises with a huge pool of service offer, from all solutions related to software development, maintenance, and migration to all kinds of testing services in every stage, to empower your future growth.Find your best fit IT services with our consulting team for the ultimate customized software!
                        </p>
                    </div>
                </div>
                <div className={style.img_content}>
                    <img src="./images/banner/it-oursourcing-690x450-1 1 (1).png" alt="" />
                </div>
            </div>

            <div className={style.contentServices_detail}>
                <div className={style.img_content}>
                    <img src="./images/banner/it-oursourcing-690x450-1 1 (1).png" alt="" />
                </div>
                <div className={style.contentServices_detail_text}>
                    <div className={style.contentServices_detail_text_title}>
                        <p>Digital Transformation</p>
                        <div className={style.line}></div>
                    </div>
                    <div className={style.img_content_mobile}>
                    <img src="./images/banner/it-oursourcing-690x450-1 1 (1).png" alt="" />
                </div>
                    <div className={style.contentServices_detail_text_des}>
                        <p>
                        Digital transformation is the answer to business success in this computerized era. SF-Technologies’s innovation-led solutions of implementing Artificial Intelligence (AI), Cloud Computing, Robotic Automation (RPA), and Low Code, enable your business to achieve cost-saving, improve efficiency, and make use of emerging technology to drive value long into the future.
Our clients get the ability to access a whole team of certified experts, using IT systems from the world’s “giant” providers in Cloud (AWS, Microsoft Azure, Google Cloud), RPA (BluePrism, Automation Anywhere, UIPaths), and Low Code (ut System, MS Power Apps) sectors.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index