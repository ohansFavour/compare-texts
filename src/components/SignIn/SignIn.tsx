import React, { useState, useContext, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
// styles
import './SignIn.scss';

// context
import { StoreContext } from '../../store/Store';

// helpers
import { authenticateAction } from '../../store/Actions';
import Spinner from '../Spinner/Spinner';

const SignIn = ({ history }: RouteComponentProps): JSX.Element => {
  // State
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [shouldRemember, setShouldRemember] = useState<boolean>(false);

  const empty = !(!!username && !!password);

  const {
    state: { isLoadingUser, currentUser },
    dispatch,
  } = useContext(StoreContext);

  const clearState = (): void => {
    setUsername('');
    setPassword('');
  };

  const handleFormSubmit = (event: React.FormEvent): void => {
    // prevent default action
    event.preventDefault();

    // create form data object
    const actionData = {
      username: username.trim(),
      password,
      remember: shouldRemember,
      dispatch,
    };

    // clear the state
    clearState();

    // call action
    authenticateAction(actionData);
  };

  // move to compare page upon successful signin
  useEffect(() => {
    if (currentUser) {
      history.push('/compare');
    }
  }, [currentUser, history]);

  return (
    <>
      {isLoadingUser ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <form className="signIn" onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="name"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <div className="signIn__remember">
            <input
              type="checkbox"
              id="check"
              onChange={(event) => setShouldRemember(event.target.checked)}
            />{' '}
            <span>Remember this device</span>
          </div>
          <button
            type="submit"
            onClick={handleFormSubmit}
            disabled={empty}
            className={`${empty ? 'disabled' : ''}`}
          >
            Sign In{' '}
          </button>
        </form>
      )}
    </>
  );
};

export default withRouter(SignIn);
