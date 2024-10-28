import React, { useEffect, useState } from 'react';

const Header = ({ data }) => {
  const [userName, setUserName] = useState('');

  // Set the user name based on the passed `data` or default to 'Admin'
  useEffect(() => {
    if (data && data.firstName) {
      setUserName(data.firstName);
    } else {
      setUserName('Admin');
    }
  }, [data]);

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('loggedInUserData');
    window.location.reload(); // Reloads the app, redirecting to login if no user is in localStorage
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-semibold">
        Hello <br />
        <span className="text-5xl font-bold">{userName} 👋</span>
      </h1>
      <button onClick={logOutUser} className="bg-red-600 rounded-md py-3 px-4 font-semibold">
        Logout
      </button>
    </div>
  );
};

export default Header;
