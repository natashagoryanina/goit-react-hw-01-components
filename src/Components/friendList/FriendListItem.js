import React from 'react';
import styles from './FriendList.module.css';

const FriendListItem = ({item}) => {
    return (
        <li className={styles.friendsItem}>
            {item.isOnline ? (<span className={styles.statusTrue}>Online</span>) : 
                (<span className={styles.statusFalse}>Have been recently</span>)}
                {/* <span className={item.isOnline ? styles.statusTrue : styles.statusFalse}>Status</span> */}
                <img className={styles.avatar} src={item.avatar} alt={item.name} width="48" />
                <p className={styles.name}>{item.name}</p>
        </li>
    );
}

export default FriendListItem;
