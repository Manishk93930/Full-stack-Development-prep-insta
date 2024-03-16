const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Course55', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database Connected Successfully!");
        // Define schema for the MongoDB collection
        const FormDataSchema = new mongoose.Schema({
            courseId: String,
            dueDate: String,
            taskName: String,
            additionalDetails: String
        });

        // Create a model for the MongoDB collection
        const FormDataModel = mongoose.model('FormData', FormDataSchema);

        // Set the directory for static files (like HTML, CSS, and JavaScript)
        app.use(express.static(path.join(__dirname, '..', 'public')));

        // Handle GET requests to serve the HTML file
        app.get("/", (req, res) => {
            res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
        });

        // Handle POST requests to upload data
        app.post('/uploadData', async (req, res) => {
            try {
                // Extract form data from request body
                const { courseId, dueDate, taskName, additionalDetails } = req.body;
                console.log('Request body:', req.body);

                // Log the received form data
                console.log('Form data received:');
                console.log('Course ID:', courseId);
                console.log('Due Date:', dueDate);
                console.log('Task Name:', taskName);
                console.log('Additional Details:', additionalDetails);

                // Create a new document using the model
                const formData = new FormDataModel({ courseId, dueDate, taskName, additionalDetails });

                // Save the document to the database
                await formData.save();

                // Log success message
                console.log('Data uploaded successfully');

                // Send response
                res.send('Data uploaded successfully');
            } catch (error) {
                // Log error
                console.error('Error uploading data:', error);

                // Send error response
                res.status(500).send('Error uploading data: ' + error.message);
            }
        });

        // Handle GET requests to retrieve data
app.get('/retrieveData', async (req, res) => {
    try {
        // Extract courseId from request parameters

        //  const courseIdvalue = req.body.courseId;
        const courseIdValue = req.query.courseId;
        console.log('Course ID value:', courseIdValue); // Log the value

        // Find data in the database based on courseId
        const formData = await FormDataModel.findOne({ courseId: courseIdValue });;
        // If data is found, send it as JSON response
        if (formData) {
            res.json(formData);
        } else {
            res.status(404).json({ error: 'Data not found' });
        }
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).json({ error: 'Error retrieving data' });
    }
});


        // Start the server
        const PORT = 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.log("Database cannot be connected");
        console.error(error); // Log the error for debugging
    });
