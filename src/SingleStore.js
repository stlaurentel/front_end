import { useLoaderData } from "react-router-dom";

export async function getSingleStore( {params} ) {

  //console.log(params);
  const response = await fetch(`http://localhost:3001/stores/${params._id}`);
  return await response.json();
}

export default function SingleStore() {
  const store = useLoaderData();

 return (
      <div className='flex-container'>
        <div className='card' key={store._id}>
        <h1>{store.name}</h1>
        {store.length > 0 && store.map(item => (
        <div className='card' key={item._id}>
          <Link to={`${item._id}`}><h1>{item.name}</h1></Link>
          <h3>Quantity: {item.quantity}</h3>
          <h3>Price: ${item.price}</h3>
        </div>
      ))}
        
      </div>
    
      </div>
    
      );
  }
