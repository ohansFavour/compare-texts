import React, { useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';

// styles
import './Menu.scss';

// images
import Compare from '../../assets/images/compare.svg';
import History from '../../assets/images/history.svg';
import Help from '../../assets/images/help.svg';
import Logout from '../../assets/images/logout.svg';

// context
import { StoreContext } from '../../store/Store';

// actions
import { logoutAction } from '../../store/Actions';
import Avatar from '../../containers/Avatar/Avatar';

const Menu = (props: any): JSX.Element => {
  const { history, setIsOpen, isOpen } = props;
  const { dispatch } = useContext(StoreContext);

  const handleLogout = async () => {
    logoutAction(dispatch);
    setIsOpen(!isOpen);
    history.push('/');
  };

  return (
    <nav className={`${isOpen ? 'menu__show' : 'menu__hide'}`}>
      <div className="nav__items">
        <Avatar mobile={true} />
        <Link
          to="/compare"
          className="nav__item"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={Compare} alt="compare" />
          Compare
        </Link>
        <Link
          to="/history"
          className="nav__item"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={History} alt="history" />
          History
        </Link>
        <Link
          to="/help"
          className="nav__item"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={Help} alt="help" />
          Help
        </Link>
      </div>
      <div className="nav__footer" onClick={handleLogout}>
        <img src={Logout} alt="logout" />
        Logout
      </div>
    </nav>
  );
};
export default withRouter(Menu);
