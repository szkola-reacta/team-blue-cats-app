import Button from './atoms/Button';
import Card from './Card';
import ProgressBar from './atoms/ProgressBar/ProgressBar'
import { useEffect, useState } from 'react';
import english from './english';

function Container() {
  const [data, setData] = useState({});
  const [toggle, setToggle] = useState(false);
  const [index, setIndex] = useState(0);

  const getData = () => {
    fetch("data/english.json")
            .then(res => res.json())
            .then(myJson => setData(myJson));
  };

  const toggleCard  =  () => {
    setToggle(!toggle)
  }

  const getRandomIndex = (min=0, max=english.length-1) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    setIndex(randomIndex);
    //return randomIndex
  }

  console.log(index)

  useEffect(() => {
    getData();
  }, []);

    return (
    <>
      <ProgressBar />
      <Card handleClick={toggleCard}>{!toggle ? <p>{english[index].answer}</p> : <p>{english[index].question}</p>}</Card>
      <Button/>
    </>
  );
}

export default Container;
