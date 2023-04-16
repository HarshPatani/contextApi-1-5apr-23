import { createContext, useContext } from "react";

export const InputContext = createContext();

export const useInputContext = () => useContext(InputContext);
