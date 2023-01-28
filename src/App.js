import React from 'react';
import './App.css';
import { Fireworks } from '@fireworks-js/react';

function App() {
  return (
    <div className="App">
      <div className="h1-text">
        <div>
          <p> Welcome to React!</p>
        </div>
      </div>

      <Fireworks
        options={{
          rocketsPoint: {
            min: 0,
            max: 300,
          },
        }}
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          position: 'fixed',
          background: '#000',
        }}
      />
      <footer>
        <div className="footer-text">
          <a
            href="https://twitter.com/samit_gh?ref_src=twsrc%5Etfw"
            className="twitter-follow-button"
            data-show-count="false"
          >
            Follow @samit_ghi
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
