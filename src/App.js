import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar.component";
import Chat from "./components/chat/chat.component";
import Login from './components/login/login.component';
import { Switch, Route } from "react-router-dom";
import {useStateValue} from './StateProvider';

function App() {
  const [{user},dispatch] = useStateValue()

  return (
    <div className="app">
      {user ? (
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            {
              //   <Route path="/">
              //   <Chat />
              // </Route>
            }
          </Switch>
        </div>
      ) : (
        <Login/>
      )}
    </div>
  );
}

export default App;
