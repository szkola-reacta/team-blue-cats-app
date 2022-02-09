import Button from './atoms/Button';
import Card from './Card';
import ProgressBar from './atoms/ProgressBar/ProgressBar'
import { useEffect, useState } from 'react';

function Container() {
  const [data, setData] = useState({});

  const getData = () => {
    fetch("data/english.json")
            .then(res => res.json())
            .then(myJson => setData(myJson));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data)

    return (
    <>
      <ProgressBar />
      <Card question={data.english[0].question}/>
      <Button/>
    </>
  );
}

export default Container;
