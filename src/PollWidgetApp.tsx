import React, { useState } from 'react';
import './App.css';

const ProgressBar = ({ percentage }) => {
  return (
    <div className="progress-bar-outer">
      <div className="progress-bar-inner" style={{ width: `${percentage}%` }}>
        {percentage > 0 ? `${percentage}%` : ''}
      </div>
    </div>
  );
};

// PollOption component with a progress bar.
const PollOption = ({ option, onVote, totalVotes }) => {
  const handleClick = () => {
    onVote(option.id);
  };

  const percentage = totalVotes > 0 ? (option.votes / totalVotes * 100).toFixed(1) : 0;

  return (
    <div className="poll-option">
      <button onClick={handleClick}>{option.text}</button>
      <ProgressBar percentage={percentage} />
      <div>{`Votes: ${option.votes}`}</div>
    </div>
  );
};

// PollWidget component is the main component to hold and handle the state of the poll.
const PollWidget = ({ question, options }) => {
  const [pollOptions, setPollOptions] = useState(options);

  const handleVote = (optionId) => {
    setPollOptions(
      pollOptions.map((opt) =>
        opt.id === optionId ? { ...opt, votes: opt.votes + 1 } : opt
      )
    );
  };

  const totalVotes = pollOptions.reduce((acc, option) => acc + option.votes, 0);

  return (
    <div className="poll-widget">
      <h2>{question}</h2>
      {pollOptions.map((option) => (
        <PollOption key={option.id} option={option} onVote={handleVote} totalVotes={totalVotes} />
      ))}
    </div>
  );
};

// Example usage of PollWidget.
const App = () => {
  const pollQuestion = 'What is your favorite color?';
  const pollOptions = [
    { id: 1, text: 'Red', votes: 0 },
    { id: 2, text: 'Blue', votes: 0 },
    { id: 3, text: 'Green', votes: 0 },
    { id: 4, text: 'Yellow', votes: 0 },
  ];

  return (
    <div>
      <PollWidget question={pollQuestion} options={pollOptions} />
    </div>
  );
};

export default App;
