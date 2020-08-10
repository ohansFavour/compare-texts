// Burger.js
import React from 'react';

// styles
import './Burger.scss';

interface IOwnProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Burger: React.FC<IOwnProps> = ({ isOpen, setIsOpen }): JSX.Element => {
  return <div className={`${isOpen ?  "burger burger__close": "burger"}`} onClick={()=> setIsOpen(!isOpen)}></div>;
};

export default Burger;
