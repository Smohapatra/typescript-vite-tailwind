import './App.css';
import { useState, useEffect } from 'react';
import { addressApiService } from './api';

const LIMIT = 5;

function App() {
  const [addresses, setAddresses] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    addressApiService()
      .then((values) => {
        setAddresses(values);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <table className='w-full'>
        <thead>
          <tr className='text-left'>
            <th>Id</th>
            <th>Address</th>
            <th>Postcode</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {addresses.slice((page - 1) * LIMIT, page * LIMIT).map((address) => (
            <tr key={address.id}>
              <td>{address.id}</td>
              <td>{address.address}</td>
              <td>{address.pinCode}</td>
              <td>{address.customerEmail}</td>
              <td>{address.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='flex items-center justify-center gap-4 mt-4'>
        <button
          onClick={() => {
            setPage(page - 1);
          }}
          disabled={page === 1}
          className='border p-2 rounded bg-blue-400'
        >
          Previous
        </button>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
          disabled={page === Math.ceil(addresses.length / LIMIT)}
          className='border p-2 rounded bg-blue-400'
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
