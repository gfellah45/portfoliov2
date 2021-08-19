import { createContext, useState } from "react";

export const HeaderContext = createContext();

const HeaderProvider = ({ children }) => {
  const [header, setHeader] = useState(false);

  const toggleHeader = () => setHeader(!header);

  return (
    <HeaderContext.Provider value={{ header, setHeader, toggleHeader }}>
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderProvider;
