import React from 'react';
import PropTypes from 'prop-types';


const ProjectCard = ({ name, description }) => {
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