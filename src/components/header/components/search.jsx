import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { Redirect, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Context } from '../../../App'

export default function Search(props) {

    const [form,setForm]= useState();
    let formRef = useRef()
    let path = `/shop`;
    let history = useHistory();
    let {data,search} = useContext(Context)

    const handleChange = (event)=>{
        let name=event.currentTarget.name
        let value = event.currentTarget.value

        setForm({...form,
            [name]:value
        })
    }
    const handleSearch =()=>{
        search(form)
        formRef.current.value=""
    }
    function handlePress(ev){
        if(ev.which===13){
            search(form)
            formRef.current.value=""
            console.log(`form`, form)
            history.push(path)
        }

    }
    // let handleSearch =(form)=>{
    //     console.log(form.search)
    //     search(form)
    // }

    return (
        <div className="header_main-find">
            <input type="text" placeholder="Tìm kiếm ..." name="search" ref={formRef}  onChange= {handleChange} onKeyPress={(ev)=>{handlePress(ev)} }/>
            {
                formRef.current?
                <Link className="find_btn"   onClick={handleSearch} to="/shop" ><i className="fas fa-search" /></Link>
                :
                <Link className="find_btn"  onClick={handleSearch} to="#" ><i className="fas fa-search" /></Link>
            }

            <div className="find_btn-2"><i className="fas fa-search" /></div>
        </div>
    )
}
