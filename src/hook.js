import { useState } from "react";

const useNum = () => {
  const [numOfBags, setNumOfBags] = useState(0);
  const incrementNum = () => {
    setNumOfBags(numOfBags + 1);
  };
  const decrementNum = () => {
    setNumOfBags(numOfBags - 1);
  };
  return [numOfBags, incrementNum, decrementNum];
};

export default useNum;
