import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Background from '../../../components/Background';
import CardBackground from '../../../components/CardBackground';
import MaxWidthWrapper from '../../../components/MaxWidthWrapper';
import { useGetData } from '../../../hooks/useGetData';
import { base64Encoder } from '../../../utils/crypto';

const User = () => {
  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(
        '클립보드에 링크가 복사되었어요.\n친구에게 링크를 보내 꾸며달라하세요!'
      );
    } catch (err) {
      console.log(err);
    }
  };

  const location = window.location.href;
  const { username } = useParams();
  const datas = useGetData();

  return (
    <Background className='text-center'>
      <div className='flex flex-col justify-between'>
        <div className='p-8'>
          <h1 className='text-white font-black text-3xl'>{`'${username}'의 우주`}</h1>
        </div>

        <CardBackground className='flex justify-between flex-wrap'>
          {datas.length === 0 ? (
            <MaxWidthWrapper className='flex flex-col items-center justify-center text-center'>
              <div className='text-[#552990] text-xl font-bold mb-4'>
                아직 친구의 우주가 없어요.
              </div>
              <div className='text-[#552990] text-xl font-bold '>
                친구의 우주를 만들어주세요!
              </div>
            </MaxWidthWrapper>
          ) : (
            datas.map((data) => {
              return (
                <div key={data.whoNamed} className='flex flex-col items-center'>
                  <div className='flex items-center justify-center rounded-full w-fit h-fit p-8  bg-[#6C61E9] border-black border-2'>
                    <img
                      className='w-20 h-20'
                      src={data.image}
                      alt={data.star}
                    />
                  </div>
                  <div className='py-1 px-8 border-black border-2 rounded-full my-2 bg-[#EEC4FB]'>
                    {data.whoNamed}
                  </div>
                </div>
              );
            })
          )}
        </CardBackground>
      </div>

      <div className='flex flex-col  items-center'>
        <Link
          to={`/user/select/${username}${
            datas.length > 0 ? '?datas=' + base64Encoder(datas) : ''
          }`}
          className='text-[#552990] font-bold bg-[#EEC4FB] p-5 rounded-3xl my-5'
        >
          친구의 별자리 만들어주기
        </Link>
        <button
          onClick={() => handleCopyClipBoard(location)}
          className='text-[#552990] font-bold bg-[#EEC4FB] p-5 rounded-3xl my-5'
        >
          링크 복사하기
        </button>
      </div>
    </Background>
  );
};

export default User;
