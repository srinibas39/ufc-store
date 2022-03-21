import { AllProducts } from "../AllProducts/AllProducts"
import { Filter } from "../Filter/Filter"

export const ProductSection=()=>{
    return  <section class="product-section">
        <Filter/>
        <AllProducts/>
    </section>
}