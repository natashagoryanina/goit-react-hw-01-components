import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import FriendListItem from './FriendListItem';


const FriendList = ({friends}) => {
    return (
        <ul className={styles.friendList}>
            {friends.map((item)=> (
              <FriendListItem item={item} key={item.id}/>
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number,
    })
};


export default FriendList;
