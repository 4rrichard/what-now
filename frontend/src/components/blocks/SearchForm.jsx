import React, { useState } from "react";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import GameRequest from "./GameRequest";

function SearchForm({ onSearch }) {
    const [value, setValue] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        onSearch(value);
        setValue("");
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full flex justify-center pt-10"
        >
            <SearchInput value={value} setValue={setValue} />
            <SearchButton />
        </form>
    );
}

export default SearchForm;
