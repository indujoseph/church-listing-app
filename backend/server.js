// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Dummy data for demonstration
const churches = [
    {
        id: '1',
        name: 'St. Mary\'s Cathedral',
        location: '123 Church St, City, State',
        massTimings: ['Mon-Fri: 7:00 AM, 12:00 PM', 'Sat: 5:00 PM (Vigil)', 'Sun: 8:00 AM, 10:00 AM, 5:00 PM'],
        announcements: ['Weekly prayer meeting on Thursday at 7 PM.', 'Charity drive next Sunday after 10 AM mass.'],
        priests: ['Fr. John Doe', 'Fr. Peter Smith']
    },
    {
        id: '2',
        name: 'Holy Cross Church',
        location: '456 Cross Rd, Town, State',
        massTimings: ['Mon-Sat: 6:30 AM, 6:00 PM', 'Sun: 9:00 AM, 11:30 AM'],
        announcements: ['Youth group meeting this Friday at 6:30 PM.', 'No morning mass on public holidays.'],
        priests: ['Fr. Michael Jones']
    }
];

// API Endpoints
app.get('/api/churches', (req, res) => {
    res.json(churches);
});

app.get('/api/churches/:id', (req, res) => {
    const church = churches.find(c => c.id === req.params.id);
    if (church) {
        res.json(church);
    } else {
        res.status(404).send('Church not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});