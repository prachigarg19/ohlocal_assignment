import React from 'react'
import './styles/center.css'
export default function (props) {
    {console.log(props.val)}
  return (
    <div className='container'>
    <div className='center'>
      {/* headings */}
        <div className='center_heading'>
        <img src={props.val.heading.svg}/>
        <h3>{props.val.heading.heading}</h3> 
        </div>
         <p>{props.val.heading.sub_heading}</p>
      </div>
      {/* main product card */}
      <div className='main_product'>
          <div className='main_product_left'>
            <img src={props.val.main_product.main_product_svg}/>
            <div className='main_product_left_details'>
              <h4>{props.val.main_product.product_title}</h4>
              <h5>{props.val.main_product.product_pipeline}</h5>
              <div className='main_product_left_price'>
                <img src={props.val.main_product.online_price_icon}/>
                <p>{`Rs. ${props.val.main_product.online_price}`}</p>
              </div>
              <p>Qty: {props.val.main_product.quantity}</p>
              <h6>All Details</h6>
            </div>
          </div>
          {/* vetical line between main product card */}
          <span className="vertical-line"></span>
          <div className='main_product_right'>
            <h1>Status
           <img src={props.val.main_product.status_icon}/>
           </h1>
           {/* contains info about main product */}
           <div className='main_product_right_time'>
             <h3>Time remaining</h3>
             <p>{`${props.val.main_product.time_remaining} minutes`}</p>
           </div>
           <p id="bids">Bids placed | <span>{props.val.main_product.bid_placed}</span></p>
          </div>
      </div>
    </div>
    
  )
}
