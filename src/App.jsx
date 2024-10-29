import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [userData, SetUserData] = useContext(AuthContext);

  // Load user data from localStorage on component mount
  useEffect(() => {

    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      SetUserData(JSON.parse(storedEmployees)); // Update userData from local storage
    }

    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  // Function to handle login and set user data
  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      const adminData = { role: 'admin', data: null };
      setUser(adminData);
      localStorage.setItem('loggedInUser', JSON.stringify(adminData));
    } else if (userData) {
      const employee = userData.find(e => e.email === email && e.password === password);
      if (employee) {
        const employeeData = { role: 'employee', data: employee };
        setUser(employeeData);
        localStorage.setItem('loggedInUser', JSON.stringify(employeeData));
      } else {
        alert('Invalid Credentials');
      }
    }
  };

  // Conditional rendering based on user role
  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user.role === 'admin' ? (
        <AdminDashboard />
      ) : user.role === 'employee' ? (
        <EmployeeDashboard data={user.data} />
      ) : null}
    </>
  );
};

export default App;
