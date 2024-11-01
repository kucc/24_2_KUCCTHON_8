import React from 'react';
import CardBackground from '../../components/CardBackground';

const Question = ({ step, questions, AddSelect }) => {
  const { question, answers } = questions;
  return (
    <CardBackground>
      <div className='flex flex-col h-full justify-around items-center text-center'>
        <div className='flex flex-row w-10/12 justify-between items-center'>
          <div className='h-2 w-12 bg-[#9AB7FF]'></div>
          <p className='text-white'>{step}</p>
          <div className='h-2 w-12 bg-[#9AB7FF]'></div>
        </div>
        <p className='font-black text-xl'>{question}</p>
        <div className='flex flex-col '>
          {answers.map((answer, index) => {
            return (
              <button
                key={index}
                onClick={() => AddSelect(index)}
                className='text-black bg-white py-5 px-8 rounded-full mt-5'
              >
                {answer}
              </button>
            );
          })}
        </div>
      </div>
    </CardBackground>
  );
};

export default Question;
