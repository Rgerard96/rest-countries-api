'use client';
import { useEffect, useState } from "react";
import { FaSistrix, FaAngleDown, FaAngleUp } from 'react-icons/fa6';

export default function Search({ getSearchResults }) {
    const [query, setQuery] = useState('');
    const [filter, setFilter] = useState('');
    const [filterOpen, setFilterOpen] = useState(false);

    useEffect(() => {
        const searchHandler = async () => {

            const response = await fetch('https://restcountries.com/v3.1/all');

            const countries = await response.json();
            const results = Object.values(countries).filter(item => filter ? item.name.common.toLowerCase().includes(query.toLowerCase()) && item.continents[0].includes(filter) : item.name.common.toLowerCase().includes(query.toLowerCase()));
            getSearchResults(results);
        };

        searchHandler();
    }, [query, filter]);


    return (
        <div className="flex flex-col space-y-8 sm:space-y-0 sm:flex-row justify-between">
            <div className="flex space-x-5 items-center rounded-md  bg-white dark:bg-dark-blue max-w-xl flex-1 drop-shadow-md py-4 px-7">
                <FaSistrix className="w-5 h-5" />
                <input type="text" className="w-full focus:outline-none bg-transparent" placeholder="Seach for a country..." value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
            <div className="space-y-1 relative w-52">
                <div className="bg-white dark:bg-dark-blue rounded-md drop-shadow-md py-4 px-7 flex justify-between items-center cursor-pointer" onClick={() => setFilterOpen(!filterOpen)}>
                    {filter ? filter : 'Filter by Region'}
                    {filterOpen ? <FaAngleDown className="w-4 h-4 ml-5" /> : <FaAngleUp className="w-4 h-4 ml-5" />}
                </div>
                {filterOpen &&
                    <div className="bg-white absolute left-0 top-14 z-10 w-full dark:bg-dark-blue rounded-md drop-shadow-md py-4 px-7">
                        <ul className="space-y-3" onClick={() => setFilterOpen(false)} >
                            <li className="cursor-pointer" onClick={() => setFilter('')}>All</li>
                            <li className="cursor-pointer" onClick={() => setFilter('Africa')}>Africa</li>
                            <li className="cursor-pointer" onClick={() => setFilter('America')}>America</li>
                            <li className="cursor-pointer" onClick={() => setFilter('Asia')}>Asia</li>
                            <li className="cursor-pointer" onClick={() => setFilter('Europe')}>Europe</li>
                            <li className="cursor-pointer" onClick={() => setFilter('Oceania')}>Oceania</li>
                        </ul>
                    </div>}
            </div>
        </div>
    );
}
