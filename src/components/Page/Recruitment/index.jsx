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
                                    <p>Graphic Designer</p>
                                </div>
                            </Link>



                            <div className={style.item_content}>

                                <p>• Can endure pressure when working at high intensity, on deadline.</p>
                                <p>• Can endure pressure when working at high intensity, on deadline.</p>
                                <p>• Ability to work independently and in groups.</p>
                                <p>• Other tasks as assigned by superiors</p>

                            </div>
                        </div>

                        <div className={style.box_list_item}>
                            <Link href={'/detail'}>
                                <div className={style.btn_designs}>
                                    <p>Business Analyst</p>
                                </div>
                            </Link>



                            <div className={style.item_content}>

                                <p>We are looking for a Business Analyst who is passionate about understanding the clients business need, conducting research and analyzing to come up with solutions to business problems. Your role is an important part of any project team.</p>


                            </div>
                        </div>


                        <div className={style.box_list_item}>
                            <Link href={'/detail'}>
                                <div className={style.btn_designs}>
                                    <p>Tester</p>
                                </div>
                            </Link>



                            <div className={style.item_content}>
                                <p>• Manual Testing, MS Azure DevOps;</p>
                                <p>• Create test case;</p>
                                <p>• Execute test case;</p>
                                <p>• Report bugs;</p>
                                <p>• Test Lead opportunities open as well.</p>
                                
                            </div>
                        </div>

                        <div className={style.box_list_item}>
                            <Link href={'/detail'}>
                                <div className={style.btn_designs}>
                                    <p>Mobile Engineer (Flutter)</p>
                                </div>
                            </Link>

                            

                            <div className={style.item_content}>
                                <p>• Collaborate with a cross-functional team to ship valuable product increments</p>
                                <p>• Make a positive impact towards a healthy and maintainable platform every day</p>
                                <p>• Write and style modular widgets with Flutter</p>
                                <p>• Report bugs;</p>
                                <p>• Test Lead opportunities open as well.</p>
                                
                            </div>
                        </div>

                        <div className={style.box_list_item}>
                            <Link href={'/detail'}>
                                <div className={style.btn_designs}>
                                    <p>Senior Backend Engineer</p>
                                </div>
                            </Link>

                            

                            <div className={style.item_content}>
                                <p>• Writing clean & high-quality code</p>
                                <p>• Maintain & improve running- functionality as well as design and develop new system, new feature if needed</p>
                                <p>• Deliver end-to-end, including unit test, integration test and deployment to PROD</p>
                                
                            </div>
                        </div>

                        <div className={style.box_list_item}>
                            <Link href={'/detail'}>
                                <div className={style.btn_designs}>
                                    <p>Technical Lead Frontend</p>
                                </div>
                            </Link>

                            

                            <div className={style.item_content}>
                                <p>• Lead a team of developers in building and maintaining web applications using modern frontend technologies.</p>
                                <p>• Collaborate with cross-functional teams to develop and implement new features.</p>
                                <p>• Develop and maintain coding standards, best practices, and documentation.</p> 
                            </div>
                        </div>

                        <div className={style.box_list_item}>
                            <Link href={'/detail'}>
                                <div className={style.btn_designs}>
                                    <p>Backend Middle Nodejs</p>
                                </div>
                            </Link>

                            

                            <div className={style.item_content}>
                                <p>• Develop system, software to manage all company operations</p>
                                <p>• Build API system for Mobile App, Web App</p>
                                <p>• Technologies used: Node.js, MySql, MongoDb, Kafka, ....</p>
                            </div>
                        </div>

                        <div className={style.box_list_item}>
                            <Link href={'/detail'}>
                                <div className={style.btn_designs}>
                                    <p>Java Programmer</p>
                                </div>
                            </Link>

                            

                            <div className={style.item_content}>
                                <p>• Participate in application analysis, design, development and maintenance</p>
                                <p>• Support e-commerce partners, banks to connect to the Companys system;</p>
                                <p>• Doing digital banking related services for big banks</p>
                            </div>
                        </div>
                        <div className={style.box_list_item}>
                            <Link href={'/detail'}>
                                <div className={style.btn_designs}>
                                    <p>HR Manager</p>
                                </div>
                            </Link>

                            

                            <div className={style.item_content}>
                                <p>• Making plans for recruitment, training and human resource development on a yearly, quarterly and monthly basis</p>
                                <p>• Develop regulations on salary and bonus, measures to encourage - stimulate employees to work, implement regimes for employees</p>
                                <p>• Doing digital banking related services for big banks</p>
                            </div>
                        </div>






                    </div>
                </div>
            </div>
        </div>
    )
}

export default index