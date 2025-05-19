// Simulated database
let database = {};

// Function to handle form submission
function checkRollNo() {
    const rollNo = document.getElementById('rollNo').value;
    if (rollNo) {
        if (database[rollNo]) {
            // Roll No exists, populate form for update
            populateForm(rollNo);
        } else {
            // Roll No does not exist, enable save
            enableSave();
        }
    }
}

// Function to populate the form for updating
function populateForm(rollNo) {
    const student = database[rollNo];
    document.getElementById('fullName').value = student.fullName;
    document.getElementById('class').value = student.class;
    document.getElementById('birthDate').value = student.birthDate;
    document.getElementById('address').value = student.address;
    document.getElementById('enrollmentDate').value = student.enrollmentDate;

    // Enable update and reset buttons
    document.getElementById('updateBtn').disabled = false;
    document.getElementById('resetBtn').disabled = false;

    // Disable roll number field
    document.getElementById('rollNo').disabled = true;

    // Move cursor to the next field
    document.getElementById('fullName').focus();
}

// Function to enable save button
function enableSave() {
    document.getElementById('fullName').disabled = false;
    document.getElementById('class').disabled = false;
    document.getElementById('birthDate').disabled = false;
    document.getElementById('address').disabled = false;
    document.getElementById('enrollmentDate').disabled = false;

    // Enable save and reset buttons
    document.getElementById('saveBtn').disabled = false;
    document.getElementById('resetBtn').disabled = false;

    // Move cursor to the next field
    document.getElementById('fullName').focus();
}

// Function to save data
function saveData() {
    if (validateForm()) {
        const rollNo = document.getElementById('rollNo').value;
        database[rollNo] = {
            fullName: document.getElementById('fullName').value,
            class: document.getElementById('class').value,
            birthDate: document.getElementById('birthDate').value,
            address: document.getElementById('address').value,
            enrollmentDate: document.getElementById('enrollmentDate').value
        };
        alert('Data saved successfully!');
        resetForm();
    }
}

// Function to update data
function updateData() {
    if (validateForm()) {
        const rollNo = document.getElementById('rollNo').value;
        database[rollNo] = {
            fullName: document.getElementById('fullName').value,
            class: document.getElementById('class').value,
            birthDate: document.getElementById('birthDate').value,
            address: document.getElementById('address').value,
            enrollmentDate: document.getElementById('enrollmentDate').value
        };
        alert('Data updated successfully!');
        resetForm();
    }
}

// Function to validate form
function validateForm() {
    const fields = ['rollNo', 'fullName', 'class', 'birthDate', 'address', 'enrollmentDate'];
    for (const field of fields) {
        if (!document.getElementById(field).value) {
            alert(`${field.replace(/([A-Z])/g, ' $1')} is required.`);
            return false;
        }
    }
    return true;
}

// Function to reset the form
function resetForm() {
    document.getElementById('enrollmentForm').reset();
    document.getElementById('rollNo').disabled = false;
    document.getElementById('fullName').disabled = true;
    document.getElementById('class').disabled = true;
    document.getElementById('birthDate').disabled = true;
    document.getElementById('address').disabled = true;
    document.getElementById('enrollmentDate').disabled = true;
    document.getElementById('saveBtn').disabled = true;
    document.getElementById('updateBtn').disabled = true;
    document.getElementById('resetBtn').disabled = false;
    document.getElementById('rollNo').focus();
}

// Event listener for roll number input
document.getElementById('rollNo').addEventListener('input', checkRollNo);
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


