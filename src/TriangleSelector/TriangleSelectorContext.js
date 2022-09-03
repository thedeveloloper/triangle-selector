import { createContext, useState } from "react";

const TriangleSelectorContext = createContext({});

const TriangleSelectorContextProvider = ({ children }) => {
  const [values, setValues] = useState({ a: 33, b: 33, c: 33 });
  return (
    <TriangleSelectorContext.Provider value={{ values, setValues }}>
      {children}
    </TriangleSelectorContext.Provider>
  );
};

export { TriangleSelectorContext, TriangleSelectorContextProvider };
