import React, { useState } from "react"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../context/ProductContext/ProductContext";

import "./AutoComplete.css"

export const AutoComplete = () => {

    const { prodState } = useProduct();
    const suggestion = prodState.suggestion;
    const [filteredSuggestionList, setFilteredSuggestionList] = useState<string[]>([]);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const [input, setInput] = useState("");

    const { prodDispatch } = useProduct();
    const navigate = useNavigate();

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const userInput = e.target.value;
        const unlinked = suggestion.filter((el) => el.toLowerCase().indexOf(userInput.toLowerCase()) > -1);

        setFilteredSuggestionList(unlinked);
        setInput(userInput);
        setShowSuggestion(true);
    }
    const handleClick = (e:React.MouseEvent) => {
        const input=e.target as HTMLElement
        setFilteredSuggestionList([])
        setInput(input.innerText);
        setShowSuggestion(false);
        prodDispatch({ type: "SEARCH_TEXT", payload: input.innerText });
        navigate("/search")
    }
    const handleKeyDown = (e: React.KeyboardEvent) => {
         const target=e.target as HTMLInputElement
        if (e.keyCode === 13 && input.trim().length) {
            prodDispatch({ type: "SEARCH_TEXT", payload: target.value });
            navigate("/search")
        }

    }

    const handleSearch = () => {
        if (input.trim().length) {

            prodDispatch({ type: "SEARCH_TEXT", payload: input });
            navigate("/search")
        }
    }

    return <div className="search-con">
        <input type="search" value={input} onChange={(e) => handleChange(e)}
            onKeyDown={(e) => handleKeyDown(e)}
            placeholder={"Type To search"} />

        <span className="material-icons-outlined" onClick={() => handleSearch()}> search </span>
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