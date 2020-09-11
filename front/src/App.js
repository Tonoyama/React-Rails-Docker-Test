import React from 'react';
import './App.css';
import GithubIcon from './GitHub-Mark-64px.png'
import TwitterIcon from './Twitter_Logo_Blue.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-name">
          ToDo リスト
      </p>
      </header>
      <body className="App-body">
      </body>
      <footer className="App-footer">
        <img src={GithubIcon} alt="Github Icon" />
        <img src={TwitterIcon} alt="Twitter Icon" />
      </footer>
    </div>
  );
}

export default App;
