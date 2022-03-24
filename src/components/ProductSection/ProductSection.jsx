import axios from "axios";
import { useState ,useEffect } from "react"
import { AllProducts } from "../AllProducts/AllProducts"
import { Filter } from "../Filter/Filter"

export const ProductSection=()=>{
    const [allProducts,setAllProducts]=useState(null);
   
    useEffect(()=>{
      (async()=>{
          try{
            const res=await axios.get("/api/products",{
                method:"GET"
            })
            setAllProducts(res.data.products);

          }
          catch(error){
             console.log(error);
          }
       })()
    },[])
    return  <section class="product-section">
        <Filter/>
        <AllProducts allProducts={allProducts}/>
    </section>
}