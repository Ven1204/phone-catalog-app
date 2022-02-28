import PhoneCard from '../phoneCard/PhoneCard';


const Home = () => {
  // this renders the component PhoneCard which shows the data you get from the DB
  return (
    <div>
      <div className='banner'>
        <PhoneCard />
      </div>
    </div>

  );
};

export default Home;
