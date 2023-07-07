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
                                    Be one of outstanding from Vietnam, SF-Technologies is a Development & Design expert company providing superior Software,
                                    Web, Mobile and Creative Designing solutions and services globally.
                                </li>
                            </ul>
                        </div>

                        <div className={style.item}>
                            <div className={style.line_1}></div>
                            <ul>
                                <li>
                                Contributed by the industry’s highly professional and trained individuals, SF-Technologies has made it’s mark as a well-established IT consultor
                                </li>
                            </ul>
                        </div>

                        <div className={style.item}>
                            <div className={style.line_1}></div>
                            <ul>
                                <li>
                                We always strive to build high performance teams necessary for creating and maintaining world class business solutions: Information Technology planning, Custom Software Development, Web Centric Software Solutions, ERP development and implementations, Creative Designing and Marketing with emphasis on Industry-Specific Business Analysis.
                                </li>
                            </ul>
                        </div>

                        <div className={style.item}>
                            <div className={style.line_1}></div>
                            <ul>
                                <li>
                                Our focused, sound and innovative approach is derived from the cumulative experience of our team members and as a result of their combined practical business experience with strong technology delivery capabilities.
                                </li>
                            </ul>
                        </div>

                        <div className={style.item}>
                            <div className={style.line_1}></div>
                            <ul>
                                <li>
                                We are able to comprehend the Client’s business requirements, propose IT and Creative strategies in line with the vision of the business.
                                </li>
                            </ul>
                        </div>

                        <div className={style.item}>
                            <div className={style.line_1}></div>
                            <ul>
                                <li>
                                Base on your bussiness core, we will execute the business plan by building or implementing high quality scalable solutions through the use of latest cutting edge Technologies.
                                </li>
                            </ul>
                        </div>

                        <div className={style.item}>
                            <div className={style.line_1}></div>
                            <ul>
                                <li>
                                Quality, well-managed and try to best to scope customers needs are our Definition of Done.
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