import classNames from 'classnames';
import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';

const Background = ({ children, className }) => {
  return (
    <MaxWidthWrapper
      className={classNames(
        'bg-[url("./assets/images/background.jpg")] bg-repeat-round  h-screen',
        className
      )}
    >
      {children}
    </MaxWidthWrapper>
  );
};

export default Background;
