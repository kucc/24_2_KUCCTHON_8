import React from 'react';
import Background from '../../components/Background';

const NotFound = () => {
  return (
    <Background className='flex flex-col h-full text-center justify-center items-center'>
      <div className='text-2xl text-white'>페이지를 찾을 수 없습니다...</div>
      <div className='text-2xl text-white'>잘못된 주소를 받은 거 같아요!</div>
    </Background>
  );
};

export default NotFound;
