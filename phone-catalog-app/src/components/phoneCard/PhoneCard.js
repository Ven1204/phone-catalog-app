import React, { Component, useEffect, useState } from 'react';
import './PhoneCard.scss';
import PhoneApi from '../../common/apis/PhoneApi';
import { Link } from 'react-router-dom';


const PhoneCard = (props) => {
  const { data } = props;
  /*
    var phones is the initial state of PhoneCard then
    when it fetch the API localhost
  */
    const [phones, setPhones] = useState([]);
  //  function for axios to fetch data from api
  useEffect(() => {
    const fetchPhones = async () => {
      try {
        /* gets the API data from PhoneApi file in the  localhost: 8000/phones
         and set it ti the setstate of the phone 'setPhones' */
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
        {/* calls the initial state function and maps through it
            to get the data */}
      {phones.map(phone =>
        <div className='card-inner' key={phone.id}>

          <Link to={`/phones/${phone.id}`} >
            <div className='card-top' >
              <img src={phone.image_url} alt={phone.model} />
            </div>
            <div className='card-bottom'>
              <div className='card-info'>
                <h4 >{phone.brand}</h4>
                <p>{phone.model}</p>
              </div>
            </div>
          </Link>
        </div>
      )}
      </div>
  );
};

export default PhoneCard;
