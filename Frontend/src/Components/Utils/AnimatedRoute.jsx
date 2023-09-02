import React from 'react';
import { CSSTransition } from 'react-transition-group';

const AnimatedRoute = ({ children}) => {
  return (
    <CSSTransition classNames="page" timeout={500}>
      {children}
    </CSSTransition>
  );
};

export default AnimatedRoute;
