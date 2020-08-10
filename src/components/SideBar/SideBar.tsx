import React, {useContext} from 'react';
import { Link, withRouter } from 'react-router-dom';

// styles
import './SideBar.scss';

// context
import {StoreContext} from "../../store/Store";

// images
import Compare from '../../assets/images/compare.svg';
import History from '../../assets/images/history.svg';
import Help from '../../assets/images/help.svg';
import Logout from '../../assets/images/logout.svg';

// actions
import { logoutAction } from '../../store/Actions';



const SideBar = (props: any) => {

  const { history} = props;
  const { dispatch } = useContext(StoreContext);

  const handleLogout = async () => {
    logoutAction(dispatch);
    history.push('/');
  };

  return (
    <div className="sidebar">
      <div className="sidebar__items">
        <Link to="/compare" className="sidebar__item">
          <img src={Compare} alt="compare" />
          Compare
        </Link>
        <Link to="/history" className="sidebar__item">
          <img src={History} alt="history" />
          History
        </Link>
        <Link to="/help" className="sidebar__item">
          <img src={Help} alt="help" />
          Help
        </Link>
      </div>
      <div className="sidebar__footer " onClick={handleLogout}>
        <img src={Logout} alt="logout" />
        Logout
      </div>
    </div>
  );
};

export default withRouter(SideBar);
