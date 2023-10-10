import { useContext, useEffect } from "react";
import { CartCountContext } from "../Context";

const useLocalStorage = (key) => {
  const { account, setAccount } = useContext(CartCountContext);

  useEffect(() => {
    const storedData = localStorage.getItem(key);
    console.log("Stored data:", storedData); // Debugging

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      console.log("Parsed data:", parsedData); // Debugging
      setAccount(parsedData);
    }
  }, [key, setAccount]);

  const saveInfo = (data) => {
    console.log("Saving data:", data); // Debugging
    const storedData = localStorage.getItem(key);
    let currentData = storedData ? JSON.parse(storedData) : {};
    if (Array.isArray(currentData)) {
      currentData = {};
    }
    currentData = { ...currentData, ...data };
    localStorage.setItem(key, JSON.stringify(currentData));
    setAccount(currentData);
  };

  const getInfo = () => {
    const storedData = localStorage.getItem(key);
    if (storedData) {
      return JSON.parse(storedData);
    }
    return null;
  };

  return {
    account,
    saveInfo,
    getInfo,
  };
};

export { useLocalStorage };
