'use client'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postUserData } from '../Slices/userDetailsSlice';

function UserComponent() {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.user);

    const [userData, setUserData] = useState({
        name: '',
        job: ''
    });

    const handleChange = (e) => {
        setUserData(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    };

    const handleSubmit = () => {
        console.log(userData);
        dispatch(postUserData(userData));
        // Reset form after submission
        setUserData({
            name: '',
            job: ''
        });
    };

    return (
        <div>
            <h1>Create User</h1>
            <div>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Job:
                    <input
                        type="text"
                        name="job"
                        value={userData.job}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <button onClick={handleSubmit} disabled={loading}>
                {loading ? 'Loading...' : 'Create User'}
            </button>
            {error && <div>Error: {error}</div>}
        </div>
    );
}

export default UserComponent;
