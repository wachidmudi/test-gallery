import React from 'react';
import './App.css';

type SquareProps = {
  key: string;
  color: string;
  select: string;
};

const Square = ({ key, color, select }: SquareProps): JSX.Element => {
  /**
   * Define css properties
   */
  const mainStyle: React.CSSProperties = {
    width: 40,
    height: 40,
    margin: 5,
    backgroundColor: color,
  };

  if (color === select) {
    return <div />;
  }

  return <div key={key} style={mainStyle} />;
};

const listColor = ['red', 'green', 'blue', 'brown', 'gray', 'purple', 'pink', 'yellow'];

/**
 * Main App Component
 */
const App: React.FC = () => {
  const [color, setColor] = React.useState(listColor);
  const [select, setSelect] = React.useState('');

  const toggle = (e: any) => setSelect(e.target.value);

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
