import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { APP_ID, USER_ID, NICKNAME } from "./const";
import 'sendbird-uikit/dist/index.css';
import CustomizedApp from "./CustomizedApp";
import { SendBirdProvider as SBProvider } from "sendbird-uikit";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <SBProvider appId={APP_ID} userId={USER_ID} nickname={NICKNAME}>
        <CustomizedApp />
      </SBProvider>
    </div>
  
  );
}

export default App;
