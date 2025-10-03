import React from 'react';

const Link = ({item}) => {
    return (
        <div>
            <li className='mr-10'><a href={item.url}>{item.name}</a></li>
        </div>
    );
};

export default Link;