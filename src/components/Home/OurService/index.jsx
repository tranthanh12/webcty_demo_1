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
                                            <p>
                                                Web development services help create all types of web-based software and ensure a great experience for web users. At SF, we professionally design, redesign and continuously support customer-facing and enterprise web apps to achieve high conversion and adoption rates.                                        </p>
                                        </div>
                                    </div>
                                </div>

                                <div className={style.item_c}>
                                    <div className={style.item}>
                                        <div className={style.item_content}>
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
                                            <p>
                                                Software development services is a complicated process to design an application or software to meet a particular business or personal objective, goal, or strategy. We work and provide personnel to ensure quality in various stages: Planning, Analysis, Product Design, Development & Implementation, Testing, and Maintenance.
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
                                            <p>
                                                Web development services help create all types of web-based software and ensure a great experience for web users. At SF, we professionally design, redesign and continuously support customer-facing and enterprise web apps to achieve high conversion and adoption rates.                                        </p>
                                        </div>
                                    </div>
                                </div>

                                <div className={style.item_c}>
                                    <div className={style.item}>
                                        <div className={style.item_content}>
                                            <p>
                                                Do you buy a commercial CMS, or do you use an open-source CMS? Or should you customize and build your own CMS based on an open-source CMS? The team at SF will help in the open-source customization of different products to suit your needs by creating/designing templates, adding custom modules, or changing the products core functionality.                                        </p>
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
                                            <p>
                                                Software development services is a complicated process to design an application or software to meet a particular business or personal objective, goal, or strategy. We work and provide personnel to ensure quality in various stages: Planning, Analysis, Product Design, Development & Implementation, Testing, and Maintenance.
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
                                            <p>
                                                Web development services help create all types of web-based software and ensure a great experience for web users. At SF, we professionally design, redesign and continuously support customer-facing and enterprise web apps to achieve high conversion and adoption rates.                                        </p>
                                        </div>
                                    </div>
                                </div>

                                <div className={style.item_c}>
                                    <div className={style.item}>
                                        <div className={style.item_content}>
                                            <p>
                                                Do you buy a commercial CMS, or do you use an open-source CMS? Or should you customize and build your own CMS based on an open-source CMS? The team at SF will help in the open-source customization of different products to suit your needs by creating/designing templates, adding custom modules, or changing the products core functionality.                                        </p>
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