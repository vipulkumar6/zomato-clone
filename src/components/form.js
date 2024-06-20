import React, { useState } from 'react'

const FormBox = () => {
    const [number, setNumber] = useState();

    const handleChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setNumber(value);
    };
    return (
        <div>

            <input value={number} onChange={handleChange} placeholder='Enter Telephone number' />

        </div>
    )
}

export default FormBox
