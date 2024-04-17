import React from 'react';
import { useSelector } from 'react-redux';

const ViewPage = () => {
    const showData = useSelector((state) => state.form);
    return (
        <div>
            {showData.map((data, index) => (
                <div key={index} className='p-2'>
                    <h1 className='font-semibold text-xl'>{data.firstname}</h1>
                    <h1 className='font-semibold text-xl'>{data.lastname}</h1>
                    <h1 className='font-semibold text-xl'>{data.email}</h1>
                    <h1 className='font-semibold text-xl'>{data.pno}</h1>
                    <h1 className='font-semibold text-xl'>{data.city}</h1>
                    <h1 className='font-semibold text-xl'>{data.state}</h1>
                </div>
            ))}
        </div>
    );
};

export default ViewPage;
