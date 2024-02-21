import React from 'react'
import './NewCollection.css'
import new_collections from  '../Assets/newcollections'
import Item from '../Item/Item'
export default function NewCollection() {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
{new_collections.map((item,i)=>{
    return (
        <div>
    <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
      </div>
)})}
      </div>


    </div>
  )
}

