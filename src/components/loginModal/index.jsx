import React, { useContext } from 'react'
import { Context } from '../../App';
import Modal from '../Modal'
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

export default function LoginModal() {
    const togglePopup = () => {
        document.body.classList.toggle('login-is-show');
        document.querySelector(".login_form").style.display = 'none'
        document.querySelector(".register_form").style.display = 'none'
    }

    const togglePopupRegister=()=>{
        // document.body.classList.toggle('login-is-show');
        document.querySelector(".register_form").style.display = 'none'
        document.querySelector(".login_form").style.display = 'block'
    }

    return (
        <Modal>
            <div className="pop-up login" onClick={togglePopup}>
                <LoginForm
                    togglePopup={togglePopup}
                />
                <RegisterForm
                    togglePopup={togglePopupRegister}
                />
            </div>
        </Modal>
    )
}
