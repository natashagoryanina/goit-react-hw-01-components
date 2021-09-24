import React from 'react'; 

const Profile = ({name, tag, location, avatar, stats}) => {
    return (
        <div class="profile">
            <div class="description">
                <img
                src={avatar}
                alt="Аватар пользователя"
                class="avatar"
                />
                <p class="name">{name}</p>
                <p class="tag">@{tag}</p>
                <p class="location">{location}</p>
            </div>

            <ul class="stats">
                {Object.entries(stats).map((item) =>(
                    <li>
                        <span class="label">{item[0]}</span>
                        <span class="quantity">1{item[1]}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Profile;


