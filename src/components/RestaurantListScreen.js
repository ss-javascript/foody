import React from 'react';
import RestaurantCard from './RestaurantCard';

const RestaurantListScreen = ({ restaurants }) => (
  <div className="restaurantList">
    {restaurants.map(restaurant => (
      <RestaurantCard
        key={restaurant.id}
        restaurant={restaurant}
      />
    ))}
  </div>
);

export default RestaurantListScreen;
