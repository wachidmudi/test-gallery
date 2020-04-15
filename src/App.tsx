import React, { useState } from 'react';
import './App.css';
import Square from './components/Square';

const listColor = ['red', 'green', 'blue', 'brown', 'gray', 'purple', 'pink', 'yellow'];

/**
 * Main App Component
 */
const App: React.FC = () => {
  const [color, setColor] = useState(listColor);
  const [select, setSelect] = useState('');

  const toggle = (e: any): void => setSelect(e.target.value);

  /**
   * Generate random color
   */
  function randomItem(items: any): string {
    return items[Math.floor(Math.random() * items.length)];
  }

  return (
    <div className="App">
      <select className="form-control mx-2 w-auto" onChange={toggle}>
        <option value="">Category</option>
        {color.map(i => (
          <option key={`select-${i}`} value={i}>
            {i}
          </option>
        ))}
      </select>
      <div className="container">
        <div className="row">
          {/* Map array to get 5 x 8 square */}
          {Array(5)
            .fill(1)
            .map((_, i) => (
              <div key={`col-${i}`} className="col">
                {Array(8)
                  .fill(1)
                  .map((_, i) => (
                    <Square key={`row-${i}`} color={randomItem(color)} select={select} />
                  ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;
