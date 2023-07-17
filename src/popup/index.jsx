import React from 'react'
import style from './style.module.css'

const index = ({setToggleBtn}) => {
  return (
    <div className={style.box_popup}>
        <div className={style.popup_form}>
            <div className={style.title_popup}>
                <p>Apply for HR MANAGER</p>
                <div className={style.btn_close}>
                    <img onClick={setToggleBtn} src="./images/details/Close_square_light.png" alt="" />
                </div>
            </div>

            <div className={style.form_infor}>
                <div className={style.item_input}>
                    <p>First and last name</p>
                    <div className={style.input}>
                        <input placeholder='Nguyen Van  A ' type="text" />
                    </div>
                </div>

                <div className={style.item_input}>
                    <p>Email </p>
                    <div className={style.input}>
                        <input placeholder='nguyenvana@gmail.com' type="email" />
                    </div>
                </div>

                <div className={style.item_input}>
                    <p>Phone</p>
                    <div className={style.input}>
                        <input placeholder='0123456789' type="phone" />
                    </div>
                </div>

                <div className={style.item_input}>
                    <p>CV</p>
                    <div className={style.input}>
                        <input className={style.input_file} placeholder='Supports .doc, .docx, pdf formats less than 5120KB in size.' type="file" />
                    </div>
                </div>

                <div className={style.item_input}>
                    <p>Introducing letter</p>
                    <div className={style.input}>
                        <input className={style.text_area} placeholder='0 Words' type="text" />
                    </div>
                </div>

                <div className={style.form_submit}>
                    <div className={style.check_box}>
                        <input type="checkbox" name="" id="" />
                        <span>I have read and agree to the Terms of Use</span>
                    </div>

                    <div className={style.box_submit}>
                        <div className={style.btn_cancel} onClick={setToggleBtn}>Cancel</div>
                        <div className={style.btn_submit}>Sent</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default index