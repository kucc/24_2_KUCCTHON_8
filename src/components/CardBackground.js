import classNames from 'classnames';
import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';

const CardBackground = ({ children, className }) => {
  return (
    <MaxWidthWrapper className='py-[18px] px-4 h-full'>
      <div
        className={classNames(
          'bg-[#E2DDFF] h-full w-full rounded-3xl p-4',
          className
        )}
      >
        {children}
      </div>
    </MaxWidthWrapper>
  );
};

export default CardBackground;
