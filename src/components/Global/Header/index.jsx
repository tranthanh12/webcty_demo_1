import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

const Index = () => {
    const [ActiveBtn, Setactive] = useState(false)
    const [ActiveMenu, setActiveMenu] = useState(false)
    const [InnerWidth, setInnerWidth] = useState()

    const router = useRouter();
    useEffect(() => {
        setInnerWidth(window.innerWidth)
        Setactive(router.pathname)
    }, [router])


    return (
        <>
            <nav className="navbar">
                <div className="navbar__container" bis_skin_checked={1}>
                    <div className="main-content" bis_skin_checked={1}>
                        <div className="container container--full-width container--flex container--flex--space-between" bis_skin_checked={1}>
                            <div className="logo-container" bis_skin_checked={1}>
                                <Link className="logo" href="/"><img src="/images/header/Frame 14.svg" alt="" /></Link>
                                <Link className="logo_1" href="/"><img src="/images/banner/CF_1-01 1.png" alt="NTQ SOLUTION" /></Link>
                            </div>
                            <div className="menu-container" bis_skin_checked={1}>
                                <ul className="menu">
                                    <li className="menu__item menu__item--main">
                                        <Link className={`menu__item__link menu__item__expandable-link ${ActiveBtn == '/services' ? 'active_link' : ''}`} href="/services" id="r-and-d-option" bis_skin_checked={1}>Services</Link>
                                    </li>
                                    <li className="menu__item menu__item--main">
                                        <Link className={`menu__item__link menu__item__expandable-link ${ActiveBtn == '/Industrie' ? 'active_link' : ''}`} href="/Industrie" id="r-and-d-option" bis_skin_checked={1}>Industries</Link>
                                    </li>
                                    <li className="menu__item menu__item--main">
                                        <Link href='/aboutus'><span className={`menu__item__link menu__item__expandable-link ${ActiveBtn == '/aboutus' ? 'active_link' : ''}`} id="insight-option">About Us</span></Link>
                                    </li>
                                    <li className="menu__item menu__item--main">
                                        <Link href="/recruitment"><span className={`menu__item__link menu__item__expandable-link ${ActiveBtn == '/recruitment' ? 'active_link' : ''}`} id="insight-option">Recruitment</span></Link>
                                    </li>
                                    <li className="menu__item menu__item--main">
                                        <Link href='/contacts'><span className={`menu__item__link menu__item__expandable-link ${ActiveBtn == '/contacts' ? 'active_link' : ''}`}>Contact us</span></Link>
                                    </li>
                                    <li className="menu__item menu__item--main">
                                        <Link href='/product'><span className={`menu__item__link menu__item__expandable-link ${ActiveBtn == '/product' ? 'active_link' : ''}`}>product</span></Link>
                                    </li>
                                    <li className="menu__item menu__item--language"><span className="current-language"><span className="current-language__text">EN</span><i className="material-icons current-language__icon current-language__icon--expand">expand_more</i>
                                        <i className="material-icons current-language__icon current-language__icon--collapse">expand_less</i></span>
                                        <div className="language-dropdown" bis_skin_checked={1}> <a href="" className="language-dropdown__option" bis_skin_checked={1}> VN </a> </div>
                                    </li>
                                </ul>
                            </div>

                            <div id="myNav" style={{ height: `${ActiveMenu ? '60%' : '0px'}` }} className="overlay">
                                <div className='menu_mobile_top'>
                                    <div className='Logo_mobile'>
                                        <img src="/images/header/Frame 14.svg" alt="" />
                                    </div>
                                    <a href="javascript:void(0)" className="closebtn" onClick={() => setActiveMenu(!ActiveMenu)}>
                                        ×
                                    </a>
                                </div>
                                <div className="overlay-content">
                                    <Link onClick={() => setActiveMenu(!ActiveMenu)} className={`link_menu_mobile ${ActiveBtn == '/services' ? 'active_menu_mobile' : ''}`} href="/services">Services</Link>
                                    <Link onClick={() => setActiveMenu(!ActiveMenu)} className={`link_menu_mobile ${ActiveBtn == '/Industrie' ? 'active_menu_mobile' : ''}`} href="/Industrie">Industries</Link>
                                    <Link onClick={() => setActiveMenu(!ActiveMenu)} className={`link_menu_mobile ${ActiveBtn == '/aboutus' ? 'active_menu_mobile' : ''}`} href="/aboutus">About Us</Link>
                                    <Link onClick={() => setActiveMenu(!ActiveMenu)} className={`link_menu_mobile ${ActiveBtn == '/recruitment' ? 'active_menu_mobile' : ''}`} href="/recruitment">Recruitment</Link>
                                    <Link onClick={() => setActiveMenu(!ActiveMenu)} className={`link_menu_mobile ${ActiveBtn == '/contacts' ? 'active_menu_mobile' : ''}`} href="/contacts">Contact us</Link>
                                </div>
                            </div>
                            <span className='btn_open_tab' style={{ fontSize: 22, cursor: "pointer", display: `${InnerWidth < 920 ? 'block' : 'none'}`}} onClick={() => setActiveMenu(!ActiveMenu)}>
                                ☰
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Index