import React, { act } from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
   
    
  };

  return (
    <div>
      {
        React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            parse,
            actions,
          })
        })
      }
    </div>
  )
};

export default MessageParser;