import Link from "next/link";

async function getBorders(countryBorders) {
    const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${countryBorders}
    `);

    const borders = await response.json();
    return borders;
}

export default async function Borders({ countryBorders }) {
    const borders = await getBorders(countryBorders);
    return (
        <div className="mt-12 sm:mt-24 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <div className="flex-none mt-2">
                <p className="font-semibold">Border countries:</p>
            </div>
            <div className="flex flex-wrap">
                {borders.map((border) => (
                    <Link href={`/country/${border.name.common.toLowerCase()}`} className="drop-shadow-md rounded-md py-1.5 px-5 text-center bg-white dark:bg-dark-blue mb-2 mr-2">
                        <p className="text-sm">
                            {border.name.common}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
