import React from 'react'
import './styles/Card.css';
export default function (props) {
    // console.log(props.bid.shop_name)
  return (
    <div className='card'>
        <div className="card_top">
            <div className="left_card_top">
                <h5>{props.bid.shop_address}</h5>
                <h4>{`Rs ${props.bid.offer_price}`}</h4>
                <div className="delivery_return">
                    <h5>Delivery & Services</h5>
                    <p><img src={props.bid.express_delivery_icon}/>
                        Express Delivery
                        <img src={props.bid.check_icon}/>
                    </p>
                    <p><img src={props.bid.return_option_icon}/>
                        Return option
                        <img src={props.bid.cross_icon}/>
                    </p>
                </div>
            </div>
            <div className="right_card_top">
                <img src={props.bid.shop_image}/>
                <p>{props.bid.shop_name}</p>
            </div>
        </div>
        <div className="card_center">
            <button id="extra_offer">
                <img src={props.bid.extra_offer_icon}/>
                Extra Offer
            </button>
            <p>{props.bid.product_name}</p>
        </div>
        <div className="buy_now">
            <button>Buy Now</button>
        </div>
        <div className="card_bottom">
            <p>Alternate Products</p>
            <div className="single_bottom_card">
                <div className="single_bottom_left_card">
                </div>
                <div className="single_bottom_right_card">
                    <h5>{props.bid.alternate_product_details.product_name}</h5>
                    <div className="price">
                        <img src={props.bid.alternate_product_details.online_price_icon}/>
                        <p>{`Rs. ${props.bid.alternate_product_details.online_price}`}</p>
                        <h4>{`Rs. ${props.bid.alternate_product_details.offer_price}`}</h4>
                        <div className="buy_now">
                        <button>Order Now</button>
                        </div>
                    </div>
                    
                </div>  
            </div>
        </div>
    </div>
  )
}
