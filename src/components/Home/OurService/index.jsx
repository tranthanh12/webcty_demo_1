import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const Index = () => {
    const [id, setId] = useState(1)

    useEffect(() => {
        let time = setInterval(() => {
            setId(id + 1)
            if (id >= 3) {
                setId(1)
            }
        }, 5000)

        return function cleanup() {
            clearInterval(time)
        }
    }, [id])

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    useEffect(() => {
        let time = setInterval(() => {
            setCurrentSlide(currentSlide + 1)
            if (currentSlide == 2) {
                setCurrentSlide(0)
            }
        }, 5000)
        return function cleanup() {
            clearInterval(time)
        }
    }, [currentSlide])
    return (
        <div className={style.box_service}>
            <div className={style.service_content}>
                <div className={style.service_banner}></div>
                <div className={style.our_service}>
                    <div className={style.list_item}>
                        <div className={style.title_service}>
                            <p>Our Service</p>
                            <div className={style.inline_1}></div>
                        </div>
                    </div>
                </div>

                <div className="navigation-wrapper">
                    <div ref={sliderRef} className="keen-slider">
                        <div className="keen-slider__slide number-slide1">
                            <div className={style.service_item}>
                                <div className={style.item_c}>
                                    <div className={style.item}>
                                        <div className={style.item_content}>
                                        <div className={style.item_content_title}>Software Development Services</div>
                                            <p>
                                                Software development services is a complicated process to design an application or software to meet a particular business or personal objective, goal, or strategy. We work and provide personnel to ensure quality in various stages: Planning, Analysis, Product Design, Development & Implementation, Testing, and Maintenance.
                                            </p>
                                        </div>

                                        <div className={style.link_service}>
                                            <img src="./images/ourService/Frame 43024.png" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className={style.item_c}>
                                    <div className={style.item}>
                                        <div className={style.link_service}>
                                            <img src="./images/ourService/Frame 43024 (1).png" alt="" />
                                        </div>

                                        <div className={style.item_content}>
                                        <div className={style.item_content_title}>Web Development Services</div>
                                            <p>
                                                Web development services help create all types of web-based software and ensure a great experience for web users. At SF, we professionally design, redesign and continuously support customer-facing and enterprise web apps to achieve high conversion and adoption rates.                                        </p>
                                        </div>
                                    </div>
                                </div>

                                <div className={style.item_c}>
                                    <div className={style.item}>
                                        <div className={style.item_content}>
                                        <div className={style.item_content_title}>Open Source & CMS Customization and Implementations</div>
                                            <p>
                                                Do you buy a commercial CMS, or do you use an open-source CMS? Or should you customize and build your own CMS based on an open-source CMS? The team at SF will help in the open-source customization of different products to suit your needs by creating/designing templates, adding custom modules, or changing the products core functionality.                                        </p>
                                        </div>

                                        <div className={style.link_service}>
                                            <img src="./images/ourService/Frame 43024 (2).png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="keen-slider__slide number-slide2">
                            <div className={style.service_item}>
                                <div className={style.item_c}>
                                    <div className={style.item}>
                                        <div className={style.item_content}>
                                        <div className={style.item_content_title}>Mobile Application Development</div>
                                            <p>
                                            SF team has extensive experience creating high-performing, digitally transformative, and feature-packed native mobile applications for Android and iOS. Whether your mobile app needs to store data in the Cloud, communicate with connected home devices, allow in-app purchases, support Apple Pay services, handle user requests with voice technology, or integrate machine learning models, we will cover your product’s entire lifecycle, from ideation, business strategy, and design to App Store Submission and build you best-in-class functionality.
                                            </p>
                                        </div>

                                        <div className={style.link_service}>
                                            <img src="./images/ourService/Frame 43024 (3).png" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className={style.item_c}>
                                    <div className={style.item}>
                                        <div className={style.link_service}>
                                            <img src="./images/ourService/Frame 43024 (4).png" alt="" />
                                        </div>

                                        <div className={style.item_content}>
                                        <div className={style.item_content_title}>Package ERP Implementations</div>
                                            <p>
                                            Implementing a new ERP system is a long-term project, and it includes more than the IT part and the involvement of a software vendor. This process demands drastic changes inside the company, which probably will bring a lot of pressure. Our team of experienced business analysts, project coordinators, solution architects, and designers will create the best-adapted ERP package to drive your business development to your need.                                        </p>
                                        </div>
                                    </div>
                                </div>

                                <div className={style.item_c}>
                                    <div className={style.item}>
                                        <div className={style.item_content}>
                                        <div className={style.item_content_title}>Technology Integration Services</div>
                                            <p>
                                            Technology Integration Services aims to build a safe environment that provides quick access and reliable information management. Whether it is product information, marketing content, eCommerce, or B2B data, our team has the ability and experience to evaluate your technology landscape, design simple or complex integrations and deliver outcomes that will drive efficiency, improve accuracy, and allow your business to achieve its goals. Technology Integration has never been quicker  easier than that is.                                        </p>
                                        </div>

                                        <div className={style.link_service}>
                                            <img src="./images/ourService/Frame 43024 (5).png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="keen-slider__slide number-slide3">
                            <div className={style.service_item}>
                                <div className={style.item_c}>
                                    <div className={style.item}>
                                        <div className={style.item_content}>
                                        <div className={style.item_content_title}>Consultancy Services</div>
                                            <p>
                                            If you aim to rely on IT consulting to keep pace with todays fast-moving IT landscape. If you feel you don't have the right internal resources, enlisting IT consulting services may be the missing piece to this picture — whether for a one-time project or ongoing strategic advice and guidance. At SF, our mission is solely focused on helping our clients leverage their technology investments to improve business performance.
                                            </p>
                                        </div>

                                        <div className={style.link_service}>
                                            <img src="./images/ourService/Frame 43024 (6).png" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className={style.item_c}>
                                    <div className={style.item}>
                                        <div className={style.link_service}>
                                            <img src="./images/ourService/Frame 43024 (7).png" alt="" />
                                        </div>

                                        <div className={style.item_content}>
                                        <div className={style.item_content_title}>MIS Outsourcing</div>
                                            <p>
                                            Efficient, cost-effective, and comprehensive outsourcing services can help boost profits and reduce risk, especially in MIS (Management Information Systems). With a team of highly qualified professionals, we are always ready to serve your needs thoughtfully. Full-time, fixed-contract, unlimited on-site or remote troubleshooting, and fixed periods, we could undertake the management and operation of the Information Technology segment for on-site processing enterprise with best-adapted cost.                                       </p>
                                        </div>
                                    </div>
                                </div>

                                <div className={style.item_c}>
                                    <div className={style.item}>
                                        <div className={style.item_content}>
                                        <div className={style.item_content_title}>Custom Enterprise Solutions</div>
                                            <p>
                                            The best solutions that should be designed for your organization answer your specific needs, no more and no less. SF team will innovative business solutions allow any enterprise to digitize and automate their existing tools and processes without impact on other processes in the meantime. Our expert engineers specially trained in cloud application development provides customized Enterprise cloud computing and will guarantee that all your information, data, and business processes are secured, protected, and well-guarded.                                       </p>
                                        </div>

                                        <div className={style.link_service}>
                                            <img src="./images/ourService/Frame 43024 (8).png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {loaded && instanceRef.current && (
                    <div className="dots">
                        {[
                            ...Array(instanceRef.current.track.details.slides.length).keys(),
                        ].map((idx) => {
                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        instanceRef.current?.moveToIdx(idx)
                                    }}
                                    className={"dot" + (currentSlide === idx ? " active" : "")}
                                ></button>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Index