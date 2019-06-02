import React from 'react';

const RestaurantCard = ({ restaurant }) => (
  <div>
    <p>
      {restaurant.name}
      {' '}
      {restaurant.rate}
      {' '}
      {restaurant.foodType}
      {' '}
      {restaurant.deliveryTime}
      {' '}
      {restaurant.deliveryTax}
    </p>
  </div>
);

export default RestaurantCard;
