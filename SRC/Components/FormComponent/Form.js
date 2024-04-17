"use client"
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fillForm } from '../Store/formSlice'
import ViewPage from './viewPage'


const Form = () => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [pno, setPNo] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [display, setdisplay] = useState(false)

    const dispatch = useDispatch()

    const reset = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPNo('');
        setCity('');
        setState('');
    }
    const submitHandler = (e) => {
        e.preventDefault()

        reset();
        dispatch(fillForm(
            {
                firstname,
                lastname,
                email,
                pno,
                city,
                state
            }
        ))
        setdisplay(true)
    }

    return (
        <div className='flex space-x-10'>
            <img className=' w-1/2 rounded-full' src='https://c4.wallpaperflare.com/wallpaper/830/266/321/anime-one-piece-monkey-d-luffy-wallpaper-preview.jpg' />
            <div className='w-1/2'>
                <h1 className='text-2xl font-extrabold '>Registration Form</h1>
                <form className='flex flex-col space-y-2' onSubmit={submitHandler}>
                    <div className='flex justify-between'>
                        <div className='flex flex-col w-1/2 p-1'>
                            <label htmlFor='firstname'>First name</label>
                            <input
                                id='firstname'
                                name='firstname'
                                value={firstname}
                                className='border-2 border-black  rounded-lg px-2 py-1'
                                required
                                placeholder='Enter First Name'
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col w-1/2 p-1'>
                            <label htmlFor='lastname'>Last Name</label>
                            <input
                                id='lastname'
                                name='lastname'
                                value={lastname}
                                className='border-2 border-black  rounded-lg px-2 py-1'
                                required
                                placeholder='Enter Last Name'
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>
                    <label htmlFor='email'>Email</label>
                    <input
                        id='email'
                        name='email'
                        value={email}
                        className='border-2 border-black  rounded-lg px-2 py-1'
                        required
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor='pno'>Phone Number</label>
                    <input
                        id='pno'
                        name='pno'
                        value={pno}
                        className='border-2 border-black  rounded-lg px-2 py-1'
                        required
                        placeholder='Phone Number'
                        onChange={(e) => setPNo(e.target.value)}
                    />
                    <label htmlFor='city'>City :</label>
                    <input
                        id='city'
                        name='city'
                        value={city}
                        className='border-2 border-black  rounded-lg px-2 py-1'
                        required
                        placeholder='City'
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <label htmlFor='state'>State :</label>
                    <input
                        id='state'
                        name='state'
                        value={state}
                        className='border-2 border-black  rounded-lg px-2 py-1'
                        required
                        placeholder='State'
                        onChange={(e) => setState(e.target.value)}
                    />
                    <br></br>
                    <button
                        type='submit'
                        className='text-black bg-blue-600 rounded-lg px-2 py-1'
                    >Submit</button>
                </form>
            </div>
            {display && (<ViewPage />)}
        </div>
    )
}

export default Form