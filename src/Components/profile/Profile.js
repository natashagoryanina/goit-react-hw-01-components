import React from 'react'; 
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({name, tag, location, avatar, stats}) => {
    return (
        <div className={styles.profile}>
            <div className={styles.description}>
                <img
                src={avatar}
                alt="Аватар пользователя"
                className={styles.avatar}
                />
                <p className={styles.name}>{name}</p>
                <p className={styles.tag}>@{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>

            <ul className={styles.stats}>
                {Object.entries(stats).map((item) =>(
                    <li className={styles.statsItem}>
                        <span className={styles.label}>{item[0]}</span>
                        <span className={styles.quantity}>1{item[1]}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Profile.propTypes = {
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string, 
    stats: PropTypes.objectOf(PropTypes.number)
};

export default Profile;


