import React, { createContext, useContext } from "react";
import { useReducer } from "react";
import {
  addressAction,
  AddressProviderType,
  AddressProviderValueType,
  addressStateType,
} from "./AddressContext.types";



export const AddressContext = createContext({} as AddressProviderValueType);

export const AddressProvider = ({ children }: AddressProviderType) => {
  const AddressReducer = (state: addressStateType, action: addressAction) => {
    switch (action.type) {
      case "ADDRESS":
        return { ...state, addresses: [...state.addresses, action.payload] };
      case "ADDRESS_REMOVE":
        return {
          ...state,
          addresses: state.addresses.filter((el) => el !== action.payload),
        };
      case "ADDRESS_EDIT":
        return { ...state, addressEdit: action.payload };
      case "ADDRESS_SELECTED":
        return { ...state, addressSelected: action.payload };

      default:
        return { ...state };
    }
  };

  const [addressState, addressDispatch] = useReducer(AddressReducer, {
    addresses: [
      {
        country: "India",
        name: "Adarsh Ballika",
        house: "#1/4 , 100ft Ring Road, Jp Nagar - 4 Phase, Dollars Colony",
        city: "Banglore",
        state: "Maharashtra ",
        zipcode: "853008",
        phn: "5719801234",
      },
    ],
    addressEdit: {},
    addressDummy: {
      country: "India",
      name: "Adarsh Ballika",
      house: "#1/4 , 100ft Ring Road, Jp Nagar - 4 Phase, Dollars Colony",
      city: "Banglore",
      state: "Maharashtra ",
      zipcode: "853008",
      phn: "5719801234",
    },
    addressSelected: null,
  });
  return (
    <AddressContext.Provider value={{ addressState, addressDispatch }}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);
