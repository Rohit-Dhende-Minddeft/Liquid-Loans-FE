import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();
const baseUrl = "https://minddeft.net/dev_blog/wp-json/md/v1";

export function AppWrapper({ children }) {
  const [categories, setCategories] = useState();
  const getCategories = async () => {
    try {
      const res = await fetch('https://minddeft.net/dev_blog/wp-json/md/v1/categories');
      const data = await res.json();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <AppContext.Provider value={{ categories }}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
