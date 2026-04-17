"use client";

import React, { useEffect, useState } from 'react';
import AppCard from '../ui/AppCard';

const FriendList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => setFriends(data));
    }, []);
    return (

        <div className='flex flex-col'>
            <div className='flex text-center'>
                <h1 className='mb-4 mt-4 text-3xl font-bold mx-auto'>Friends List</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:w-6xl mx-auto gap-6 p-6">

                {friends.map(friend => (
                    <AppCard key={friend.id} friend={friend} />
                ))}
            </div>

        </div>
    );
};

export default FriendList;