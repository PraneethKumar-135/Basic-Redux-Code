"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { ordered, reordered } from '../Store/cakeslice';

const cakeView = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.cake)
    return (
        <div>
            <button
                onClick={() => dispatch(ordered())}
            >Ordered
            </button>
            <span>{count.numberOfCakes}</span>
            <button
                onClick={() => dispatch(reordered(1))}
            >Re-Ordered
            </button>
        </div>
  
    )
}

export default cakeView
