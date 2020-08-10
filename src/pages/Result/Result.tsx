import React, { useContext } from 'react';

// styles
import './Result.scss';

// context
import { StoreContext } from '../../store/Store';

const Result = () => {
  // context
  const {
    state: { result },
  } = useContext(StoreContext);

  return (
    <div className="result">
      <div className="result__card">
        <p className="result__heading">Percentage of Related Texts</p>
        <h1>{result}</h1>
        <div>
          The system uses an algorithm to compare each of the student's answers
          and formulas with each other. These steps include:
          <ul>
            <li>Storing the first student's text </li>
            <li>Storing the second student's text</li>
            <li>Finding the Longest Common Subsequence</li>
            <li>Calculating the ratio</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Result;
