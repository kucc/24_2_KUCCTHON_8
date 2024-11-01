// 이거 기반으로 해서,
const preData = [
  {
    star: '헤라클레스',
    image: 'images/stars/heracles.png',
    whoNamed: '',
    link: 'https://namu.wiki/w/%ED%97%A4%EB%A5%B4%EC%BF%A8%EB%A0%88%EC%8A%A4%EC%9E%90%EB%A6%AC',
  },
  {
    star: '전갈',
    image: 'images/stars/scorpion.png',
    whoNamed: '',
    link: 'https://namu.wiki/w/%EC%A0%84%EA%B0%88%EC%9E%90%EB%A6%AC',
  },
  {
    star: '염소',
    image: 'images/stars/goat.png',
    whoNamed: '',
    link: 'https://namu.wiki/w/%EC%97%BC%EC%86%8C%EC%9E%90%EB%A6%AC',
  },
  {
    star: '고래',
    image: 'images/stars/whale.png',
    whoNamed: '',
    link: 'https://namu.wiki/w/%EA%B3%A0%EB%9E%98%EC%9E%90%EB%A6%AC',
  },
];

// 헤라클래스 전갈 염소 고래

export const makeCharacter = (answers, name) => {
  const max = answers.indexOf(Math.max(...answers));

  let character = preData[max];
  character.whoNamed = name;

  return character;
};
