import React, { useState } from 'react';
import { initMetaMask } from './MetaMaskConnection';
  
const Patient = () => {
    const [patientId, setPatientId] = useState('');
    const [newPatient, setNewPatient] = useState({
        id: '',
        name: '',
        age: '',
        height: '',
        weight: '',
        emergencyContact: '',
        medicalHistory: ''
    });
    const [patients, setPatients] = useState([]);
    const [pdfFile, setPdfFile] = useState(null);

    const handleSearchPatient = () => {
        // Implement search patient logic here
        console.log('Searching patient with ID:', patientId);
    };

    const handleAddPatient = () => {
        const newPatientRecord = {
            ...newPatient,
            medicalHistory: newPatient.medicalHistory.split(',')
        };
        setPatients([...patients, newPatientRecord]);
        setNewPatient({
            id: '',
            name: '',
            age: '',
            height: '',
            weight: '',
            emergencyContact: '',
            medicalHistory: ''
        });
    };

    const handleUploadPdf = () => {
        // Implement upload PDF logic here
        console.log('Uploading PDF:', pdfFile);
    };

    return (
        <div style={{ height: '100%', margin: 0, fontFamily: 'Arial, sans-serif', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', overflow: 'hidden' }}>
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: -1 }}>
                <video autoPlay muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                    <source src="5752054-uhd_2160_3840_30fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <nav style={{ marginBottom: 20 }}>
                <button style={{  padding: '10px 20px', fontSize: 16, cursor: 'pointer', border: 'none', color: 'white', borderRadius: 5, margin: 5 }} onClick={() => window.location.href = 'Doctor'}>Doctor</button>
                <button style={{  padding: '10px 20px', fontSize: 16, cursor: 'pointer', border: 'none', color: 'white', borderRadius: 5, margin: 5 }} onClick={() => window.location.href = 'Admin'}>Admin</button>
                <button style={{  padding: '10px 20px', fontSize: 16, cursor: 'pointer', border: 'none', color: 'white', borderRadius: 5, margin: 5 }} onClick={() => window.location.href = 'Patient'}>Patient</button>
            </nav>
            <div style={{ zIndex: 1, textAlign: 'center', background: 'rgba(0, 0, 0, 0.5)', padding: 20, borderRadius: 10, width: '80%', maxHeight: '90vh', overflowY: 'auto' }}>
                <h1>Patient Records</h1>
                <div>
                    <input type="text" value={patientId} onChange={(e) => setPatientId(e.target.value)} placeholder="Patient ID" style={{ padding: 10, fontSize: 16, margin: 5, borderRadius: 5, border: '1px solid #ccc' }} />
                    <button onClick={handleSearchPatient} style={{ padding: '10px 20px', fontSize: 16, cursor: 'pointer', background: '#007BFF', border: 'none', color: 'white', borderRadius: 5, margin: 5 }}>Search Patient</button>
                </div>
                <div>
                    <h2>Add New Patient</h2>
                    <input type="text" value={newPatient.id} onChange={(e) => setNewPatient({ ...newPatient, id: e.target.value })} placeholder="Patient ID" style={{ padding: 10, fontSize: 16, margin: 5, borderRadius: 5, border: '1px solid #ccc' }} />
                    <input type="text" value={newPatient.name} onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })} placeholder="Patient Name" style={{ padding: 10, fontSize: 16, margin: 5, borderRadius: 5, border: '1px solid #ccc' }} />
                    <input type="number" value={newPatient.age} onChange={(e) => setNewPatient({ ...newPatient, age: e.target.value })} placeholder="Patient Age" style={{ padding: 10, fontSize: 16, margin: 5, borderRadius: 5, border: '1px solid #ccc' }} />
                    <input type="text" value={newPatient.height} onChange={(e) => setNewPatient({ ...newPatient, height: e.target.value })} placeholder="Height" style={{ padding: 10, fontSize: 16, margin: 5, borderRadius: 5, border: '1px solid #ccc' }} />
                    <input type="text" value={newPatient.weight} onChange={(e) => setNewPatient({ ...newPatient, weight: e.target.value })} placeholder="Weight" style={{ padding: 10, fontSize: 16, margin: 5, borderRadius: 5, border: '1px solid #ccc' }} />
                    <input type="text" value={newPatient.emergencyContact} onChange={(e) => setNewPatient({ ...newPatient, emergencyContact: e.target.value })} placeholder="Emergency Contact" style={{ padding: 10, fontSize: 16, margin: 5, borderRadius: 5, border: '1px solid #ccc' }} />
                    <input type="text" value={newPatient.medicalHistory} onChange={(e) => setNewPatient({ ...newPatient, medicalHistory: e.target.value })} placeholder="Medical History (comma-separated)" style={{ padding: 10, fontSize: 16, margin: 5, borderRadius: 5, border: '1px solid #ccc' }} />
                    <button onClick={handleAddPatient}{...initMetaMask} style={{ padding: '10px 20px', fontSize: 16, cursor: 'pointer', background: '#007BFF', border: 'none', color: 'white', borderRadius: 5, margin: 5 }}>Add Patient</button>
                </div>
                <div>
                    <h2>Upload PDF</h2>
                    <input type="file" onChange={(e) => setPdfFile(e.target.files[0])} accept="application/pdf" style={{ padding: 10, fontSize: 16, margin: 5, borderRadius: 5, border: '1px solid #ccc' }} />
                    <button onClick={handleUploadPdf} style={{ padding: '10px 20px', fontSize: 16, cursor: 'pointer', background: '#007BFF', border: 'none', color: 'white', borderRadius: 5, margin: 5 }}>Upload PDF</button>
                </div>
                <div>
                    <h3>All Patients</h3>
                    <div style={{ textAlign: 'left', overflowY: 'auto', maxHeight: 300, marginTop: 20 }}>
                        {patients.map((patient, index) => (
                            <div key={index} style={{ background: 'rgba(255, 255, 255, 0.8)', color: 'black', padding: 10, borderRadius: 5, margin: '5px 0' }}>
                                <p>ID: {patient.id}</p>
                                <p>Name: {patient.name}</p>
                                <p>Age: {patient.age}</p>
                                <p>Height: {patient.height}</p>
                                <p>Weight: {patient.weight}</p>
                                <p>Emergency Contact: {patient.emergencyContact}</p>
                                <p>Medical History: {patient.medicalHistory.join(', ')}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Patient;
