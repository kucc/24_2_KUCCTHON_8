import React from 'react';
import { useNavigate } from 'react-router-dom';
import Background from '../../components/Background';

const Home = () => {
  const [name, setName] = React.useState('');
  const navigate = useNavigate();

  return (
    <Background className='bg-[url("./assets/images/background.jpg")] bg-cover h-screen'>
      <div className='flex flex-col items-center justify-center h-full space-y-4'>
        <p className='text-[#F0FFAD] mb-10  text-3xl font-extrabold'>
          친구의 별자리 찾아주기
        </p>

        <img
          src='./images/stars/star.png'
          className='rounded-full bg-[#E2DDFF] w-48 h-48 text-center '
          alt='the star'
        />

        <div className='flex flex-col '>
          <input
            className='p-4 mb-2 rounded-xl'
            placeholder='이름을 입력해주세요'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>

          <button
            className='p-4 font-bold rounded-full bg-slate-200 '
            onClick={() => {
              if (name === '') {
                alert('이름을 입력해주세요');
              } else {
                navigate(`/user/${name}`);
              }
            }}
          >
            시작하기
          </button>
        </div>
      </div>
    </Background>
  );
};

export default Home;
