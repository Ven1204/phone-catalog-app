import React, { Component, useEffect, useState } from 'react';
import PhoneApi from '../../common/apis/PhoneApi';


const PhoneDetails = () => {

    const [phones, setPhones] = useState([]);
  // axios to fetch data from api
  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const response = await PhoneApi.get('/phones');
        setPhones(response.data);
      } catch (err) {
        if(err.response) {
          // if not in range of response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else  {
          // if no response
          console.log(`Error: ${err.message}`)
        }

      }
    }
    fetchPhones();
  }, [])


  return (

      <div className='card-item' >

      {phones.id.map(phone =>
        <div className='card-main' key={phone.id}>
          <div className='card-img' >
            <img src={phone.image_url} alt={phone.model} />
          </div>
          <div className='card-bot'>
            <div className='card-details'>
              <h4 >{phone.brand}</h4>
              <p>{phone.model}</p>
              <p>{phone.color}</p>
              <p>{phone.battery}</p>
              <p>{phone.weight}</p>
              <p>{phone.memory}</p>
              <p>{phone.cpu}</p>
              <p>{phone.os}</p>
            </div>
          </div>
        </div>
      )}
      </div>
  );
};
export default PhoneDetails;
