import { createContext, useState } from "react";

export const SvContext = createContext();

function ServiceContext({ children }) {
  const [height, setHeight] = useState(0);

  return (
    <SvContext.Provider value={{ height, setHeight }}>
      {children}
    </SvContext.Provider>
  );
}

export default ServiceContext;
