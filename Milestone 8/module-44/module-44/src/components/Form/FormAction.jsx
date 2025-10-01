import React from 'react';

const FormAction = () => {

    const handleFormAction = (data) =>
    {
        console.log(data.get('name'));
        console.log(data.get('email'));
    }
    return (
        <div>
            <h3>Data Through Form Action</h3>
            <form action={handleFormAction}>
                <input type="text" name='name' />
                <br />
                <input type="text" name='email'/>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default FormAction;