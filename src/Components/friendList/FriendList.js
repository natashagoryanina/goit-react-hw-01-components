import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';


const FriendList = ({friends}) => {
    return (
        <ul className={styles.friendList}>
            {friends.map((item)=> (
                <li className={styles.friendsItem} key={item.id}>
                    {item.isOnline ? (<span className={styles.statusTrue}>Online</span>) : 
                    (<span className={styles.statusFalse}>Have been recently</span>)}
                    {/* <span className={item.isOnline ? styles.statusTrue : styles.statusFalse}>Status</span> */}
                    <img className={styles.avatar} src={item.avatar} alt={item.name} width="48" />
                    <p className={styles.name}>{item.name}</p>
                </li>
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.string)
};


export default FriendList;
