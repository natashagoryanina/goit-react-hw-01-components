import React from 'react';

const FriendList = ({friends}) => {
    return (
        <ul class="friend-list">
            {friends.map((item)=> (
                <li class="item" key={item.id}>
                    {item.isOnline ? (<span class="status">Online</span>) : 
                    (<span class="status">have been recently</span>)}
                    <span class="status"></span>
                    <img class="avatar" src={item.avatar} alt={item.name} width="48" />
                    <p class="name">{item.name}</p>
                </li>
            ))}
        </ul>
    );
}

export default FriendList;
