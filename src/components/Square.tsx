import React from 'react';
import PropTypes from 'prop-types';

interface SquareProps {
  key: string;
  color: string;
  select: string;
}

const Square: React.FC<SquareProps> = ({ color, select, key }) => {
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

Square.propTypes = {
  color: PropTypes.string.isRequired,
  select: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};

export default Square;
