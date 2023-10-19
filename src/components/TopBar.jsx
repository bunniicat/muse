import { BiSolidCircle } from 'react-icons/bi';
import { useState, useEffect } from 'react';

const TopBar = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  let currentTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  let currentDate = date.toLocaleDateString();

  return (
    <div className='topBar_container flex justify__sb m__1 align__c'>
      <div className='topBar_left flex'>
        <BiSolidCircle color='#f72585' />
        <BiSolidCircle color='#7209b7' />
        <BiSolidCircle />
      </div>
      <div className='topBar_right flex stack_gap--5'>
        <p>{currentDate}</p>
        <p>{currentTime}</p>
      </div>
    </div>
  );
};

export default TopBar;
