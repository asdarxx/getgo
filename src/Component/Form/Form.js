import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setEvoucherData } from "../Redux/Action";
import './Form.css';

const Form = () =>{
    const [type, setType] = useState('')
    const [title, setTitle] = useState('')
    const [expDate, setExpDate] = useState('')
    const [desc, setDesc] = useState('')
    const [amount, setAmount] = useState('')
    const [quantity, setQuantity] = useState('')
    const [pay, setPay] =useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [limit, setLimit] = useState('')
    const [userLimit, setUserLimit] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) =>{
        e.preventDefault()
        let data = {title,expDate,desc,amount,quantity,pay,name,phone,limit,userLimit}
        dispatch(setEvoucherData(data)) 
        setTitle('')
        setDesc('')
        setAmount('')
        setQuantity('')
        setName('')
        setPhone('')
        setLimit('')
        setUserLimit('')
    }

    return(
        <div className='form-container'>
            <div className='card'><h3>Create new eVoucher</h3></div>
            <div className='tt' style={{marginTop:'20px',padding:'25px 20px'}}>
                <form onSubmit={handleSubmit}> 
                    <div className='row'>
                        <div className='title column'>
                            <label>Title</label>
                            <input type='text' onChange={(e)=>setTitle(e.target.value)} value={title}></input>
                        </div>
                        <div className='date column'>
                            <label>Expiry Date</label>
                            <input onChange={(e)=>setExpDate(e.target.value)} type='date'></input>
                        </div>
                    </div>
            
                    <div className='column' >
                        <label>Description</label>
                        <textarea onChange={(e)=>setDesc(e.target.value)} rows='3' style={{resize:'none'}} value={desc}></textarea>
                    </div>
                 

                    <div className='column'>
                        <label>Add Image</label>
                        <input type="file" id="myFile" name="filename"></input>
                    </div>

                    <div className='row' style={{justifyContent:'space-between'}}>
                        <div className='column amount'>
                            <label>Enter Amount</label>
                            <input type='text' onChange={(e)=>setAmount(e.target.value)} value={amount}></input>
                        </div>
                        <div className='column quantity'>
                            <label>Enter Quantity</label>
                            <input type='text' onChange={(e)=>setQuantity(e.target.value)} value={quantity}></input>
                        </div>
                        <div className='column payment'>
                            <label>Choose your Payment Method</label>
                            <select onChange={(e)=>setPay(e.target.value)}>
                                <option value='' disabled selected>--Choose payment method type--</option>
                                <option value='visa'>Visa</option>
                                <option value='master'>Mastercard</option>
                            </select>
                        </div>
                    </div>
                    <div className='column'>
                        <label>Voucher Type</label>
                        <select onChange={(e)=>setType(e.target.value)}>
                            <option value='' disabled selected>--Choose voucher type--</option>
                            <option value='self'>My Self</option>
                            <option value='gift'>Gift</option>
                        </select>
                    </div>
                    {
                        type === 'self' ?
                        <div className='card-dashed'>
                            <div className='column'>
                                <label>Name</label>
                                <input type='text' onChange={(e)=>setName(e.target.value)} value={name}></input>
                            </div>
                            <div className='column'>
                                <label>Phone Number</label>
                                <input type='text' onChange={(e)=>setPhone(e.target.value)} value={phone}></input>
                            </div>
                            <div className='column'>
                                <label>Limit</label>
                                <input type='text' onChange={(e)=>setLimit(e.target.value)} value={limit}></input>
                            </div>
                        </div>
                        : type === 'gift' ?
                        <div className='card-dashed'>
                            <div className='column'>
                                <label>Name</label>
                                <input type='text' onChange={(e)=>setName(e.target.value)} value={name}></input>
                            </div>
                            <div className='column'>
                                <label>Phone Number</label>
                                <input type='text' onChange={(e)=>setPhone(e.target.value)} value={phone}></input>
                            </div>
                            <div className='column'>
                                <label>User Limit</label>
                                <input type='text' onChange={(e)=>setUserLimit(e.target.value)} value={userLimit}></input>
                            </div>
                            <div className='column'>
                                <label>Limit</label>
                                <input type='text' onChange={(e)=>setLimit(e.target.value)} value={limit}></input>
                            </div>
                        </div>
                        : null

                    }
                    <div className='button-container'>
                         <button type='submit'>Create</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Form;