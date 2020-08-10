import React, { useState, useContext } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

// component
import Upload from '../../components/Upload/Upload';

// styles
import './History.scss';

// Action
import { historyAction, compareAction } from '../../store/Actions';

// context
import { StoreContext } from '../../store/Store';
import Spinner from '../../components/Spinner/Spinner';

// Types
import { TResult } from '../../store/Types';

const History = ({ history }: RouteComponentProps) => {
  const [tab, setTab] = useState(1);
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');

  const {
    state: { isFetchingHistory, historyResult, isComparing },
    dispatch,
  } = useContext(StoreContext);

  const empty = !(file && name);

  const handleHistory = () => {
    historyAction({
      firstName: name,
      firstFile: file,
      dispatch,
      setTab,
    });
  };

  const handleReRun = (result: any) => {
    compareAction({
      firstName: name,
      firstFile: file,
      dispatch,
      secondName: result.second_student,
      secondFile: result.second_file,
      history,
    });
  };

  return (
    <div className="history">
      {isFetchingHistory || isComparing ? (
        <Spinner />
      ) : (
        <>
          {tab === 1 ? (
            <div className="history__card history--nopad">
              <h3> Upload First Student's Text</h3>
              <Upload background={true} setFile={setFile} setName={setName} />
              <button
                className={`history__button ${empty ? 'disabled' : ''}`}
                disabled={empty}
                onClick={handleHistory}
              >
                Check History
              </button>
            </div>
          ) : (
            <div className="history__result">
              <h2>Previous Comparisons for Tunde</h2>
              <div className="history__items">
                {historyResult.map(
                  (result: TResult, index: number): JSX.Element => (
                    <div className="history__item" key={index}>
                      <h3>
                        {result.first_student} vs {result.second_student}
                      </h3>
                      <span>
                        <strong>Date:</strong> {result.date}
                      </span>
                      <span>
                        <strong>Result:</strong> {result.result}
                      </span>
                      <button
                        onClick={() => {
                          handleReRun(result);
                        }}
                      >
                        Re-run
                      </button>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default withRouter(History);
