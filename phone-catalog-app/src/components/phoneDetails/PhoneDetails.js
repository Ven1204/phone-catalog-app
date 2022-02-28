import React, { Component, useEffect, useState } from 'react';
// import PhoneApi from '../../common/apis/PhoneApi';
import './PhoneDetails.scss';
import axios from 'axios';


class PhoneDetails extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      id: 1
    }
  }

  // const  axios = require('axios');
  componentDidMount() {
    axios.get('http://localhost:8000/phones')
    .then(resp => {
      const phones = resp.data.find( ({ id }) => id === this.state.id);
      console.log(phones);
    })
  };

  render() {
    return (
      <div>
        asdgfhg
      </div>
    )
  }
}

export default PhoneDetails;



// const PhoneDetails = () => {
  // this.setState


  //   const [phones, setPhones] = useState([]);
  // // axios to fetch data from api
  // useEffect(() => {
  //   const fetchPhones = async () => {
  //     try {
  //       const response = await PhoneApi.get('/phones');
  //       setPhones(response.data);
  //     } catch (err) {
  //       if(err.response) {
  //         // if not in range of response range
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers);
  //       } else  {
  //         // if no response
  //         console.log(`Error: ${err.message}`)
  //       }

  //     }
  //   }
  //   fetchPhones();
  // }, [])


  // return (

      // <div className='card-items' >

  //     {phones.map(phone =>
  //       <div className='card-main' key={phone.id}>
  //         <div className='card-img' >
  //           <img src={phone.image_url} alt={phone.model} />
  //         </div>
  //         <div className='card-bot'>
  //           <div className='card-details'>
  //             <h4> {phone.brand}</h4>
  //             <p><span>Model:</span> {phone.model}</p>
  //             <p><span>Color:</span> {phone.color}</p>
  //             <p><span>Battery Capacity:</span> {phone.battery}</p>
  //             <p><span>Weight:</span> {phone.weight}</p>
  //             <p><span>Memory:</span> {phone.memory}</p>
  //             <p><span>CPU:</span> {phone.cpu}</p>
  //             <p><span>OS:</span> {phone.os}</p>
  //           </div>
  //         </div>
  //       </div>
  //     )}
      // </div>
  // );
// };
// export default PhoneDetails;
