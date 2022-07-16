import { createContext, useContext, useState } from "react";
import { ModeProviderProps, ModeProviderValueProps } from "./ModeContext.types";



export const ModeContext = createContext({} as ModeProviderValueProps);

export const ModeProvider = ({ children }: ModeProviderProps) => {
  const [mode, setMode] = useState(false);
  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => useContext(ModeContext);
