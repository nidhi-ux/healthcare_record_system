import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleDoctorClick = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const connectedAccount = accounts[0];
                const storedAccount = localStorage.getItem('doctorAccount');
                const doctorAddresses = JSON.parse(localStorage.getItem('doctorAddresses') || '[]');

                if (storedAccount && storedAccount === connectedAccount) {
                    alert('Already connected to MetaMask with account: ' + connectedAccount);
                    navigate('/patient');
                } else {
                    localStorage.setItem('doctorAccount', connectedAccount);
                    if (!doctorAddresses.includes(connectedAccount)) {
                        doctorAddresses.push(connectedAccount);
                        localStorage.setItem('doctorAddresses', JSON.stringify(doctorAddresses));
                    }
                    alert('MetaMask connected: ' + connectedAccount);

                    if (doctorAddresses.includes(connectedAccount)) {
                        alert('Doctor address is already present. Logging in...');
                        navigate('/patient');
                    } else {
                        alert('Doctor address added.');
                    }
                }
            } catch (error) {
                console.error('MetaMask connection failed', error);
                alert('MetaMask connection failed');
            }
        } else {
            alert('MetaMask is not installed. Please install MetaMask and try again.');
        }
    };

    const handlePatientClick = () => {
        alert('Patient functionality not implemented yet.');
    };

    return (
        <div className="content">
            <h1>Healthcare Record Management System</h1>
            <button onClick={() => navigate('/admin')}>Admin</button>
            <button onClick={handleDoctorClick}>Doctor</button>
            <button onClick={handlePatientClick}>Patient</button>
        </div>
    );
}

export default Home;
