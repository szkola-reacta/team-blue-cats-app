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

  const toggleCard = () => {
    setToggle(!toggle);
  };

  const startGame = () => {
    setGameStarted(false);
    getRandomIndex();
  };

  const resetGame = () => {
    setData();
    setGameStarted(true);
  };

  const getRandomIndex = () => {
    if (arrayOfIndexes.length === 0) {
      setData();
    }
    const randomNumber = Math.floor(Math.random() * arrayOfIndexes.length);
    const randomFromAvailableIndexes = arrayOfIndexes[randomNumber];
    setArrayOfIndexes(
      arrayOfIndexes.filter((val) => val !== randomFromAvailableIndexes)
    );

    setIndex(randomFromAvailableIndexes);
  };

  useEffect(() => {
    setData();
  }, []);

  const setData = () => {
    let indexesWithoutCurrent = Array(english.length)
      .fill(0)
      .map((el, index) => index);
    setArrayOfIndexes(indexesWithoutCurrent);
  };

  //TODO - karta 12 się nie pokazuje (arrayOfIndexes.length + 1)
  return (
    <>
      {gameStarted ? (
        <>
          <Card>Start Game</Card>
          <Button handleBtnClick={startGame} />
        </>
      ) : arrayOfIndexes.length ? (
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
          <Button handleBtnClick={getRandomIndex} />
        </>
      ) : (
        resetGame()
      )}
    </>
  );
}

export default Container;
