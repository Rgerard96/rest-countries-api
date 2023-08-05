'use client';
import { useEffect, useState } from "react";
import CountryCard from "./components/CountryCard";
import Search from "./components/Search";

export default function Home() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const results = await response.json();
      setCountries(results);
    };

    fetchCountries();
  }, []);
  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="mb-14 w-full">
        <Search getSearchResults={(results) => setCountries(results)} />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-20'>
        {countries.map((country, index) => (
          <div>
            <CountryCard country={country} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
