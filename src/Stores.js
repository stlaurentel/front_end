import {Link, useLoaderData} from 'react-router-dom';

export default function Stores() {
    const { stores } = useLoaderData();

  return (
    <>
    <div className='flex-container'>
      {stores.length > 0 && stores.map(store => (
        <div className='card' key={store._id}>
          <Link to={`${store._id}`}><h1>{store.name}</h1></Link>
        </div>
      ))}
      </div>
    </>
  );
}

async function fetchStores() {
  const response = await fetch(`http://localhost:3001/stores` );
  return await response.json();
}

export { fetchStores };