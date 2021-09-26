import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({title, stats}) => {
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>{title}</h2>

            <ul className={styles.statsList}>
                {stats.map((item) => (
                    <li className={styles.statsItem} key={item.id}>
                        <span className={styles.label}>{item.label}</span>
                        <span className={styles.percentage}>{item.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
    })
};

export default Statistics;