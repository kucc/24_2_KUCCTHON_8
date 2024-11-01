import React, { useCallback } from 'react';
import Question from '../../../Screen/Select/Question';
import Result from '../../../Screen/Select/Result';
import Background from '../../../components/Background';

const Questions = [
  {
    question: '친구가 새로운 일을 시작할 때 보이는 모습은 어떤가요?',
    answers: [
      'A. 즉흥적으로 도전한다.',
      'B. 철저히 계획한다.',
      'C. 사람들과 함께 시작한다.',
      'D. 신중히 따져본다.',
    ],
  },

  {
    question: '친구가 새로운 일을 시작할 때 보이는 모습은 어떤가요?',
    answers: [
      'A. 즉흥적으로 도전한다.',
      'B. 철저히 계획한다.',
      'C. 사람들과 함께 시작한다.',
      'D. 신중히 따져본다.',
    ],
  },

  {
    question: '친구가 새로운 일을 시작할 때 보이는 모습은 어떤가요?',
    answers: [
      'A. 즉흥적으로 도전한다.',
      'B. 철저히 계획한다.',
      'C. 사람들과 함께 시작한다.',
      'D. 신중히 따져본다.',
    ],
  },

  {
    question: '친구가 새로운 일을 시작할 때 보이는 모습은 어떤가요?',
    answers: [
      'A. 즉흥적으로 도전한다.',
      'B. 철저히 계획한다.',
      'C. 사람들과 함께 시작한다.',
      'D. 신중히 따져본다.',
    ],
  },
];

const Select = () => {
  const [step, setStep] = React.useState(1);
  const [answers, setAnswers] = React.useState([]);

  const AddSelect = useCallback(
    (selected) => {
      setAnswers([...answers, selected]);
      console.log(answers);
      setStep(step + 1);
    },
    [step, answers]
  );

  return (
    <Background>
      {step >= 5 ? (
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
