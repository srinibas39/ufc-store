
import "./Pagination.css"
import { PaginationProps } from "./Pagination.types"
export const Pagination = ({ setCurrPage, pagesArr }:PaginationProps) => {
    return <>
        <ul className="pagination-container">
            {
                pagesArr.map((el, idx) => {
                    return <li key={idx} onClick={() => setCurrPage(el)}><button>{el}</button></li>
                })
            }
        </ul>
    </>

}