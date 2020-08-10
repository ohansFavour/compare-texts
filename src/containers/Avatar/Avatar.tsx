import React, { useContext } from 'react';

// styles
import './Avartar.scss';

// Image
import Profile from '../../assets/images/avatar.png';

// context
import { StoreContext } from '../../store/Store';

const Avatar = () => {
  const {
    state: {
      currentUser,
    },
  } = useContext(StoreContext);

  return (
    <div className="avatar">
      <img alt="avatar" src={Profile} />
      <div className="avatar__details">
        <span className="avatar__name">{currentUser.username}</span>
        <span>Admin</span>
      </div>
    </div>
  );
};

export default Avatar;
