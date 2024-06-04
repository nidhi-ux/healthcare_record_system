import React from 'react';

function Doctor() {
    return (
        <div className="content">
            <h1>Doctor Page</h1>
            <nav style={{ marginBottom: 20 }}>
                <button style={{  padding: '10px 20px', fontSize: 16, cursor: 'pointer', border: 'none', color: 'white', borderRadius: 5, margin: 5 }} onClick={() => window.location.href = 'Doctor'}>Doctor</button>
                <button style={{  padding: '10px 20px', fontSize: 16, cursor: 'pointer', border: 'none', color: 'white', borderRadius: 5, margin: 5 }} onClick={() => window.location.href = 'Admin'}>Admin</button>
                <button style={{  padding: '10px 20px', fontSize: 16, cursor: 'pointer', border: 'none', color: 'white', borderRadius: 5, margin: 5 }} onClick={() => window.location.href = 'Patient'}>Patient</button>
            </nav>
            {/* Add your doctor page content here */}
        </div>
    );
}

export default Doctor;
