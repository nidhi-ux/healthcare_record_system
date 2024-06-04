import Web3 from 'web3';

export const initMetaMask = async () => {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const connectedAccount = accounts[0];
            localStorage.setItem('connectedAccount', connectedAccount);

            const web3 = new Web3(window.ethereum);
            const contract = new web3.eth.Contract(contractABI, contractAddress);

            // Example method call
            const getContractData = async () => {
                try {
                    const newRecord = 'New medical record details';
                    const data = await contract.methods.addMedicalRecord(newRecord).call({ from: accounts[0] });
                    console.log('Contract data:', data);
                } catch (error) {
                    console.error('Error fetching contract data:', error);
                }
            };

            getContractData();
        } catch (error) {
            console.error('MetaMask connection failed', error);
            alert('MetaMask connection failed');
        }
    } else {
        alert('MetaMask is not installed. Please install MetaMask and try again.');
    }
};

const contractABI = [
    // Paste the ABI JSON array here
    {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "doctorAddresses",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "doctors",
        "outputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "age",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "specialization",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "emergencyContact",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "patientAddresses",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "patients",
        "outputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "age",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "height",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "weight",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "emergencyContact",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "_age",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_height",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_weight",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "_emergencyContact",
            "type": "string"
          },
          {
            "internalType": "string[]",
            "name": "_medicalHistory",
            "type": "string[]"
          }
        ],
        "name": "registerPatient",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "_age",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "_specialization",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_emergencyContact",
            "type": "string"
          }
        ],
        "name": "registerDoctor",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_record",
            "type": "string"
          }
        ],
        "name": "addMedicalRecord",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_patientAddress",
            "type": "address"
          }
        ],
        "name": "getPatient",
        "outputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "age",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "height",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "weight",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "emergencyContact",
                "type": "string"
              },
              {
                "internalType": "string[]",
                "name": "medicalHistory",
                "type": "string[]"
              }
            ],
            "internalType": "struct HealthcareRecordSystem.Patient",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_doctorAddress",
            "type": "address"
          }
        ],
        "name": "getDoctor",
        "outputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "age",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "specialization",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "emergencyContact",
                "type": "string"
              }
            ],
            "internalType": "struct HealthcareRecordSystem.Doctor",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "getAllPatients",
        "outputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "age",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "height",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "weight",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "emergencyContact",
                "type": "string"
              },
              {
                "internalType": "string[]",
                "name": "medicalHistory",
                "type": "string[]"
              }
            ],
            "internalType": "struct HealthcareRecordSystem.Patient[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "getAllDoctors",
        "outputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "age",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "specialization",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "emergencyContact",
                "type": "string"
              }
            ],
            "internalType": "struct HealthcareRecordSystem.Doctor[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      }
];

const contractAddress = '0x080465285835947c44eA6e68548c0C145D292Ae1';
