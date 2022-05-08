
import "./Pagination.css"
export const Pagination = ({ setCurrPage, pagesArr }) => {
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