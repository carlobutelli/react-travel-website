import React from 'react'
import CardItem from "./CardItem";
import img9 from '../../images/img-9.jpg';


function Cards() {
  return(
    <div className='cards'>
      <h1>Check out these wonderful locations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards_items">
            <CardItem
              src={img9}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={img9}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={img9}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label='Adventure'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;