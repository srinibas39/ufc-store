import { createContext, useContext, useReducer } from "react";
import { filterAction, filterProviderType, filterState } from "./FilterContext.types";



export const FilterContext = createContext({});

export const FilterProvider = ({ children }:filterProviderType) => {
  const reducerFn = (state:filterState, action:filterAction) => {
    switch (action.type) {
      case "SORT":
        return { ...state, sort: action.payload };
      case "STARS":
        return { ...state, stars: action.payload };
      case "CATEGORY":
        return {
          ...state,
          filterCategory: state.filterCategory.includes(action.payload)
            ? state.filterCategory.filter((el) => el !== action.payload)
            : [...state.filterCategory, action.payload],
        };
      case "RANGE":
        return { ...state, range: action.payload };
      case "CLEAR":
        return {
          ...state,
          sort: null,
          filterCategory: [],
          stars: null,
          range: null,
        };
      default:
        return { ...state };
    }
  };

  const [state, dispatch] = useReducer(reducerFn, {
    sort: null,
    filterCategory: [],
    stars: null,
    range: null,
  });
  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
