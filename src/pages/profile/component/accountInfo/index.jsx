import React, { useEffect, useState,useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../../../hooks/useForm';
import authServices from '../../../../services/authServices'
import { LOGIN_SUCCESS } from '../../../../store/type';
import AvatarUploader from 'react-avatar-uploader'
// import 'element-theme-default';
// import { Upload } from 'element-react'

// import 'antd/dist/antd.css'
// import {Upload} from 'antd'
// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

export default function AccountInfo() {
    let $ = window.$
    useEffect(() => {
    }, [])
    let ava = useRef()


    // const [imageUrl, setImageUrl] = useState()
    let { user } = useSelector(store => store.user)
    let { form, error, handleSubmit, register,setForm } = useForm({...user,avatar:null} )
    const dispatch = useDispatch()
    // console.log(`error`, error)
    const submit = async () => {
        console.log(`form`, form)
        let res = await authServices.updateInfoUser(user._id, form)
        if (res.success) {
            alert("Đã cập nhật thông tin thành công");
            form.avatar?dispatch({ type: LOGIN_SUCCESS, payload: form }):dispatch({type: LOGIN_SUCCESS,payload: {...form,avatar:user.avatar}})

        }
    }
    console.log(`form`, form)
    console.log(`user`, user)
    return (
        <div id="account" className="tab_content-item">
            <div className="account-title mbottom-20">
                <p className="title mbottom-10">Hồ sơ của tôi</p>
                <p className="sub-title mbottom-20"><i>Quản lí hồ sơ thông tin tài khoản của bạn</i></p>
            </div>
            <div className="account-form">
                <form onSubmit={handleSubmit(submit)}>
                    <div class="form-group row">
                        <label className='col-sm-2 form-label'>Ảnh đại diện</label>
                        <div className='col-sm-10 img-m0'>
                            <AvatarUploader
                                // size={150}
                                ref={ava}
                                name="avatar"
                                uploadURL="http://localhost:3000"
                                fileType={"image/png" || "image/jpeg"}
                                defaultImg={user?.avatar?.url || form?.avatar || user?.avatar}
                                withCredentials={true}
                                onFinished={(err, res) => err ? setForm({...form,avatar:ava.current.state.currentImage}) : console.log(`res`, res)}
                                onProgress={function (percentage) { console.log(`percentage`, percentage) }}
                                // onStart={function () { console.log(this) }}
                            />
                        </div>
                        {/* <small id="helpId" class="text-muted">Help text</small> */}
                    </div>
                    <div className="form-group row">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Tên</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Nhập tên ..." {...register('name', { required: true })} />
                            {
                                error.name && <small className='text-danger'> {error.name} </small>
                            }
                        </div>
                    </div>
                    {/* <div className="form-group row">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Mật khẩu</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" placeholder="Nhập mật khẩu mới...." {...register('password', { required: true })} />
                        </div>
                    </div> */}
                    <div className="form-group row">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Nhập email mới ..." {...register('email', { required: true, pattern: 'email' })} disabled />
                            {
                                error.email && <small className='text-danger'> {error.email} </small>
                            }
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Số điện
                            thoại</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Nhập số điện thoại mới ..." {...register('phone', { required: true, pattern: 'phone' })} />
                            {
                                error.phone && <small className='text-danger'> {error.phone} </small>
                            }
                        </div>
                    </div>
                    <div class="form-group row">
                        <label className='col-sm-2 col-form-label'>Giới tính</label>
                        <div className="col-sm-10">
                            <select class="form-control" {...register('gender')}>
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                                <option value="Khác">Khác</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Ngày sinh</label>
                        <div className="col-sm-10">
                            <input type="date" className="form-control" {...register('birth', { required: true })} />
                        </div>
                    </div>
                    <div className="form-group row mbottom-20">
                        <label className="col-sm-2 col-form-label">Địa chỉ</label>
                        <div className="col-sm-10" >
                            <input type="text" {...register('address', { required: true })} className="form-control" placeholder="Nhập địa chỉ ..." />
                            {
                                error.address && <small className='text-danger'> {error.address} </small>
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-lg-2" />
                        <div className="col-lg-10">
                            <button type='submit' className="btn btn-danger">Lưu</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
