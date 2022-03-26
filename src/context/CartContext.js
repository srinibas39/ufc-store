

// import { createContext, useContext, useState } from "react";

// const logger = () => console.log("carting");
// const defaultValue = { items: 6, logger: logger };
// export const CartContext = createContext(defaultValue);

// export const CartProvider = ({ children }) => {
//   const [item, setItem] = useState(0);
//   const [mode, setMode] = useState();
//   const addToCart = () => {
//     setItem((items) => items + 1);
//   };
//   return (
//     <CartContext.Provider value={{ item, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

