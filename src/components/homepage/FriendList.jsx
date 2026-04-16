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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:w-6xl mx-auto gap-6 p-6">
            {friends.map(friend => (
                <AppCard key={friend.id} friend={friend} />
            ))}
        </div>
    );
};

export default FriendList;