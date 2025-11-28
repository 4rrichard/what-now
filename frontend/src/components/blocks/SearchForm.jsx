import React, { useState } from "react";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";

function SearchForm({ onSearch }) {
    const [value, setValue] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        console.log(value);
        onSearch(value);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full flex justify-center py-10"
        >
            <SearchInput value={value} setValue={setValue} />
            <SearchButton />
        </form>
    );
}

export default SearchForm;
