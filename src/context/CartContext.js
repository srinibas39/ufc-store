

export const CartContext=createContext();

export const  CartProvider=({children})=>{
   <CartContext.Provider>
       {children}
   </CartContext.Provider>
}
    

