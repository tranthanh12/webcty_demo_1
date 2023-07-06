import React from 'react'
import style from './style.module.css'
import Link from 'next/link'
const index = () => {
    return (
        <div className='body'>
            <main>
                <div className={style.service_container}>
                    <div className={style.service_container_text}>
                        <div className={style.service_container_text_title}>
                            <p>Trusted Effective Services and Solutions for Business Growth</p>
                        </div>
                        <div className={style.service_container_text_des}>
                            <p>Entrusted by hundreds of clients worldwide, we believe in empowering your business with top-certified IT talents and innovative world-class service delivery.
                            </p>
                        </div>
                        
                        <Link className={style.Link}  href="/contacts"><div className={style.service_container_text_button}>
                        <p>Contact Us</p>
                        </div>
                        </Link>
                        
                    </div>

                </div>
            </main>
        </div>
    )
}

export default index