import classNames from 'classnames';
import React from 'react';

const MaxWidthWrapper = ({ children, className }) => {
  return <div className={classNames('w-screen ', className)}>{children}</div>;
};

export default MaxWidthWrapper;
