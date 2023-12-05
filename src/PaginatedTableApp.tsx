import './App.css';
import { useState, useEffect } from 'react';
import { addressApiService } from './api';

const LIMIT = 5;

interface Address {
  id: number;
  address: string;
  pinCode: string;
  customerEmail: string;
  contact: string;
}

function App() {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    addressApiService()
      .then((values: unknown) => {
        setAddresses(values as Address[]);
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
          {addresses.slice((page - 1) * LIMIT, page * LIMIT).map((address, index) => (
            <tr key={address.id}>
              <td id={`id${index}`}>{address.id}</td>
              <td id={`address${index}`}>{address.address}</td>
              <td id={`pinCode${index}`}>{address.pinCode}</td>
              <td id={`customerEmail${index}`}>{address.customerEmail}</td>
              <td id={`contact${index}`}>{address.contact}</td>
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
          aria-label="Previous page"
        >
          Previous
        </button>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
          disabled={page === Math.ceil(addresses.length / LIMIT)}
          className='border p-2 rounded bg-blue-400'
          aria-label="Next page"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
