// setupDatabase.js

const { MongoClient } = require('mongodb');

async function setupDatabase() {
  const uri = 'mongodb://localhost:27017'; // Update with your MongoDB connection string
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const database = client.db('studentDatabase');

    // Create Academic Records Collection
    const academicRecordsCollection = database.collection('academicRecords');
    await academicRecordsCollection.createIndex({ studentId: 1 }, { unique: true });
    await academicRecordsCollection.insertMany([
      {
        studentId: 1,
        name: 'John Doe',
        grades: { math: 95, science: 88, history: 75 },
        subjects: ['math', 'science', 'history'],
        // Add other academic information as needed
      },
      // Add more academic records
    ]);

    // Create Co-curricular Activities Collection
    const coCurricularActivitiesCollection = database.collection('coCurricularActivities');
    await coCurricularActivitiesCollection.createIndex({ studentId: 1 }, { unique: true });
    await coCurricularActivitiesCollection.insertMany([
      {
        studentId: 1,
        name: 'John Doe',
        activityType: 'Sports',
        duration: '2 years',
        achievements: ['First place in basketball tournament', 'Participation in swimming competition'],
        // Add other co-curricular information as needed
      },
      // Add more co-curricular activities
    ]);

    // CRUD Operations

    // Read Academic Records for a specific student
    const academicRecord = await academicRecordsCollection.findOne({ studentId: 1 });
    console.log('Academic Record:', academicRecord);

    // Update Academic Records for a specific student
    await academicRecordsCollection.updateOne({ studentId: 1 }, { $set: { grades: { math: 98, science: 90, history: 85 } } });

    // Read Updated Academic Records
    const updatedAcademicRecord = await academicRecordsCollection.findOne({ studentId: 1 });
    console.log('Updated Academic Record:', updatedAcademicRecord);

    // Delete Academic Records for a specific student
    await academicRecordsCollection.deleteOne({ studentId: 1 });

    // Read Remaining Academic Records
    const remainingAcademicRecords = await academicRecordsCollection.find().toArray();
    console.log('Remaining Academic Records:', remainingAcademicRecords);

    // Similar CRUD operations can be performed for co-curricular activities

    console.log('Database setup completed');
  } finally {
    await client.close();
    console.log('Connection to MongoDB closed');
  }
}

setupDatabase();
