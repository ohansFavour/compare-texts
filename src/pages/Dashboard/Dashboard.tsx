import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import Menu from '../../components/Menu/Menu';
import Burger from '../../components/Burger/Burger';
import SideBar from '../../components/SideBar/SideBar';

// containers
import Compare from '../../containers/Compare/Compare';
import Avatar from '../../containers/Avatar/Avatar';

// pages
import Result from '../Result/Result';
import History from '../History/History';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Switch>
        <Route exact path="/compare" component={Compare} />
        <Route exact path="/result" component={Result} />
        <Route exact path="/history" component={History} />
      </Switch>
      <div>
        <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
        <SideBar />
        <Avatar/>
      </div>
    </div>
  );
};

export default Dashboard;
