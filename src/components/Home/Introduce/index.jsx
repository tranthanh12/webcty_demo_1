import React from 'react'
import style from './style.module.css'
import {Link} from 'react-scroll'

const index = () => {

    return (
        <div className={style.box_introduce}>
            <div className={style.introduce_container}>
                <div className={style.introduce_title}>
                    <p>Future SF-Technologies</p>
                </div>

                <div className={style.introduce_content}>
                    <div className={style.introduce_list_item}>
                        <div className={style.item}>
                            <div className={style.line_1}></div>
                            <ul>
                                <li>
                                Technological innovation: SF-Technologies always devotes time and resources to the research and development of the latest technology. We are constantly exploring and applying disruptive technological advancements, such as artificial intelligence, machine learning, blockchain, and IoT. This helps your business pioneer the use of technology and seize new opportunities.
                                </li>
                            </ul>
                        </div>

                        <div className={style.item}>
                            <div className={style.line_1}></div>
                            <ul>
                                <li>
                                Smart customer interactions: SF-Technologies places an emphasis on intelligent and interactive customer experiences. We provide advanced CRM solutions, intelligent chatbots and multi-channel interaction systems to help businesses build close relationships with customers. We not only meet current customer needs, but also anticipate and meet potential needs.

                                </li>
                            </ul>
                        </div>

                        <div className={style.item}>
                            <div className={style.line_1}></div>
                            <ul>
                                <li>
                                Intelligent Data Analytics: SF-Technologies uses artificial intelligence and data analytics to help businesses capture critical information and make strategic decisions. We provide intelligent data analysis tools and systems, helping customers identify trends, predict business results, and optimize workflow.

                                </li>
                            </ul>
                        </div>

                        <div className={style.item}>
                            <div className={style.line_1}></div>
                            <ul>
                                <li>
                                Advanced mobile technology: SF-Technologies develops mobile applications and user-friendly interfaces on mobile platforms. We help businesses connect and interact with customers conveniently and flexibly through advanced mobile applications. This enhances the customer experience and creates a seamless connection between the business and the customer.

                                </li>
                            </ul>
                        </div>

                        <div className={style.item}>
                            <div className={style.line_1}></div>
                            <ul>
                                <li>
                                Safety and security: SF-Technologies always puts the safety and security of data first. We apply advanced security measures to ensure that the information of our customers and businesses is protected in the best way. We not only meet the highest security standards, but also help our customers comply with data privacy regulations.

                                </li>
                            </ul>
                        </div>

                        <div className={style.item}>
                            <div className={style.line_1}></div>
                            <ul>
                                <li>
                                International expansion: SF-Technologies is not only focused on serving domestic customers, but also aims to expand internationally. We aim to be a trusted technology partner globally, working with businesses and organizations in every country, delivering innovative technology solutions and creating sustainable value.
                                </li>
                            </ul>
                        </div>

                        <div className={style.item}>
                            <div className={style.line_1}></div>
                            <ul>
                                <li>
                                Continue to innovate and improve quality: SF-Technologies is committed to maintaining innovation and continuously improving the quality of technology solutions. We will pursue the latest research and development, and listen and understand the needs of our customers well to satisfy all requirements.
 
                                </li>
                            </ul>
                        </div>

                        <div className={style.item}>
                            <div className={style.line_1}></div>
                            <div className={style.button_contact_us}>
                                <Link to="form_infor" spy={true} smooth={true}>
                                    <input type="button" value="Contac Us" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default index