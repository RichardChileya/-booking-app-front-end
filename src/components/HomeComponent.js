import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { vehicles, listVehicles } from '../redux/reducer/vehicles/vehicleSlice';
import '../App.css';
import VehiclesList from './VehiclesList';

const HomeComponent = () => {
  const carData = useSelector(vehicles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listVehicles());
  }, []);
  return (
    <>
      <h2 className="container">Please select a car </h2>
      <div className="container">
        <div className="car-info">
          {carData.map((car) => (
            <VehiclesList key={car.id} item={car} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
