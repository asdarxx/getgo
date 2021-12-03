import React, { useState } from "react";
import './Sidebar.css';
import icon from '../../Asset/user.png';
import { useDispatch } from "react-redux";
import { setTipe } from "../Redux/Action";
import $ from "jquery";

const Sidebar = () => {
    const dispatch = useDispatch()

    $(document).ready(function () {
        $(".list-container").on("click", ".list", function () {
          $(".list").removeClass("active");
          $(this).addClass("active");
        });
      });

    return(
        <div className='sidebar'>
            <div className='user-info'>
                <img src={icon} alt='profile'></img>
                <div className='user-name'>Getgo.sg</div>
            </div>
            <div className='list-container'>
                <div className='list active' onClick={()=>dispatch(setTipe('add'))}>Add eVoucher</div> 
                <div className='list' onClick={()=>dispatch(setTipe('all'))}>All eVoucher</div>
            </div>
        </div>
    )
}
export default Sidebar