import React from 'react'
import { useState, useEffect } from 'react'
import {Link} from 'react-scroll'

const Index = () => {
    const [BannerIndex, setBannerIndex] = useState(1)
    const [InnerWidts, setInnerWidth] = useState()

    useEffect(()=>{
        setInnerWidth(window.innerWidth)
        let time = setInterval(()=>{
            setBannerIndex(BannerIndex + 1)
            if (BannerIndex >= 3) {
                setBannerIndex(1)
            }
        },5000)

        return function cleanup() {
            clearInterval(time)
        }
    }, [BannerIndex])

    return (
        <>
            <div className="slider" bis_skin_checked={1}>
                <div className="swiper-container page-banner-slider swiper-container-fade swiper-container-initialized swiper-container-horizontal" style={{ cursor: 'grab' }} bis_skin_checked={1}>
                    <div className="swiper-wrapper" id="swiper-wrapper-99dce5c0a52df8da" aria-live="off" style={{ transitionDuration: '0ms' }} bis_skin_checked={1}>
                        <div className={`swiper-slide slides__item swiper-slide-duplicate ${BannerIndex == 1 ? 'swiper-slide-active' : ''}`} style={{ backgroundImage: 'url("./images/banner/Group 8.png")', width: `${InnerWidts}px`, transitionDuration: '0ms', opacity: `${BannerIndex == 1 ? 1 : 0}` , transform: 'translate3d(0px, 0px, 0px)' }} data-swiper-slide-index={4} role="group" aria-label="1 / 7" bis_skin_checked={1}>
                            <div className="container" bis_skin_checked={1}>
                                <div className="title" bis_skin_checked={1}>Software Development Services</div>
                                <div className="subtitle" bis_skin_checked={1}>Analysis, Product Design, Development & Implementation, Testing, and Maintenance. </div>
                                <div className="action-container" bis_skin_checked={1}><Link to="form_infor" spy={true} smooth={true} className="button button--primary"  bis_skin_checked={1}>Contact Us </Link></div>
                            </div>
                        </div>
                        <div className={`swiper-slide slides__item swiper-slide-duplicate ${BannerIndex == 2 ? 'swiper-slide-active' : ''}`} style={{ backgroundImage: 'url("./images/banner/Group 8.png")', width: `${InnerWidts}px`, transitionDuration: '0ms', opacity: `${BannerIndex == 2 ? 1 : 0}`, transform: `translate3d(-${InnerWidts}px, 0px, 0px)` }} data-swiper-slide-index={0} role="group" aria-label="2 / 7" bis_skin_checked={1}>
                            <div className="container" bis_skin_checked={1}>
                                <div className="title" bis_skin_checked={1}>Mobile Application Development</div>
                                <div className="subtitle" bis_skin_checked={1}>The world is becoming more mobile. Why not
                                    profiting from this trend to develop your business idea? Tell us your story, we will
                                    tell you how to build it.. </div>
                                <div className="action-container" bis_skin_checked={1}><Link to="form_infor" spy={true} smooth={true} className="button button--primary"  bis_skin_checked={1}>Contact Us </Link>
                                 </div>
                            </div>
                        </div>
                        <div className={`swiper-slide slides__item swiper-slide-duplicate ${BannerIndex == 3 ? 'swiper-slide-active' : ''}`} style={{ backgroundImage: 'url("./images/banner/Group 9.png")', width: `${InnerWidts}px`, transitionDuration: '0ms', opacity: `${BannerIndex == 3 ? 1 : 0}`, transform: `translate3d(-${InnerWidts * 2}px, 0px, 0px)` }} data-swiper-slide-index={1} role="group" aria-label="3 / 7" bis_skin_checked={1}>
                            <div className="container" bis_skin_checked={1}>
                                <div className="title" bis_skin_checked={1}>Web Development Services</div>
                                <div className="subtitle" bis_skin_checked={1}>We professionally design, redesign and continuously support customer-facing and enterprise web apps to achieve high conversion and adoption rates.</div>
                                <div className="action-container" bis_skin_checked={1}><Link to="form_infor" spy={true} smooth={true} className="button button--primary"  bis_skin_checked={1}>Contact Us </Link></div>
                            </div>
                        </div>
                    </div><span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
                </div>
                <div className="swiper-pagination page-banner-slider-pagination swiper-pagination-clickable swiper-pagination-bullets" bis_skin_checked={1}>
                    <span onClick={()=>{setBannerIndex(1)}} className={`swiper-pagination-bullet ${BannerIndex == 1 ? "swiper-pagination-bullet-active" : '' }`} tabIndex={0} role="button" aria-label="Go to slide 1" />
                    <span onClick={()=>{setBannerIndex(2)}} className={`swiper-pagination-bullet ${BannerIndex == 2 ? "swiper-pagination-bullet-active" : '' }`} tabIndex={0} role="button" aria-label="Go to slide 2" />
                    <span onClick={()=>{setBannerIndex(3)}} className={`swiper-pagination-bullet ${BannerIndex == 3 ? "swiper-pagination-bullet-active" : '' }`} tabIndex={0} role="button" aria-label="Go to slide 3" />
                  </div>
            </div>
        </>
    )
}

export default Index