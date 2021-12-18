import React, { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Context } from '../../../App';
import useForm from '../../../hooks/useForm';
import authServices from '../../../services/authServices';
import { LOGIN_SUCCESS } from '../../../store/type';

export default function LoginForm(props) {
    const { login } = useContext(Context);
    const { form, error, handleSubmit, register } = useForm()
    const dispatch = useDispatch()
    const [errorLogin, seterrorLogin] = useState()
    const submitLogin = async () => {
        console.log(`click`)
        let res = await authServices.login(form)
        if(res.success){

            // localStorage.setItem('loginn',JSON.stringify(res.customer))
            dispatch({type:LOGIN_SUCCESS,payload:res.customer})
            seterrorLogin()
            props.togglePopup()
        }
        else{
            seterrorLogin(res.message)
        }

    }
    useEffect(()=>{
        seterrorLogin()
    },[])
    // console.log(`register`)
    const openRegister = () => {
        // document.body.classList.toggle('login-is-show');
        document.querySelector(".login_form").style.display = 'none'
        document.querySelector(".register_form").style.display = 'block'
    }
    return (
        <form onSubmit={handleSubmit(submitLogin)} className="login_form pad-20" onClick={(ev) => ev.stopPropagation()}>
            <div className="login_form-title pad-20 txt-center mbottom-10 fontsz-25 fontw-500">
                <span>Đăng nhập</span>
            </div>
            <label className='text-danger'> {errorLogin} </label>
            <div className="form-group">
                <label htmlFor="username">Tên đăng nhập</label>
                <input type="text" {...register('username', { required: true })} id="username" className="form-control" placeholder="Nhập tên tài khoản..."  />
                {
                    error.username && <small className="text-danger"> {error.username} </small>
                }
            </div>
            <div className="form-group">
                <label htmlFor="password">Mật khẩu</label>
                <input type="password" {...register('password', { required: true })} id="password" className="form-control" placeholder="Nhập mật khẩu..."  />
                {
                    error.password && <small className="text-danger"> {error.password} </small>
                }
            </div>
            <div className="form-group">
                <label><a href="#">Quên mật khẩu?</a></label>
            </div>
            <div className="form-group txt-center">
                <button className="btn btn-primary" type="submit">Đăng nhập</button>
                <p />
                <p>hoặc</p>
                <a href="#" onClick={ openRegister}>Đăng ký</a>
            </div>
        </form>
    )
}
