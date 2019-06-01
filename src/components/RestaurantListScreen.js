import React from 'react';

const RestaurantListScreen = ({ restaurants }) => {
  const content = restaurants.map(restaurant => (
    <div key={restaurant.id}>
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
  ));
  return (
    <div className="restaurantList">
      {content}
    </div>
  );
};

export default RestaurantListScreen;
