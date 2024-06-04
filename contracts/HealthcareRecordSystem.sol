// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HealthcareRecordSystem {
    struct Patient {
        string name;
        uint age;
        uint height;
        uint weight;
        string emergencyContact;
        string[] medicalHistory;
    }

    struct Doctor {
        string name;
        uint age;
        string specialization;
        string emergencyContact;
    }

    mapping(address => Patient) public patients;
    mapping(address => Doctor) public doctors;
    address[] public patientAddresses;
    address[] public doctorAddresses;

    function registerPatient(
        string memory _name,
        uint _age,
        uint _height,
        uint _weight,
        string memory _emergencyContact,
        string[] memory _medicalHistory
    ) public {
        Patient storage patient = patients[msg.sender];
        patient.name = _name;
        patient.age = _age;
        patient.height = _height;
        patient.weight = _weight;
        patient.emergencyContact = _emergencyContact;
        patient.medicalHistory = _medicalHistory;
        patientAddresses.push(msg.sender);
    }

    function registerDoctor(
        string memory _name,
        uint _age,
        string memory _specialization,
        string memory _emergencyContact
    ) public {
        Doctor storage doctor = doctors[msg.sender];
        doctor.name = _name;
        doctor.age = _age;
        doctor.specialization = _specialization;
        doctor.emergencyContact = _emergencyContact;
        doctorAddresses.push(msg.sender);
    }

    function addMedicalRecord(string memory _record) public {
        patients[msg.sender].medicalHistory.push(_record);
    }

    function getPatient(address _patientAddress) public view returns (Patient memory) {
        return patients[_patientAddress];
    }

    function getDoctor(address _doctorAddress) public view returns (Doctor memory) {
        return doctors[_doctorAddress];
    }

    function getAllPatients() public view returns (Patient[] memory) {
        Patient[] memory result = new Patient[](patientAddresses.length);
        for (uint i = 0; i < patientAddresses.length; i++) {
            result[i] = patients[patientAddresses[i]];
        }
        return result;
    }

    function getAllDoctors() public view returns (Doctor[] memory) {
        Doctor[] memory result = new Doctor[](doctorAddresses.length);
        for (uint i = 0; i < doctorAddresses.length; i++) {
            result[i] = doctors[doctorAddresses[i]];
        }
        return result;
    }
    
}







// pragma solidity ^0.8.0;

// contract HealthcareRecordSystem {
//     // Structure to represent a patient
//     struct Patient {
//         string name;
//         address walletAddress;
//         uint256[] medicalRecords;
//     }

//     // Structure to represent a doctor
//     struct Doctor {
//         string name;
//         address walletAddress;
//     }

//     // Structure to represent a medical record
//     struct MedicalRecord {
//         uint256 recordId;
//         string details;
//         uint256 timestamp;
//         address patientAddress;
//         address doctorAddress;
//     }

//     // Mapping of patient addresses to patient information
//     mapping(address => Patient) public patients;

//     // Mapping of doctor addresses to doctor information
//     mapping(address => Doctor) public doctors;

//     // Mapping of record IDs to medical record information
//     mapping(uint256 => MedicalRecord) public medicalRecords;

//     // Events to log important contract actions
//     event PatientRegistered(address indexed patientAddress, string name);
//     event DoctorRegistered(address indexed doctorAddress, string name);
//     event MedicalRecordAdded(uint256 indexed recordId, address indexed patientAddress, address indexed doctorAddress, string details);

//     // Function to register a new patient
//     function registerPatient(string memory _name) public {
//         require(bytes(_name).length > 0, "Name must not be empty");
//         require(patients[msg.sender].walletAddress != msg.sender, "Patient already registered");

//         Patient memory newPatient = Patient({
//             name: _name,
//             walletAddress: msg.sender,
//             medicalRecords: new uint256[](0)  // Initialize an empty array
//         });

//         patients[msg.sender] = newPatient;

//         emit PatientRegistered(msg.sender, _name);
//     }

//     // Function to register a new doctor
//     function registerDoctor(string memory _name) public {
//         require(bytes(_name).length > 0, "Name must not be empty");
//         require(doctors[msg.sender].walletAddress != msg.sender, "Doctor already registered");

//         Doctor memory newDoctor = Doctor({
//             name: _name,
//             walletAddress: msg.sender
//         });

//         doctors[msg.sender] = newDoctor;

//         emit DoctorRegistered(msg.sender, _name);
//     }

//     // Function to add a new medical record
//     function addMedicalRecord(uint256 _recordId, string memory _details, address _doctorAddress) public {
//         require(bytes(_details).length > 0, "Details must not be empty");
//         require(patients[msg.sender].walletAddress == msg.sender, "Only patients can add medical records");
//         require(doctors[_doctorAddress].walletAddress == _doctorAddress, "Invalid doctor address");

//         MedicalRecord memory newRecord = MedicalRecord({
//             recordId: _recordId,
//             details: _details,
//             timestamp: block.timestamp,
//             patientAddress: msg.sender,
//             doctorAddress: _doctorAddress
//         });

//         patients[msg.sender].medicalRecords.push(_recordId);
//         medicalRecords[_recordId] = newRecord;

//         emit MedicalRecordAdded(_recordId, msg.sender, _doctorAddress, _details);
//     }
// }






