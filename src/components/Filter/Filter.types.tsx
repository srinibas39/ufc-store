import { allProductType } from "../../context/ProductContext/ProductContext.types"


export type FilterProps={
    allProducts:allProductType[],
    setFilterOpen:React.Dispatch<React.SetStateAction<boolean>>
}