import { createContext, useContext } from "react";
import { useReducer } from "react";
import {
  AddressProviderType,
  AddressProviderValueType,
} from "./AddressContext.types";
import { AddressReducer } from "./AddressReducer";

export const AddressContext = createContext({} as AddressProviderValueType);

export const AddressProvider = ({ children }: AddressProviderType) => {
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
