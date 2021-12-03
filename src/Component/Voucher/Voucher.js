import React from "react";
import { useSelector } from "react-redux";
import './Voucher.css'

const Voucher = () => {
    const voucher = useSelector(state=>state.data)
    return(
        <div className='v-container'>
            <div className='card'><h3>All eVoucher</h3></div>
            <div style={{padding:'20px'}}>
                {
                    voucher.map((data, index)=>(
                        <div className='v-card' key={index}>
                            <div className='v-left'>
                                <div>{data.name}</div>
                                <div>{data.phone}</div>
                                <div>Limit : {data.limit}</div>
                                {
                                    data.userLimit !== '' ?
                                    <div>User Limit : {data.userLimit}</div> : null
                                }
                            </div>
                            <div className='v-right'>
                                <div className='v-title'>e-VOUCHER<span>{data.title}</span></div>
                                <div style={{display:'flex',flexDirection:'row'}}>
                                    <div className='v-amount'>${data.amount}</div>
                                    <div className='v-desc'>{data.desc}</div>
                                </div>
                                <div className='v-exp'>Expiry date:<span>{data.expDate}</span> </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Voucher