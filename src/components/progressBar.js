import React from 'react';
import PropTypes from 'prop-types';


const ProgressBar = ({ currentProgress }) => {
  const percentage = Math.min(Math.max(currentProgress / 100, 0), 1) * 100;

  return (
    <div className="progress-bar-container" style={containerStyle}>
      <div
        className="progress-bar-fill"
        style={{
          ...fillStyle,
          width: `${percentage}%`,
        }}
      />
      <span className="progress-bar-text" style={textStyle}>
        {Math.round(percentage)}%
      </span>
    </div>
  );
};

const containerStyle = {
  position: 'relative',
  height: '30px',
  width: '100%',
  backgroundColor: '#bcbbbb',
  borderRadius: '15px',
  overflow: 'hidden',
};

const fillStyle = {
  height: '100%',
  backgroundColor: '#964B00',
  transition: 'width 0.3s ease-in-out',
};

const textStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '14px',
  color: '#fff',
}

ProgressBar.propTypes = {
  currentProgress: PropTypes.number.isRequired,
};

export default ProgressBar;
  