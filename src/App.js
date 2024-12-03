import logo from './logo.svg';
import './App.css';
import React from "react";
import './style.css';
import Entry from "./components/Entry";
import emojipedia from './emojipedia';

function App() {
  return (
    <div>
      <h1>
        <span>List of Emoji with Details</span>
      </h1>

      <dl className="dictionary">
          {emojipedia.map(x => <Entry
          id={x.id}
          name={x.name}
          emoji={x.emoji}
          meaning={x.meaning} /> )}
      </dl>
    </div>
  );
}

export default App;