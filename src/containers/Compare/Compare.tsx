import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';

// styles
import './Compare.scss';

// component
import Upload from '../../components/Upload/Upload';
import Spinner from '../../components/Spinner/Spinner';

// context
import { StoreContext } from '../../store/Store';

// Action
import { compareAction } from '../../store/Actions';


const Compare = (props: any) => {
  // state
  const [firstFile, setFirstFile] = useState();
  const [secondFile, setSecondFile] = useState();
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');

  // context
  const {
    state: { isComparing },
    dispatch,
  } = useContext(StoreContext);

  const empty = !(firstFile && secondFile && firstName && secondName);
  const { history } = props;

  const handleCompare = (event: any) => {
    compareAction({
      firstName,
      firstFile,
      secondName,
      setSecondFile,
      dispatch,
      history,
    });
  };

  return (
    <div className="compare">
      {isComparing ? (
        <Spinner />
      ) : (
        <>
          <div className="compare__cards">
            <Upload
              background={true}
              setFile={setFirstFile}
              setName={setFirstName}
            />
            <Upload
              background={false}
              setFile={setSecondFile}
              setName={setSecondName}
            />
          </div>
          <div>
            <button
              className={`${empty ? 'disabled' : ''}`}
              onClick={handleCompare}
              disabled={empty}
            >
              Compare
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default withRouter(Compare);
