import React, { Component, useEffect, useState } from 'react';
import './PhoneCard.scss';
import PhoneApi from '../../common/apis/PhoneApi';
import { Link } from 'react-router-dom';

const PhoneCard = (props) => {
  const { data } = props;
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

  // function handleClick(e) {
  //   e.preventDefault();
  //   console.log()
  // }

  return (

      <div className='card-item' >

      {phones.map(phone =>
        <div className='card-inner' key={phone.id}>
            <div className='card-top' >
              <Link to={'/phones'} />
              <img src={phone.image_url} alt={phone.model} />
            </div>

            <div className='card-bottom'>
              <div className='card-info'>
                <h4 >{phone.brand}</h4>
                <p>{phone.model}</p>
              </div>
            </div>
        </div>
      )}
      </div>
  );
};

export default PhoneCard;
