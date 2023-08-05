import Borders from "@/app/components/Borders";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from 'react-icons/fa6';

async function getCountry(name) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);

    const country = await response.json();
    return country;
}

export default async function CountryName({ params }) {
    const country = await getCountry(params.name);

    return (
        <div className="max-w-[1600px] mx-auto">
            <Link href='/' className="drop-shadow-lg rounded-md px-8 py-2 flex space-x-2 mb-16 sm:mb-20 w-fit bg-white dark:bg-dark-blue items-center hover:bg-gray-50 hover:dark:bg-very-dark-blue">
                <FaArrowLeftLong />
                <span>Back</span>
            </Link>
            {country.map((country, index) => (
                <div key={index} className="flex flex-col sm:flex-row justify-between space-y-10 sm:space-y-0 sm:space-x-40 items-center">
                    <div className="h-60 sm:h-[450px] w-full relative sm:flex-1">
                        <Image
                            src={country.flags.svg}
                            alt={`${country.name.common} image`}
                            fill
                            style={{
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                    <div className="flex-1">
                        <h1 className="mb-8 text-3xl font-bold">{country.name.common}</h1>
                        <div className="flex flex-col sm:flex-row space-y-12 sm:space-y-0 sm:space-x-36">
                            <div className="space-y-2">
                                <p><span className="font-semibold">Native Name:</span>  {country.name.official}</p>
                                <p><span className="font-semibold">Population:</span>  {country.population.toLocaleString()}</p>
                                <p><span className="font-semibold">Region:</span>  {country.region}</p>
                                <p><span className="font-semibold">Sub Region:</span>  {country.subregion}</p>
                                <p><span className="font-semibold">Capital:</span>  {country.capital}</p>
                            </div>
                            <div className="space-y-2">
                                <p><span className="font-semibold">Top Level Domain:</span>  {country.tld}</p>
                                <p><span className="font-semibold">Currencies:</span> {country.currencies && Object.values(country.currencies)[0].name}</p>
                                <p><span className="font-semibold">Languages:</span>  {country.languages && Object.values(country.languages).toString().replace(/,/g, ', ')}</p>
                            </div>
                        </div>
                        {country.borders &&
                            <Borders countryBorders={country.borders} />
                        }
                    </div>
                </div>
            ))}
        </div>
    );
}
