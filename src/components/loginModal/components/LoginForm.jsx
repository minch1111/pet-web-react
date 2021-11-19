import React, { useContext } from 'react'
import { Context } from '../../../App';
import useForm from '../../../hooks/useForm';

export default function LoginForm(props) {
    const {login} = useContext(Context);
    const {form,error,handleSubmit,register}=useForm()
    const submitLogin = ()=>{
        login()
        props.togglePopup()
    }
    return (
        <form onSubmit={handleSubmit(submitLogin)} className="login_form pad-20" onClick={(ev) => ev.stopPropagation()}>
            <div className="login_form-title pad-20 txt-center mbottom-10 fontsz-25 fontw-500">
                <span>Đăng nhập</span>
            </div>
            <div className="form-group">
                <label htmlFor="username">Tên đăng nhập</label>
                <input type="text" {...register('username',{required:true})} id="username" className="form-control" placeholder="Nhập tên tài khoản..." aria-describedby="helpId" />
                {
                    error.username&& <small className="text-danger"> {error.username} </small>
                }
            </div>
            <div className="form-group">
                <label htmlFor="password">Mật khẩu</label>
                <input type="password" {...register('password',{required:true,min:6,max:32})} id="password" className="form-control" placeholder="Nhập mật khẩu..." aria-describedby="helpId" />
                {
                    error.password&& <small className="text-danger"> {error.password} </small>
                }
            </div>
            <div className="form-group">
                <label><a href="#">Quên mật khẩu?</a></label>
            </div>
            <div className="form-group txt-center">
                <button className="btn btn-primary" type="submit">Đăng nhập</button>
                <p />
                <p>hoặc</p>
                <a href="#">Đăng ký</a>
            </div>
        </form>
    )
}
