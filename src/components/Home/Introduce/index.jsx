import React from 'react'
import style from './style.module.css'


const index = () => {

    return (
        <div className={style.box_introduce}>
            <div className={style.title_introduce}>
                <p>Future SF-Technologies</p>
            </div>
            <div className={style.box_introduce_content}>
                <div className={style.box_introduce_left}>
                    <div className={style.box_introduce_left_tren}>

                        <img src="./images/banner/cyborg 3.png" alt="" />
                        <div className={style.box_introduce_left_tren_text}>
                            <p className={style.text}>Be one of outstanding from Vietnam,
                                SF-Technologies is a Development and Design expert company providing superior Software,
                                Web, Mobile and Creative Designing solutions and services globally.
                            </p>
                        </div>
                    </div>
                    <div className={style.box_introduce_left_duoi}>
                        <img src="./images/banner/decentralize.png" alt="" />
                        <div className={style.box_introduce_left_duoi_text}>
                            <p className={style.text}>We always strive to build high performance teams necessary
                                for creating and maintaining world class business solutions:
                                Information Technology planning, Custom Software Development, Web Centric Software Solutions, ERP development and implementations,
                                Creative Designing and Marketing with emphasis on Industry-Specific Business Analysis.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={style.box_introduce_mid}>
                    <div className={style.box_introduce_mid_tren}>
                        <img src="./images/banner/cyborg 4.png" alt="" />
                        <p className={style.text_bottom}>We are able to comprehend the Clients business requirements,
                            propose IT and Creative strategies in line with the vision of the business</p>
                    </div>

                    <div className={style.box_introduce_mid_giua}>
                        <img src="./images/banner/license-key 3.png" alt="" />
                        <p className={style.text_bottom_center}>Quality, well-managed and try to best to scope customer's needs are our Definition of Done.</p>
                    </div>

                    <div className={style.box_introduce_mid_duoi}>
                        <img src="./images/banner/vr-headset.png" alt="" />
                        <p className={style.text_bottom}>
                            Contributed by the industrys highly professional and trained individuals, SF-Technologies has made it’s mark as a well-established IT consultor.
                        </p>
                    </div>
                </div>
                <div className={style.box_introduce_right}>
                    <div className={style.box_introduce_left_duoi}>
                        <img src="./images/banner/hdmi (1).png" alt="" />
                        <div className={style.box_introduce_left_duoi_text}>
                            <p className={style.text}>We always strive to build high performance teams necessary
                                for creating and maintaining world class business solutions:
                                Information Technology planning, Custom Software Development, Web Centric Software Solutions, ERP development and implementations,
                                Creative Designing and Marketing with emphasis on Industry-Specific Business Analysis.
                            </p>
                        </div>
                    </div>
                    <div className={style.box_introduce_left_tren}>
                        <img src="./images/banner/openAI-logo.png" alt="" />
                        <div className={style.box_introduce_left_tren_text}>
                            <p className={style.text}>Be one of outstanding from Vietnam,
                                SF-Technologies is a Development and Design expert company providing superior Software,
                                Web, Mobile and Creative Designing solutions and services globally.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default index