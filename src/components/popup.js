import React from 'react';
import PropTypes from 'prop-types';

const Popup = ({ node, position }) => (
  <div
    style={{
      position: 'fixed',
      top: position.y - 10,
      left: position.x + 20,
      height: 'fit-content',
      width: 'fit-content',
      background: '#112240',
      border: '1px solid #112240',
      borderRadius: '4px',
      padding: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      zIndex: 9999, // Ensure the popup is on top of other elements
    }}>
    <b style={{ color: '#e6f1ff' }}>{node.name}</b>
    <br />
    {/* <br />
    {node.description}
    <br />
    <br /> */}
    <p style={{ color: '#e6f1ff' }}>{node.semester}</p>
  </div>
);

Popup.propTypes = {
  node: PropTypes.object,
  position: PropTypes.object,
};

export default Popup;
