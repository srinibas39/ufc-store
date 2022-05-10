import { useState } from "react"
import { useEffect } from "react";
import { useProduct } from "../../context/ProductContext/ProductContext";

import "./AutoComplete.css"

export const AutoComplete = () => {

    const { prodState } = useProduct();
    const suggestion = prodState.suggestion;
    const [filteredSuggestionList, setFilteredSuggestionList] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        const userInput = e.target.value;
        const unlinked = suggestion.filter((el) => el.toLowerCase().indexOf(userInput.toLowerCase()) > -1);

        setFilteredSuggestionList(unlinked);
        setInput(userInput);
        setShowSuggestion(true);
    }
    const handleClick = (e) => {
        setFilteredSuggestionList([])
        setInput(e.target.innerText);
        setShowSuggestion(false);
    }


    return <div className="search-con">
        <input type="search" value={input} onChange={(e) => handleChange(e)} placeholder={"Type To search"} />
        <span className="material-icons-outlined"> search </span>
        {
            showSuggestion && input && <>
                {
                    filteredSuggestionList.length ? <ul className="auto-input">
                        {
                            filteredSuggestionList.map((el, idx) => {
                                return <li key={idx} onClick={(e) => handleClick(e)}>{el}</li>
                            })
                        }
                    </ul> : <ul className="auto-input"><li><em>Sorry, No search results for {input}</em></li></ul>
                }
            </>
        }

    </div>
}