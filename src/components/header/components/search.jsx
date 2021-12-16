import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../../App'

export default function Search(props) {

    const [form,setForm]= useState();
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
        
    }
    // let handleSearch =(form)=>{
    //     console.log(form.search)
    //     search(form)
    // }  

    return (
        <div className="header_main-find">
            <input type="text" placeholder="Tìm kiếm ..." name="search"  onChange= {handleChange} />
            <Link className="find_btn" onClick={handleSearch} to="/shop"><i className="fas fa-search" /></Link>
            <div className="find_btn-2"><i className="fas fa-search" /></div>
        </div>
    )
}