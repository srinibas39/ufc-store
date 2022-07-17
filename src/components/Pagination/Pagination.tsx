
import { useMode } from "../../context/ModeContext/ModeContext"
import "./Pagination.css"
import { PaginationProps } from "./Pagination.types"
export const Pagination = ({ setCurrPage, pagesArr }:PaginationProps) => {
    const {mode}=useMode();
    return <>
        <ul className="pagination-container" >
            {
                pagesArr.map((el, idx) => {
                    return <li key={idx} onClick={() => setCurrPage(el)}><button id={mode?`dark2`:""}>{el}</button></li>
                })
            }
        </ul>
    </>

}