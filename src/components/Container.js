import Button from './atoms/Button';
import Card from './Card';
import ProgressBar from './atoms/ProgressBar/ProgressBar';
import { useEffect, useState } from 'react';
import english from './english';

function Container() {
  const [toggle, setToggle] = useState(false);
  const [gameStarted, setGameStarted] = useState(true);
  const [index, setIndex] = useState(null);
  const [arrayOfIndexes, setArrayOfIndexes] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [goodAnswers, setGoodAnswers] = useState([]);

  const toggleCard = () => {
    setToggle(!toggle);
  };

  const startGame = () => {
    setGameStarted(false);
    setGoodAnswers([]);
    setWrongAnswers([]);
    getRandomIndex();
  };

  const getRandomIndex = () => {
    if (arrayOfIndexes.length === 0) {
      initializeArrayOfIndexes();
      setGameStarted(true);
    } else {
    const randomNumber = Math.floor(Math.random() * arrayOfIndexes.length);
    const randomFromAvailableIndexes = arrayOfIndexes[randomNumber];
    setArrayOfIndexes(
      arrayOfIndexes.filter((val) => val !== randomFromAvailableIndexes)
    );

    setIndex(randomFromAvailableIndexes);
  }
  };

  useEffect(() => {
    initializeArrayOfIndexes();
  }, []);

  const initializeArrayOfIndexes = () => {
    let indexesWithoutCurrent = Array(english.length)
      .fill(0)
      .map((el, index) => index);
    setArrayOfIndexes(indexesWithoutCurrent);
  };

  const addToEasy = () => {
    setGoodAnswers([...goodAnswers, index]);
    getRandomIndex();
  };

  const addToHard = () => {
    setWrongAnswers([...wrongAnswers, index]);
    getRandomIndex();
  };

  return (
    <>
      {gameStarted ? (
        <Button handleBtnClick={startGame}>Start Game</Button>
      ) : (
        <>
          <ProgressBar
            progress={english.length - arrayOfIndexes.length}
            maxAnswers={english.length}
          />
          <Card handleClick={toggleCard}>
            {!toggle ? (
              <p>{english[index].answer}</p>
            ) : (
              <p>{english[index].question}</p>
            )}
          </Card>
          <div>
            {goodAnswers.length}
            <Button handleBtnClick={addToEasy}>Easy</Button>
            <Button handleBtnClick={addToHard}>Hard</Button>
            {wrongAnswers.length}
            <div>{`Good indexes: ${goodAnswers}, Wrong indexes: ${wrongAnswers}`}</div>
          </div>
        </>
      )}
    </>
  );
}

export default Container;
