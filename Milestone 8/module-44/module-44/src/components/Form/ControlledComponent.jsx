import React, { useState } from 'react';

const ControlledComponent = () => {
    // const [name, setName] = useState('');

    const handleSubmit = (e) => 
    {
        e.preventDefault();
        console.log(e.target.value)
        // console.log(name, email, password);
        // console.log(name);

        // if(name.length < 4)
        // {
        //     setError('Too Small')
        // }
        // else
        // {
        //     setError('');
        // }

    }

    // const handleNameChange = (e) =>
    // {
    //     setName(e.target.value);
    // }
    return (
        <div>
            <h3>Controlled Component</h3>
            <form onSubmit={handleSubmit}>
                {/* <input type="text" onSubmit={handleNameChange} defaultValue={name} placeholder='name'/> */}
                <input type="text" placeholder='name'/>
                <br />
                <input type="text" placeholder='email' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ControlledComponent;