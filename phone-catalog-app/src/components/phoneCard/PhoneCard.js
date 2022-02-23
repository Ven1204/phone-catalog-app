import React, { Component } from 'react';
import './PhoneCard.scss';

// const PhoneCard = (props) => {
//   const { data } = props;
//   return (
//     <div className='card-item'>
//       <div className='card-inner'>
//         <div className='card-top'>
//           {/* <img src={data.image_url} alt={data.model} /> */}
//         </div>
//         <div  className='card-bottom'>
//           <div className='card-info'>
//             {/* <h4>{data.name}</h4>
//             <p>{data.price}</p> */}
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };


// export default PhoneCard;

class PhoneCard extends Component {
  state = {phones:[]}

  // data  = props;

  componentDidMount() {
    fetch('./phones')
      .then(res => res.json())
      .then(phones => this.setState({ phones }));
  }

  render() {
    return(
    <div className='card-item'>
      <div className='card-inner'>
        <div className='card-top'>
          {this.state.phones.map(phone => {
            <div  className='card-bottom'>
              <div className='card-info'>
                <h4>{phone.id}</h4>
                <p>{phone.price}</p>
              </div>
            </div>
          })}
        </div>

      </div>
    </div>
    )
  }
}

export default PhoneCard;
