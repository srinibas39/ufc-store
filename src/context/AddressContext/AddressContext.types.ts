
export type AddressProviderValueType = {
    addressState: addressStateType;
    addressDispatch:React.Dispatch<addressAction>
  };

 export type addressType = {
    country: string;
    name: string;
    house: string;
    city: string;
    state: string;
    zipcode: string;
    phn: string;
  };
  
  export type addressStateType = {
    addresses: addressType[];
    addressEdit: {} | addressType;
    addressDummy: addressType;
    addressSelected: null | addressType;
  };
  
 export type addressAction = {
    type: "ADDRESS" | "ADDRESS_REMOVE" | "ADDRESS_EDIT" | "ADDRESS_SELECTED"
    payload: addressType
  };
  
export type AddressProviderType = {
    children: React.ReactNode;
  };