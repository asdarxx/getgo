import React from "react";
import { useSelector } from "react-redux";
import Form from "../Form/Form";
import Sidebar from "../Sidebar/Sidebar";
import Voucher from "../Voucher/Voucher";
import './Main.css'

const Main = () =>{
    const tipe = useSelector(state=>state.tipe)
    
    return(
        <div className='bg'>
            <div className='frame'>                
                <Sidebar/>
                <div style={{width:'100%'}}>
                    {
                        tipe === 'add' ? 
                        <Form/> :
                        tipe === 'all' ?
                        <Voucher/> : 
                        <div><h1>Welcome</h1></div>
                    }
                
                </div>
            </div>
        </div>
    )
}

export default Main;