import React from 'react';
import { useSelector } from 'react-redux';
import { getAllPhones } from '../../features/phones/phoneSlice';
import PhoneCard from '../phoneCard/PhoneCard';
import "./PhoneListing.scss";

const PhoneListing = () => {
  // const phones = useSelector(getAllPhones);
  // let renderPhones = "";

  // renderPhones = phones.Response === "True" ? (
  //   phones.Search.map((phone, index) => {
  //     <PhoneCard key={index} data={phone} />
  //     })
  //   ): (
  //     <div className="phones.error">
  //       <h3>{phones.Error}</h3>
  //     </div>
  //   )

  return (
    <div className='phone-wrapper'>
      <div className='phone-list'>
        <h2>Phones</h2>
        <div className='phone-container'>

        </div>
      </div>
    </div>
  );
};

export default PhoneListing;
