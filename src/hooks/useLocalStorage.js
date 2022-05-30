import {useState} from 'react';

const useLocalStorage = (key, initialValue) => {
  const [data, setData] = useState(() => {
    try {
      const data = localStorage.getItem(key);
      if (!data) {
        return initialValue;
      }
      return JSON.parse(data);
    } catch (error) {
      return initialValue;
    }
  });
  const saveData = (newData) => {
    localStorage.setItem(key, JSON.stringify({token: newData}));
    setData({token: newData});
  };
  return [data, saveData];
};

export default useLocalStorage;
