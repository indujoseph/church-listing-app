// src/components/ChurchDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ChurchDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [church, setChurch] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchChurch = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/churches/${id}`);
                setChurch(response.data);
            } catch (error) {
                console.error('Error fetching church details:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchChurch();
    }, [id]);

    if (loading) {
        return <div className="loading-text">Loading...</div>;
    }

    if (!church) {
        return (
            <div className="not-found-container">
                <p>Church not found.</p>
                <button onClick={() => navigate('/')}>Go Back to List</button>
            </div>
        );
    }

    return (
        <div className="church-details-container">
            <button className="back-button" onClick={() => navigate('/')}>← Back</button>
            <h2 className="church-name-title">{church.name}</h2>
            <div className="details-section">
                <h3>📍 Location</h3>
                <p>{church.location}</p>
            </div>
            <div className="details-section">
                <h3>⏰ Mass Timings</h3>
                <ul>
                    {church.massTimings.map((time, index) => (
                        <li key={index}>{time}</li>
                    ))}
                </ul>
            </div>
            <div className="details-section">
                <h3>📢 Announcements</h3>
                <ul>
                    {church.announcements.map((announcement, index) => (
                        <li key={index}>{announcement}</li>
                    ))}
                </ul>
            </div>
            <div className="details-section">
                <h3>👨‍💼 Priests</h3>
                <ul>
                    {church.priests.map((priest, index) => (
                        <li key={index}>{priest}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ChurchDetails;