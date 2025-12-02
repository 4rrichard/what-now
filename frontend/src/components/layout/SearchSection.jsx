import React from "react";
import SearchForm from "../blocks/SearchForm";
import GameRequest from "../blocks/GameRequest";

function SearchSection({ onSearch }) {
    return (
        <div className="px-20">
            <SearchForm onSearch={onSearch} />
            <GameRequest />
        </div>
    );
}

export default SearchSection;
