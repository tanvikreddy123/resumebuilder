import React from "react";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

import "./App.css";
import { Amplify } from 'aws-amplify';
import config from './aws-exports';

import { withAuthenticator, Authenticator } from '@aws-amplify/ui-react';



Amplify.configure(config);

function App() {
  return (
    <div className="App">
      <Header className="App-header">
        <Authenticator/>
        <h2>My app content</h2>
      </Header>
      <Body />
    </div>
  );
}

export default withAuthenticator(App);
