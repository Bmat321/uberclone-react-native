import { createContext, useReducer } from "react";
import { StartReducer } from "../reducers/reducer";
import { EndReducer } from "../reducers/reducer";

export const StartContext = createContext();
export const EndContext = createContext();

export const StartContextProvider = (props) => {
  const [start, dispatchStart] = useReducer(StartReducer, {
    latitude: null,
    longitude: null,
    address: "",
    name: "",
  });
  return (
    <StartContext.Provider
      value={{
        start,
        dispatchStart,
      }}
    >
      {props.children}
    </StartContext.Provider>
  );
};

export const EndContextProvider = (props) => {
  const [end, dispatchEnd] = useReducer(EndReducer, {
    latitude: null,
    longitude: null,
    address: "",
    name: "",
  });
  return (
    <EndContext.Provider
      value={{
        end,
        dispatchEnd,  
      }}
    >
      {props.children}
    </EndContext.Provider>
  );
};
