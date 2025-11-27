import React from "react";
import SearchInput from "./SearchInput";
import CTAButton from "./SearchButton";

function SearchForm() {
    return (
        <form className="flex  justify-center py-10">
            <SearchInput />
            <CTAButton />
        </form>
    );
}

export default SearchForm;
