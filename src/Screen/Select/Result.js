import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CardBackground from '../../components/CardBackground';
import { useGetData } from '../../hooks/useGetData';
import { base64Encoder } from '../../utils/crypto';
import { makeCharacter } from '../../utils/makeCharacter';

// 이거 기반으로

const Result = ({ answers }) => {
  const datas = useGetData();
  const navigate = useNavigate();
  const { username } = useParams();
  const [name, setName] = React.useState('');

  const character = makeCharacter(answers, name);

  return (
    <CardBackground>
      <div className='flex flex-col w-full h-full justify-around items-center text-center'>
        <div className='flex items-center justify-center rounded-full w-fit h-fit p-12  bg-[#6C61E9]  border-black border-2'>
          <img
            className='w-40 h-40'
            src={character.image}
            alt={character.star}
          />
        </div>
        <div className='rounded-full px-12 py-3 bg-[#6C61E9] font-black text-xl'>
          {`${character.star} 자리`}
        </div>

        <div className='flex flex-col w-full'>
          <input
            className='rounded-2xl p-4 mb-2'
            placeholder='만든 사람의 이름을 입력해주세요'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>

          <button
            className='rounded-2xl bg-[#EEC4FB] p-4'
            onClick={() => {
              if (name === '') {
                alert('이름을 입력해주세요');
              } else {
                datas.push(character);
                const encodedData = base64Encoder(datas);
                navigate(`/user/${username}?datas=${encodedData}`);
              }
            }}
          >
            친구 우주에 추가하기
          </button>
        </div>
      </div>
    </CardBackground>
  );
};

export default Result;
