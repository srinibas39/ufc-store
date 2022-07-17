import { addressAction, addressStateType } from "./AddressContext.types";

export const AddressReducer = (state: addressStateType, action: addressAction) => {
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

}