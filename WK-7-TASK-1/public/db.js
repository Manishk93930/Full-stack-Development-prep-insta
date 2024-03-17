<<<<<<< HEAD
function showUpload(event) {
    event.preventDefault();
    document.querySelector('.upload').style.display = 'flex';
    document.querySelector('.retrieve').style.display = 'none';
}

function showRetrieve(event) {
    event.preventDefault();
    document.querySelector('.upload').style.display = 'none';
    document.querySelector('.retrieve').style.display = 'flex';
}

// Function to retrieve data based on courseId
function retrieveData() {
    // Get the courseId entered by the user
    const courseId = document.getElementById('retrieveid').value;

    // Make a GET request to the server to retrieve data
    fetch(`/retrieveData/${courseId}`)
        .then(response => {
            // Check if response is successful
            if (response.ok) {
                // Parse response JSON
                return response.json();
            } else {
                // If response is not successful, throw an error
                throw new Error('Failed to retrieve data');
            }
        })
        .then(data => {
            // Display the retrieved data in the HTML
            document.getElementById('retrieveData').innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            // Log and display error message
            console.error('Error retrieving data:', error);
            document.getElementById('retrieveData').innerHTML = 'Error retrieving data';
        });
}


// async function uploadData(event) {
//     event.preventDefault();
//     const form = document.getElementById('uploadForm');
//     const courseId = form.elements['courseId'].value;
//     const dueDate = form.elements['dueDate'].value;
//     const taskName = form.elements['taskName'].value;
//     const additionalDetails = form.elements['additionalDetails'].value;

//     try {
//         const response = await fetch('/uploadData', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 courseId,
//                 dueDate,
//                 taskName,
//                 additionalDetails,
//             }),
//         });
//         const data = await response.text();
//         document.getElementById('uploadStatus').textContent = data;
//     } catch (error) {
//         console.error('Error:', error);
//         document.getElementById('uploadStatus').textContent = 'Error uploading data.';
//     }
// }

// function retrieveData() {
//     const form = document.getElementById('retrieveForm');
//     const courseId = form.elements['courseId'].value;

//     fetch(`/retrieveData/${encodeURIComponent(courseId)}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             const retrieveDataDiv = document.getElementById('retrieveData');

//             if (data.error) {
//                 retrieveDataDiv.innerHTML = `<p>${data.error}</p>`;
//             } else {
//                 retrieveDataDiv.innerHTML = `
//                     <p><strong>Course ID:</strong> ${data.courseId}</p>
//                     <p><strong>Due Date:</strong> ${data.dueDate}</p>
//                     <p><strong>Task Name:</strong> ${data.taskName}</p>
//                     <p><strong>Additional Details:</strong> ${data.additionalDetails}</p>
//                 `;
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             const retrieveDataDiv = document.getElementById('retrieveData');
//             retrieveDataDiv.innerHTML = `<p>Error retrieving data from the server.</p>`;
//         });
// }
// Require necessary modules
=======
function showUpload(event) {
    event.preventDefault();
    document.querySelector('.upload').style.display = 'flex';
    document.querySelector('.retrieve').style.display = 'none';
}

function showRetrieve(event) {
    event.preventDefault();
    document.querySelector('.upload').style.display = 'none';
    document.querySelector('.retrieve').style.display = 'flex';
}

// Function to retrieve data based on courseId
function retrieveData() {
    // Get the courseId entered by the user
    const courseId = document.getElementById('retrieveid').value;

    // Make a GET request to the server to retrieve data
    fetch(`/retrieveData/${courseId}`)
        .then(response => {
            // Check if response is successful
            if (response.ok) {
                // Parse response JSON
                return response.json();
            } else {
                // If response is not successful, throw an error
                throw new Error('Failed to retrieve data');
            }
        })
        .then(data => {
            // Display the retrieved data in the HTML
            document.getElementById('retrieveData').innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            // Log and display error message
            console.error('Error retrieving data:', error);
            document.getElementById('retrieveData').innerHTML = 'Error retrieving data';
        });
}


// async function uploadData(event) {
//     event.preventDefault();
//     const form = document.getElementById('uploadForm');
//     const courseId = form.elements['courseId'].value;
//     const dueDate = form.elements['dueDate'].value;
//     const taskName = form.elements['taskName'].value;
//     const additionalDetails = form.elements['additionalDetails'].value;

//     try {
//         const response = await fetch('/uploadData', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 courseId,
//                 dueDate,
//                 taskName,
//                 additionalDetails,
//             }),
//         });
//         const data = await response.text();
//         document.getElementById('uploadStatus').textContent = data;
//     } catch (error) {
//         console.error('Error:', error);
//         document.getElementById('uploadStatus').textContent = 'Error uploading data.';
//     }
// }

// function retrieveData() {
//     const form = document.getElementById('retrieveForm');
//     const courseId = form.elements['courseId'].value;

//     fetch(`/retrieveData/${encodeURIComponent(courseId)}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             const retrieveDataDiv = document.getElementById('retrieveData');

//             if (data.error) {
//                 retrieveDataDiv.innerHTML = `<p>${data.error}</p>`;
//             } else {
//                 retrieveDataDiv.innerHTML = `
//                     <p><strong>Course ID:</strong> ${data.courseId}</p>
//                     <p><strong>Due Date:</strong> ${data.dueDate}</p>
//                     <p><strong>Task Name:</strong> ${data.taskName}</p>
//                     <p><strong>Additional Details:</strong> ${data.additionalDetails}</p>
//                 `;
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             const retrieveDataDiv = document.getElementById('retrieveData');
//             retrieveDataDiv.innerHTML = `<p>Error retrieving data from the server.</p>`;
//         });
// }
// Require necessary modules
>>>>>>> b732338569d054f91e9973d8fedcc7e63f0f41f4
