import React, { useEffect } from 'react';
import PhoneListing from '../PhoneListing/PhoneListing';
import PhoneApi from '../../common/apis/PhoneApi';
import { useDispatch } from 'react-redux';
import { addPhones } from '../../features/phones/phoneSlice';
import PhoneCard from '../phoneCard/PhoneCard';

const Home = () => {
  const phoneText = "phone"
  const dispatch = useDispatch;

  useEffect(() => {
    const fetchPhones = async () => {
      const response = await PhoneApi.get('/phones')
        .catch((err) => {
          console.log("Err :", err);
        });
      // dispatch(addPhones(response.data))
    };
    fetchPhones();
  }, []);
  return (
    <div>
      <div className='banner'>
        <PhoneCard />
      </div>
    </div>

  );
};

export default Home;
