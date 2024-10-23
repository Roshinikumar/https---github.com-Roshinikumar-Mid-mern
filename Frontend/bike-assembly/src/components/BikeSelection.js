import React, { useState } from 'react';
import axios from 'axios';

const BikeSelection = () => {
  const [bike, setBike] = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await axios.post('/api/assemble', { bike }, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Select a Bike to Assemble:</label>
      <select value={bike} onChange={(e) => setBike(e.target.value)}>
        <option value="Bike 1">Bike 1 (50 mins)</option>
        <option value="Bike 2">Bike 2 (1 hour)</option>
        <option value="Bike 3">Bike 3 (1 hour 20 mins)</option>
      </select>
      <button type="submit">Start Assembling</button>
    </form>
  );
};

export default BikeSelection;
