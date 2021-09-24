import React from 'react';
import data from '../data';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friendList/FriendList';
import TransactionHistory from './transactions/TransactionHistory';

const App = () => {
    return (
        <main>
            <Profile
            name={data.user.name}
            tag={data.user.tag}
            location={data.user.location}
            avatar={data.user.avatar}
            stats={data.user.stats}
            />,
            <Statistics title="Upload stats" 
            stats={data.statisticalData} />,
            <FriendList friends={data.friends} />
            <TransactionHistory items={data.transactions}/>
        </main>
    );
};

export default App;
