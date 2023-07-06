import React from 'react'
import style from './style.module.css'
import Link from 'next/link'
const index = () => {
    return (
        <div className='body'>
            <main>
                <div className={style.background_banner}></div>
            </main>

            <div className={style.recruitment_box}>
                <div className={style.content_recruitment}>
                    <div className={style.recruitment_title}>
                        <p>We are hiring</p>
                    </div>

                    <div className={style.box_content}>
                        <div className={style.box_list_item}>
                            <Link href={'/detail'}>
                                <div className={style.btn_designs}>
                                    <p>GRAPHIC DESIGNER</p>
                                </div>
                            </Link>

                            <div className={style.item_title}>
                                <p>A GRAPHIC DESIGNER</p>
                            </div>

                            <div className={style.item_content}>

                                <p>• Design images for online marketing (website, fanpage, youtube, video ...), publications, products for communication activities of the business (banner, standee, banner, .... )</p>
                                <p>• Supervision of printing quality (proposing to choose printing and construction service providers; supervision of printing and construction to ensure the design publications meet the requirements for quality and aesthetics) publications serving the Companys business activities</p>
                                <p>• Can endure pressure when working at high intensity, on deadline.</p>
                                <p>• Ability to work independently and in groups.</p>
                                <p>• Other tasks as assigned by superiors</p>

                            </div>
                        </div>

                        <div className={style.box_list_item}>
                            <div className={style.btn_designs}>
                                <p>TESTER </p>
                            </div>

                            <div className={style.item_title}>
                                <p>A TESTER </p>
                            </div>

                            <div className={style.item_content}>
                                <p>• Manual Testing, MS Azure DevOps</p>
                                <p>• Create test case</p>
                                <p>• Execute test case</p>
                                <p>• Report bugs</p>
                                <p>• Test Lead opportunities open as well</p>


                            </div>
                        </div>


                        <div className={style.box_list_item}>
                            <div className={style.btn_designs}>
                                <p>BUSINESS ANALYST </p>
                            </div>

                            <div className={style.item_title}>
                                <p>A BUSINESS ANALYST </p>
                            </div>

                            <div className={style.item_content}>
                                <p>We are looking for a Business Analyst who is passionate about understanding the client’s business need, conducting research and analyzing to come up with solutions to business problems. Your role is an important part of any project team.</p>
                            </div>
                        </div>

                        <div className={style.box_list_item}>
                            <div className={style.btn_designs}>
                                <p>Designer</p>
                            </div>

                            <div className={style.item_title}>
                                <p>A Designer</p>
                            </div>

                            <div className={style.item_content}>
                                <p>• Lead a team of developers in building and maintaining web applications using modern frontend technologies.
                                    • Collaborate with cross-functional teams to develop and implement new features.
                                    • Develop and maintain coding standards, best practices, and documentation.
                                    • Manage project timelines and deliverables, ensuring on-time delivery of high-quality products.
                                    • Conduct code reviews to maintain code quality and ensure adherence to coding standards.
                                    • Implement effective development processes and tools to streamline development and improve performance.
                                    • Mentor and coach developers to improve technical skills and ensure job satisfaction.
                                </p>
                            </div>
                        </div>

                        <div className={style.box_list_item}>
                            <div className={style.btn_designs}>
                                <p>Designer</p>
                            </div>

                            <div className={style.item_title}>
                                <p>A Designer</p>
                            </div>

                            <div className={style.item_content}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec purus ex. </p>
                            </div>
                        </div>

                        <div className={style.box_list_item}>
                            <div className={style.btn_designs}>
                                <p>Designer</p>
                            </div>

                            <div className={style.item_title}>
                                <p>A Designer</p>
                            </div>

                            <div className={style.item_content}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec purus ex. </p>
                            </div>
                        </div>

                        <div className={style.box_list_item}>
                            <div className={style.btn_designs}>
                                <p>Designer</p>
                            </div>

                            <div className={style.item_title}>
                                <p>A Designer</p>
                            </div>

                            <div className={style.item_content}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec purus ex. </p>
                            </div>
                        </div>

                        <div className={style.box_list_item}>
                            <div className={style.btn_designs}>
                                <p>Designer</p>
                            </div>

                            <div className={style.item_title}>
                                <p>A Designer</p>
                            </div>

                            <div className={style.item_content}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec purus ex. </p>
                            </div>
                        </div>
                        <div className={style.box_list_item}>
                            <div className={style.btn_designs}>
                                <p>Designer</p>
                            </div>

                            <div className={style.item_title}>
                                <p>A Designer</p>
                            </div>

                            <div className={style.item_content}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec purus ex. </p>
                            </div>
                        </div>






                    </div>
                </div>
            </div>
        </div>
    )
}

export default index