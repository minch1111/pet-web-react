import React, { useEffect, useState } from 'react'
import useForm from '../../../hooks/useForm'
import authServices from '../../../services/authServices'
let avatar = "https://img.favpng.com/18/16/20/user-profile-computer-icons-female-png-favpng-tBBtb6BmiEsyTfD6k9e7Sh2x1.jpg"


export default function RegisterForm(props) {

    const { form, error, handleSubmit, register,setForm } = useForm()
    const [errorRegister, setErrorRegister] = useState()
    useEffect(()=>{
        setErrorRegister()
        setForm({...form,avatar})
    },[])

    const submit = async () => {
        console.log(`form`, form)
        let res = await authServices.register(form);
        if (res.success) {
            setErrorRegister()
            props.togglePopup()
            // alert('res.message')

        }
        else{
            setErrorRegister(res.message)
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)} className="register_form pad-20" onClick={(ev) => ev.stopPropagation()}>
            <div className="login_form-title pad-20 txt-center mbottom-10 fontsz-25 fontw-500">
                <span>Đăng ký</span>
            </div>
            <label className='text-danger'> {errorRegister} </label>
            <div className="form-group">
                <label htmlFor="username">Tên đăng nhập*</label>
                <input {...register('username', { required: true })} type="text" id="username" className="form-control" placeholder="Nhập tên tài khoản..." />
                {
                    error.username && <small className="text-danger"> {error.username} </small>
                }
            </div>
            <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input type="text" {...register('email', { required: true, pattern: "email" })} id="email" className="form-control" placeholder="Nhập email..." />
                {
                    error.email && <small className="text-danger"> {error.email} </small>
                }
            </div>
            <div className="form-group">
                <label htmlFor="phone">Số điện thoại*</label>
                <input type="number" {...register('phone', { required: true, pattern: "phone" })} id="phone" className="form-control" placeholder="Nhập email..." />
                {
                    error.phone && <small className="text-danger"> {error.phone} </small>
                }
            </div>
            <div className="form-group">
                <label htmlFor="password">Mật khẩu*</label>
                <input type="password" {...register('password', { required: true, min: 6, max: 32 })} id="password" className="form-control" placeholder="Nhập mật khẩu..." />
                {
                    error.password && <small className="text-danger"> {error.password} </small>
                }
            </div>
            <div className="form-group mbottom-50">
                <label htmlFor="confirm">Xác nhận Mật khẩu</label>
                <input type="password" {...register('confirm', { required: true, confirm: true })} id="confirm" className="form-control" placeholder="Nhập lại mật khẩu..." aria-describedby="helpId" />
                {
                    error.confirm && <small className="text-danger"> {error.confirm} </small>
                }
            </div>
            <div className="form-group txt-center">
                <button type="submit" className="btn btn-danger">Đăng ký</button>
            </div>
        </form>
    )
}
