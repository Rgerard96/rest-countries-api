'use client';
import { useState } from "react";
import { FaSistrix } from 'react-icons/fa6';

export default function Search({ getSearchResults }) {
    const [query, setQuery] = useState('');

    const onChangeHandler = (e) => {
        setQuery(e.target.value);
        searchHandler();
    };
    console.log(query);

    const searchHandler = async () => {

        const response = await fetch('https://restcountries.com/v3.1/all');

        const countries = await response.json();
        const results = await Object.values(countries).filter(item => item.name.common.toLowerCase().includes(query.toLowerCase()));
        getSearchResults(results);
    };
    return (
        <div className="flex space-x-3 items-center rounded-md  bg-white max-w-xl drop-shadow-md py-3 px-7">
            <FaSistrix className="w-4 h-4 text-dark-gray" />
            <input type="text" className="w-full focus:outline-none" placeholder="Seach for a country..." value={query} onChange={onChangeHandler} />
        </div>
    );
}
