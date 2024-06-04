import React, { useState, useEffect } from 'react';
import getWeb3 from './services/blockchain'; // Assuming this fetches web3 data
import { useHistory, BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // Import necessary components
import Admin from './Admin';
import Patient from './Patient';
import Doctor from './Doctor';

const App = () => {
  const [account, setAccount] = useState(null);
  const history = useHistory(); // Initialize useHistory hook

  // Optional: Error handling for web3 initialization
  useEffect(() => {
    const initWeb3 = async () => {
      try {
        const web3 = await getWeb3();
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
      } catch (error) {
        console.error('Failed to load web3 or accounts:', error);
      }
    };

    initWeb3();
  }, []);

  const handleButtonClick = (role) => () => {
    // Validate account and role
    console.log(account)
    if (!account) {
      alert('Please connect your wallet before proceeding.');
      return;
    }

    switch (role) {
      case 'admin':
        history.push('/Admin');
        break;
      case 'doctor':
        history.push('/Doctor');
        break;
      case 'patient':
        history.push('/Patient');
        break;
      default:
        console.error('Invalid role:', role);
        break;
    }
  };

  return (
    <div>
      <h1>Healthcare Record Management System</h1>
      <div>
        <button onClick={handleButtonClick('admin')}>Admin</button>
        <button onClick={handleButtonClick('doctor')}>Doctor</button>
        <button onClick={handleButtonClick('patient')}>Patient</button>
      </div>
    </div>
  );
};

const Root = () => (
  <Router>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/patient" component={Patient} />
      <Route path="/doctor" component={Doctor} />
      <Route path="/" component={App} />
    </Switch>
  </Router>
);

export default Root;
