import React,{useContext} from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'

import Item from '../Compenents/Item/Item'
 


export default function ShopCategory(props) {
const{all_product}=useContext(ShopContext);



  return (

     
      
    
    
    <div className='shop-category'>
      <div className="shop">
        <div className="shopper">
        <h1>FLAT 50% OFF<p><span>12</span> Hours <span>20</span> Mins </p></h1>
      
        <button>Explore Now</button>
      </div>
      <div className="shopperimg">
      <img src={props.banner} alt="" />
      </div>
      </div>
     
     
      
    
     
       
      <div className="shopcategory-indexSort">
       
        <p>
          <span>Showing 1-12  </span>  out of 36 products
        </p>
        <div className="shopcategory-sort">
          <span> Sort by </span>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return(
              <div>
                <Item className='item' key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
              </div>
            )

            

          
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}
