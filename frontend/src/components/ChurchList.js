// src/components/ChurchList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ChurchList = () => {
    const [churches, setChurches] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchChurches = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/churches');
                setChurches(response.data);
            } catch (error) {
                console.error('Error fetching churches:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchChurches();
    }, []);

    if (loading) {
        return <div className="loading-text">Loading...</div>;
    }

    return (
        <div className="church-list-container">
            {churches.length > 0 ? (
                churches.map(church => (
                    <Link to={`/church/${church.id}`} key={church.id} className="church-card">
                        <h2>{church.name}</h2>
                        <p className="church-location">{church.location}</p>
                    </Link>
                ))
            ) : (
                <div className="no-churches-found">No churches found.</div>
            )}
        </div>
    );
};

export default ChurchList;