import Button from "./atoms/Button";
import Card from "./Card";
import ProgressBar from "./atoms/ProgressBar/ProgressBar";
import { useEffect, useState } from "react";
import english from "./english";

function Container() {
  // const [data, setData] = useState({});
  const [toggle, setToggle] = useState(false);
  const [gameStarted, setGameStarted] = useState(true);
  const [index, setIndex] = useState(null);
  // const [indexesToOmit, setIndexesToOmit] = useState([]);
  const [arrayOfIndexes, setArrayOfIndexes] = useState([]);

  // const getData = () => {
  //   fetch("data/english.json")
  //           .then(res => res.json())
  //           .then(myJson => setData(myJson));
  // };

  const toggleCard = () => {
    setToggle(!toggle);
  };

  // const handleRandom = () => {
  // console.log("go1")
  // setIndex(getRandomIndex());
  // console.log("go2")
  // console.log(arrayOfIndexes)
  // }

  const startGame = () => {
    setGameStarted(false);
    getRandomIndex();
  };

  const resetGame = () => {
    setData();
    setGameStarted(true);
  };

  const getRandomIndex = () => {
    // const max = english.length
    // // const randomIndex
    // for (let index = 0; index < array.length; index++) {
    //   const element = array[index];
    // }
    if (arrayOfIndexes.length === 0) {
      setData();
      console.log("setting");
    } else {
      console.log("not setting");
    }
    const randomNumber = Math.floor(Math.random() * arrayOfIndexes.length);
    const randomFromAvailableIndexes = arrayOfIndexes[randomNumber];
    // console.log(randomFromAvailableIndexes);
    console.log(`arrayOfIndexes: ${arrayOfIndexes}`);
    // var index = array.indexOf(item);
    // if (index !== -1) {
    // array.splice(index, 1);
    // }
    setArrayOfIndexes(
      arrayOfIndexes.filter((val) => val !== randomFromAvailableIndexes)
    );
    // const randomIndex = Math.floor(Math.random() * max + min)
    // const randomIndex = Math.floor(Math.random() * max);
    // console.log(randomIndex)
    // setIndex(randomIndex)
    // return randomIndex
    // return randomIndex
    // return randomFromAvailableIndexes
    // console.log(arrayOfIndexes)

    setIndex(randomFromAvailableIndexes);
  };

  useEffect(() => {
    setData();
    // console.log(arrayOfIndexes.length)
    // console.log(arrayOfIndexes[5])
    // console.log(arrayOfIndexes[6])
    // console.log("settttt")
  }, []);

  const setData = () => {
    let indexesWithoutCurrent = Array(english.length)
      .fill(0)
      .map((el, index) => index);
    setArrayOfIndexes(indexesWithoutCurrent);
    console.log("curr " + indexesWithoutCurrent);
    console.log("eng len " + english.length);
  };

  // useEffect(() => {
  // setIndex(getRandomIndex())
  // setIndex(1)
  // }, [])

  // useEffect(() => {
  //   getData();
  // }, []);

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
