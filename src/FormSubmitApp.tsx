import './App.css';
import { useState } from 'react';

type Card = {
  email: string | null;
  password: string | null;
  rememberMe: boolean | null;
};

const LIMIT = 5;

function App() {
  const [cards, setCards] = useState<Card[]>([]);
  const [page, setPage] = useState(1);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string | null;
    const password = formData.get('password') as string | null;
    const rememberMe = formData.get('rememberMe') === 'on' ? true : false;
    console.log(email, password, rememberMe);
    setCards(prev => [...prev, {email, password, rememberMe}]);
    event.currentTarget.reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" name='email' placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" name='password' placeholder="Password" />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="rememberMe" name='rememberMe'/>
          <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <div className='flex gap-4 mt-4'>
        {cards.slice((page - 1) * LIMIT, page * LIMIT).map((card, index) => (
          <div key={index} className='p-4 border w-56'>
            <p>Email: {card.email}</p>
            <p>Password: {card.password}</p>
            <p>Remember Me: {card.rememberMe ? 'Yes' : 'No'}</p>
          </div>
        ))}
      </div>
      {cards.length > LIMIT && <div className='flex items-center justify-center gap-4 mt-4'>
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
          disabled={page === Math.ceil(cards.length / LIMIT)}
          className='border p-2 rounded bg-blue-400'
        >
          Next
        </button>
      </div>}
    </div>
  );
}

export default App;
