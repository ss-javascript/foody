import React from 'react';
import RestaurantListScreen from './components/RestaurantListScreen';
import data from './data';
import './App.css';

const App = () => (
  <div className="app">
    <h1>Foody</h1>
    <RestaurantListScreen restaurants={data} />
  </div>
);

export default App;
