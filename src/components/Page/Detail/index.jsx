import React, { useState } from 'react'
import style from './style.module.css'
import Banner from './Banner'
import PopUp from '../../../popup'
import Link from 'next/link'


const Index = () => {

    const [toggleBtn, setToggleBtn] = useState(false)

    let funcBtn = () => {
        setToggleBtn(!toggleBtn)
        console.log(toggleBtn);
    }

    return (
        <>
            {toggleBtn ? <PopUp setToggleBtn={funcBtn}></PopUp> : ''}
            <Banner></Banner>
            <div className={style.recruitment}>
                   
                   <div className={style.btn_back}><Link className={style.Link} href={'./recruitment'}>
                 
                   <div className={style.back}>
                   <div><img src="./images/banner/Vector 9.png" alt="" /></div>
                   <div className={style.back_text}>Back</div>
                    </div>
                    </Link>
                   </div>
                
                <div className={style.box_detail_s}>
                    <div className={style.detail_text}>
                        <div className={style.title_recrutment}>
                            <div className={style.title}>
                                <div className={style.title_text}>
                                    <p>Technical Lead Frontend</p>
                                    <p className={style.sub_title}>Công ty cổ phần công nghệ SF-Technologies</p>
                                </div>

                                <div className={style.logo}>
                                    <img src="./images/sf-logo-1 1.svg" alt="" />
                                </div>
                            </div>

                            <div className={style.subject_recrutment}>
                                <div className={style.subject_infor}>
                                    <div>
                                        <img src="./images/details/Pin_alt_light.png" alt="" />
                                    </div>
                                    <p> 60 Lang Ha, Dong Da, Ha Noi</p>
                                </div>

                                <div className={style.subject_infor}>
                                    <div>
                                        <img src="./images/details/Folder_alt_light.png" alt="" />
                                    </div>
                                    <p> 5 years of experience</p>
                                </div>

                                <div className={style.subject_infor}>
                                    <div>
                                        <img src="./images/details/image 4.png" alt="" />
                                    </div>
                                    <p> Negotiate</p>
                                </div>
                            </div>

                            <div className={style.box_apply}>
                                <div onClick={funcBtn} className={style.btn_apply}>
                                    Apply for
                                </div>

                                <div className={style.btn_save}>
                                    Save
                                </div>
                            </div>
                        </div>

                        <div className={''}>
                            <div className={style.describe}>
                                <p className={style.title_job}>Job description</p>

                                <div className={style.detail_content}>
                                    <ul>
                                        <li>Lead a team of developers in building and maintaining web applications using modern frontend technologies</li>
                                        <li>Collaborate with cross-functional teams to develop and implement new features.</li>
                                        <li>Develop and maintain coding standards, best practices, and documentation.</li>
                                        <li>Manage project timelines and deliverables, ensuring on-time delivery of high-quality products.</li>
                                        <li>Conduct code reviews to maintain code quality and ensure adherence to coding standards.</li>
                                        <li>Implement effective development processes and tools to streamline development and improve performance.</li>
                                        <li>Mentor and coach developers to improve technical skills and ensure job satisfaction.</li>
                                    </ul>
                                </div>

                                <p className={style.title_job}>Welfare</p>

                                <div className={style.Welfare}>
                                    <ul>
                                        <li>
                                            <div>
                                                <img src="images/details/Done_ring_round_light.png" alt="" />
                                            </div>
                                            <div>
                                                <p>13 monthly salary</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className={style.icon_Done}>
                                                <img src="images/details/Done_ring_round_light.png" alt="" />
                                            </div>
                                            <div>
                                                <p>Lunch allowance, parking fee</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div>
                                                <img src="images/details/Done_ring_round_light.png" alt="" />
                                            </div>
                                            <div>
                                                <p>Social insurance in accordance with the law</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div>
                                                <img src="images/details/Done_ring_round_light.png" alt="" />
                                            </div>
                                            <div>
                                                <p>Lunch allowance, parking fee</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div>
                                                <img src="images/details/Done_ring_round_light.png" alt="" />
                                            </div>
                                            <div>
                                                <p>Competitive salary</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <p className={style.title_job}>Job Requirement</p>

                                <div className={style.detail_content}>
                                    <ul>
                                        <li>Hybrid working mode.</li>
                                        <li>Highly competitive remuneration package: attractive monthly salary and allowances, 13th month salary, additional performance bonus, high public holiday bonuses, and birthday gift, employee service award up to $1,000 for employees with 3+ years.</li>
                                        <li>Attractive AON healthcare coverage including health and accident insurance in addition to the standard insurances regulated by the Labor Code. Luxury company summer vacation and team-building budget.</li>
                                        <li>Opportunities to work onsite for international projects in Sweden, Australia, UK, USA, etc.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={style.item_recruitment}>
                        <div className={style.other_recrutment}>
                            <p>The same Jobs</p>
                        </div>

                        <div className={style.item}>
                            <p className={style.title_other}>Designer</p>
                            <div className={style.subject_recrutment}>
                                <div className={style.subject_infor}>
                                    <div>
                                        <img src="./images/details/Pin_alt_light.png" alt="" />
                                    </div>
                                    <p> 60 Lang Ha, Dong Da, Ha Noi</p>
                                </div>

                                <div className={style.subject_infor}>
                                    <div>
                                        <img src="./images/details/Folder_alt_light.png" alt="" />
                                    </div>
                                    <p> 5 years of experience</p>
                                </div>

                                <div className={style.subject_infor}>
                                    <div>
                                        <img src="./images/details/image 4.png" alt="" />
                                    </div>
                                    <p> Negotiate</p>
                                </div>
                            </div>
                        </div>

                        <div className={style.item}>
                            <p className={style.title_other}>tester</p>
                            <div className={style.subject_recrutment}>
                                <div className={style.subject_infor}>
                                    <div>
                                        <img src="./images/details/Pin_alt_light.png" alt="" />
                                    </div>
                                    <p> 60 Lang Ha, Dong Da, Ha Noi</p>
                                </div>

                                <div className={style.subject_infor}>
                                    <div>
                                        <img src="./images/details/Folder_alt_light.png" alt="" />
                                    </div>
                                    <p> 5 years of experience</p>
                                </div>

                                <div className={style.subject_infor}>
                                    <div>
                                        <img src="./images/details/image 4.png" alt="" />
                                    </div>
                                    <p> Negotiate</p>
                                </div>
                            </div>
                        </div>

                        <div className={style.item}>
                            <p className={style.title_other}>AI Engineer</p>
                            <div className={style.subject_recrutment}>
                                <div className={style.subject_infor}>
                                    <div>
                                        <img src="./images/details/Pin_alt_light.png" alt="" />
                                    </div>
                                    <p> 60 Lang Ha, Dong Da, Ha Noi</p>
                                </div>

                                <div className={style.subject_infor}>
                                    <div>
                                        <img src="./images/details/Folder_alt_light.png" alt="" />
                                    </div>
                                    <p> 5 years of experience</p>
                                </div>

                                <div className={style.subject_infor}>
                                    <div>
                                        <img src="./images/details/image 4.png" alt="" />
                                    </div>
                                    <p> Negotiate</p>
                                </div>
                            </div>
                        </div>

                        <div className={style.item}>
                            <p className={style.title_other}> Marketing Officer</p>
                            <div className={style.subject_recrutment}>
                                <div className={style.subject_infor}>
                                    <div>
                                        <img src="./images/details/Pin_alt_light.png" alt="" />
                                    </div>
                                    <p> 60 Lang Ha, Dong Da, Ha Noi</p>
                                </div>

                                <div className={style.subject_infor}>
                                    <div>
                                        <img src="./images/details/Folder_alt_light.png" alt="" />
                                    </div>
                                    <p> 5 years of experience</p>
                                </div>

                                <div className={style.subject_infor}>
                                    <div>
                                        <img src="./images/details/image 4.png" alt="" />
                                    </div>
                                    <p> Negotiate</p>
                                </div>
                            </div>
                        </div>

                        <div className={style.share_poin}>
                            <div className={style.title_share}>
                                <p>Share via app</p>
                            </div>

                            <div className={style.logo_share}>
                                <div>
                                    <img src="./images/details/image 1.png" alt="" />
                                </div>

                                <div>
                                    <img src="./images/details/image 2.png" alt="" />
                                </div>

                                <div>
                                    <img src="./images/details/image 3.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index