import React, { useState } from 'react';
import axios from 'axios';

const SchoolList = () => {
  const [schools, setSchools] = useState([]);
  const [location, setLocation] = useState({
    latitude: '',
    longitude: ''
  });

  const handleChange = (e) => {
    setLocation({ ...location, [e.target.name]: e.target.value });
  };

  const fetchSchools = async () => {
    try {
      const response = await axios.get('/api/schools/listSchools', {
        params: location
      });
      setSchools(response.data);
    } catch (error) {
      alert('Failed to fetch schools');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-xl font-semibold mb-4">Nearby Schools</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Latitude</label>
        <input
          type="number"
          step="any"
          name="latitude"
          value={location.latitude}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Longitude</label>
        <input
          type="number"
          step="any"
          name="longitude"
          value={location.longitude}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border rounded"
          required
        />
      </div>
      <button
        onClick={fetchSchools}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Fetch Schools
      </button>
      <ul className="mt-4">
        {schools.map((school) => (
          <li key={school.id} className="border-b py-2">
            <h3 className="font-semibold">{school.name}</h3>
            <p>{school.address}</p>
            <p className="text-sm text-gray-500">Distance: {school.distance.toFixed(2)} km</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SchoolList;
