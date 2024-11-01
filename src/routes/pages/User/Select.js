import React, { useCallback } from 'react';
import Question from '../../../Screen/Select/Question';
import Result from '../../../Screen/Select/Result';
import Background from '../../../components/Background';

const Questions = [
  {
    question: '이 친구가 사람들과 어울릴 때 어떤 모습인가요?',
    answers: ['나댄다', '진지충', '예민, 까칠', '풍부한 공감'],
  },

  {
    question: '이 친구의 여가 스타일은?',
    answers: ['운동', '자기만의 세계', '여유로운 휴식', '신중히 따져본다.'],
  },

  {
    question: '이 친구가 스트레스를 받을 때 보이는 모습은?',
    answers: [
      '긍정적인 마인드',
      '혼자 생각함',
      '드라마 정주행',
      '친구들과 대화',
    ],
  },

  {
    question: '이 친구의 일처리 방식은?',
    answers: ['근자감', '직관적', '계획적', '융통성있게'],
  },

  {
    question: '이 친구의 소셜미디어 이미지는?',
    answers: ['인싸', '소셜미디어를 안함', '힙스터', '친근함'],
  },
];

const Select = () => {
  const [step, setStep] = React.useState(1);
  const [answers, setAnswers] = React.useState([0, 0, 0, 0]);

  const AddSelect = useCallback(
    (selected) => {
      setAnswers((prevArray) =>
        prevArray.map((value, i) => (i === selected ? value + 1 : value))
      );
      setStep(step + 1);
    },
    [step]
  );

  return (
    <Background>
      {step >= 6 ? (
        <Result answers={answers} />
      ) : (
        <Question
          step={step}
          questions={Questions[step - 1]}
          AddSelect={AddSelect}
        />
      )}
    </Background>
  );
};

export default Select;
