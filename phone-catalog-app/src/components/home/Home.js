import React, { useEffect, useState } from 'react';
// import PhoneListing from '../PhoneListing/PhoneListing';
import PhoneApi from '../../common/apis/PhoneApi';
import { useDispatch } from 'react-redux';
import { addPhones } from '../../features/phones/phoneSlice';
import PhoneCard from '../phoneCard/PhoneCard';


const Home = () => {

  return (
    <div>
      <div className='banner'>
        <PhoneCard />
      </div>
    </div>

  );
};

export default Home;
