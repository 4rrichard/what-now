import React from "react";
import SearchForm from "../blocks/SearchForm";
import GameRequest from "../blocks/GameRequest";

function SearchSection({ onSearch, value }) {
    return (
        <div className="px-20">
            <SearchForm onSearch={onSearch} />
            <GameRequest value={value} />
        </div>
    );
}

export default SearchSection;
