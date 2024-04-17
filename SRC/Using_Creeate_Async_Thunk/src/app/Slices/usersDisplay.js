import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../Slices/userDetailsSlice';

function UserComponent() {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>User Data</h1>
            <ul>
                {data.map(user => (
                    <li key={user.id} className='p-4'>
                        <div>First Name: {user.first_name}</div>
                        <div>Last Name: {user.last_name}</div>
                        <div>Email: {user.email}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserComponent;
